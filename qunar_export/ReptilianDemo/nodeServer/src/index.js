// $('document').ready(function(){
//     $("#addText").click(function(){
//         // $.get("/example/jquery/demo_test.asp",function(data,status){
//         // alert("数据：" + data + "\n状态：" + status);
//         // });
//         console.log('111111')
//     });
// });

document.onkeydown = function(event) {
    const code = event.keyCode;
    if(code === 13) {
        addArticle();
    }
}
document.getElementById('addText').onclick = addArticle;

function addArticle() {
    const url = $('#input').val();
    var patt1 = new RegExp("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]");
    if(!patt1.test(url)) {
        alert("请输入正确的url!!");
        document.getElementById('input').value = '';
        return;
    }
    $.get('/index?url=' + url, function(data, status) {
        if(status === 'success') {
            console.log(data);
            const docFragment = document.createDocumentFragment();
            const table = document.getElementById('table');
            const caption = table.getElementsByTagName('th');
            const tr = document.createElement('tr');
            for(let i=0; i<caption.length; i++) {
                const td = document.createElement('td');
                if(i === 0) {
                    td.innerHTML = `<a href=${data[i].url} target='_blank'>${data[i].caption}</a>`;
                    td.className = 'caption';
                    docFragment.appendChild(td);
                }else {
                    td.innerHTML = data[i];
                    docFragment.appendChild(td);
                }
            }
            tr.appendChild(docFragment);
            table.appendChild(tr);
            
        }else {
            alert("获取数据错误");
        }
    })
    document.getElementById('input').value = '';
}