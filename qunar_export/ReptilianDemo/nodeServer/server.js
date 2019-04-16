// 第一种创建服务的方式
// const http = require("http");
// const cheerio = require('cheerio');
// const iconv = require('iconv-lite')
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
//     const url = 'http://www.runoob.com/nodejs/nodejs-http-server.html';
//     http.get(url, (res) => {
//         const chunks = [];
//         res.on('data', (chunk) => {
//             chunks.push(chunk);
//         })
//         res.on('end', () => {
//             const html = iconv.decode(Buffer.concat(chunks), 'utf8');
//             const $ = cheerio.load(html, {decodeEntities: false});
//             const bodyText = $("body").text();
//             console.log(bodyText)
//             response.end(bodyText);
//         })
//     })
// }).listen(3000);

const express = require('express');
const app = express();
const path = require('path');
const http = require("http");
const https = require("https");
const cheerio = require('cheerio');
const iconv = require('iconv-lite')
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '19971012',
  database : 'test',
  port: '3306'
});
 
connection.connect((err) => {
    if(err) {
        console.log(err, '数据库连接失败');
    }else {
        console.log('数据库连接成功~~~~~');
    }
});


//1.第一种方式（静态文件js与css不生效）
// const fs=require("fs");
// app.get("/index.html", function(request, response) {
//     fs.readFile("./src/" + request.path.substr(1), function(err, data) {
//     if(err) {
//         console.log(err);
//         response.writeHead(404,{"Content-Type":"text/html"});
//     } else {
//         response.writeHead(200,{"Content-Type":"text/html"});
//         response.write(data.toString());
//     }
//         response.end();
//     });
// });


//2.第二种方式
app.use(express.static(path.join(__dirname, 'src')))

app.listen(8888, function() { //监听http://127.0.0.1:3000端口
    console.log("server start");
});

console.log('Server running at http://127.0.0.1:8888/');


app.get('/index', (req, response) => {
    //有待改善的地方——当url不存在或访问不到时，会存在错误。
    const url = req.query.url;
    let bodyText = '';
    let httpOrhttps = url.indexOf('https') !== -1 ? https : http
    httpOrhttps.get(url, (res) => {
        const chunks = [];
        res.on('data', (chunk) => {
            chunks.push(chunk);
        })
        res.on('end', () => {
            const objData = [];
            const html = iconv.decode(Buffer.concat(chunks), 'utf8');
            const $ = cheerio.load(html, {decodeEntities: false});
            const caption = $("title").text();
            bodyText = Trim($("body").text(), 'g');
            if(bodyText === '301MovedPermanentlyopenresty') {
                console.log("存在重定向，可使用https协议，尝试爬取，，，");
                return ;
            }
            objData.push({url: url, caption: caption});
             //总字符串数量
            objData.push(bodyText.length);
             //去标点字符串
            const delPunctuation = bodyText.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\、|\，|\；|\。|\？|\！|\“|\”|\‘|\’|\：|\（|\）|\─|\…|\—|\·|\《|\》]/g, "");
            const obj = getWordsCnt(delPunctuation);
             //中文字符长度obj.chinese,英文字符长度obj.english
            objData.push(obj.chinese);
            objData.push(obj.english);
            //标点数量
            objData.push(objData[1] - delPunctuation.length);
            const addSql = `INSERT INTO chapter_table(title, allLen, chineseLen, englishLen, punctuationLen, url) VALUES(?,?,?,?,?,?)`;
            const addSqlParams = [];
            addSqlParams.push(objData[0].caption, objData[1], objData[2], objData[3], objData[4] , objData[0].url)
            connection.query(addSql, addSqlParams, (err, result) => {
                if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                   }        
                  console.log('--------------------------INSERT----------------------------');
                  console.log('INSERT ID:',result);        
                  console.log('-----------------------------------------------------------------\n');  
            })
            response.send(objData);
        }).on('error', function(err) {
            console.log('err=======>', err);
        })
    })
})

function getWordsCnt(str){
    let chinese = 0, english = 0;
    for(let i=0;i<str.length;i++){
         const ch = str.charCodeAt(i);
         if(ch > 255){ // 中文字符集
            chinese++;
         }else{
             english++;
         }
    }
    return {chinese: chinese, english: english};
}

function Trim(str, is_global) {
   let result;
   result = str.replace(/(^\s+)|(\s+$)/g,"");
   if(is_global.toLowerCase() == "g") {
    result = result.replace(/\s/g,"");
   }
   return result;
}






// //1.获取一个路由的title
// const url = 'http://www.ygdy8.net/html/gndy/dyzz/index.html';
// http.get(url, (res) => {
//     const chunks = [];
//     res.on('data', (chunk) => {
//         chunks.push(chunk);
//     })
//     res.on('end', () => {
//         const html = iconv.decode(Buffer.concat(chunks), 'gb2312');
//         const titles = [];
//         const $ = cheerio.load(html, {decodeEntities: false});
//         $('.co_content8 .ulink').each((index, ele) => {
//             $ele = $(ele);
//             titles.push({
//                 title: $ele.text()
//             })
//         })
//         console.log(titles);
//     })
// })


//2.获取多个页面的titles
// let index = 1;
// let n = 0;
// //获取title页面
// const url = 'http://www.ygdy8.net/html/gndy/dyzz/list_23_';
// //详情页的获取下载链接页面
// const indexUrl = 'http://www.ygdy8.net';
// const titles = [], urlLink = [];

// function getTitle(url, i) {
//     console.log("正在爬取第 " + i + " 个页面。。。。。。。");
//     http.get(url + i + '.html', (res) => {
//         const chunks = [];
//         res.on('data', (chunk) => {
//             chunks.push(chunk);
//         })

//         res.on('end', () => {
//             const html = iconv.decode(Buffer.concat(chunks), 'gb2312');
//             const $ = cheerio.load(html, {decodeEntities: false});
//             $('.co_content8 .ulink').each((index, ele) => {
//                 $ele = $(ele);
//                 titles.push({
//                     title: $ele.text(),
//                     href: $ele.attr('href')
//                 })
//             })
//             if(index < 2) {
//                 getTitle(url, ++index);
//             }else {
//                 console.log(titles);
//                 console.log("title获取完毕");
//                 getBtLink(indexUrl, n)
//             }
//         })
//     })
// }
// function getBtLink(indexUrl, i) {
//     if(titles.length != 0) {
//         http.get(indexUrl + titles[i].href, (res) => {
//             console.log("正在获取第 " + i + " 个URL");
//             const chunks = [];
//             res.on('data', (chunk) => {
//                 chunks.push(chunk);
//             })
    
//             res.on('end', () => {
//                 const html = iconv.decode(Buffer.concat(chunks), 'gb2312');
//                 const $ = cheerio.load(html, {decodeEntities: false});
//                 $('#Zoom td').children('a').each((index, ele) => {
//                     $ele = $(ele);
//                     urlLink.push({
//                         url: $ele.attr('href')
//                     })
//                 })
//                 if(i < titles.length - 1) {
//                     getBtLink(indexUrl, ++n);
//                 }else {
//                     console.log(urlLink);
//                     console.log("url获取完毕");
//                 }
//             })
//         })
//     }else {
//         console.log("还未获取到titles.href， 相对路径");
//     }
// }
// function main() {
//     console.log("开始爬取");
//     getTitle(url, index);
// }
// main();