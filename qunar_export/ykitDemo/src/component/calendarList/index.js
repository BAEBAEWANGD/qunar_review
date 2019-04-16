import React, { Component } from 'react';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';
import { List } from '$yo-component';

class CalendarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "Mon"
        }
    }
    componentDidMount() {
        const dataItemInit = document.getElementsByClassName("date-item");
        dataItemInit[0].className += " date-item-active";
    }
    render() {
        const data = {
            "Mon": {
                    "date": "02-05",
                    "weekday": "今天",
                    "money": "￥363",
                    "list": [
                        {
                            "key": 1,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "￥484",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        },
                        {
                            "key": 2,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "￥484",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        },
                        {
                            "key": 3,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "￥484",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        },
                        {
                            "key": 4,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "￥484",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        },
                        {
                            "key": 5,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "￥484",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        },
                        {
                            "key": 6,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "￥484",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        },
                        {
                            "key": 7,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "1111",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        },
                        {
                            "key": 8,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "1111",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        },
                        {
                            "key": 9,
                            "startTime": "06:35",
                            "endTime": "08.50",
                            "startAddress": "首都T3",
                            "endAddress": "虹桥T2",
                            "aviation": "吉祥航HO1252 空客321(中)",
                            "totalMoney": "1111",
                            "type": "经济舱4.9折",
                            "riseHot": "持续涨价中"
                        }
                    ]
                },
            "Tue": {
                "date": "02-06",
                "weekday": "周二",
                "money": "￥363",
                "list": [{
                    "key": 9,
                    "startTime": "06:35",
                    "endTime": "08.50",
                    "startAddress": "首都T3",
                    "endAddress": "虹桥T2",
                    "aviation": "吉祥航HO1252 空客321(中)",
                    "totalMoney": "22222",
                    "type": "经济舱4.9折",
                    "riseHot": "持续涨价中"
                }]
            },
            "Wed":  {
                "date": "02-07",
                "weekday": "周三",
                "money": "￥363",
                "list": [
                    {
                        "key": 9,
                        "startTime": "06:35",
                        "endTime": "08.50",
                        "startAddress": "首都T3",
                        "endAddress": "虹桥T2",
                        "aviation": "吉祥航HO1252 空客321(中)",
                        "totalMoney": "333333",
                        "type": "经济舱4.9折",
                        "riseHot": "持续涨价中"
                    },
                    {
                        "key": 9,
                        "startTime": "06:35",
                        "endTime": "08.50",
                        "startAddress": "首都T3",
                        "endAddress": "虹桥T2",
                        "aviation": "吉祥航HO1252 空客321(中)",
                        "totalMoney": "1111",
                        "type": "经济舱4.9折",
                        "riseHot": "持续涨价中"
                    }
                ]
            },
            "Thu": {
                "date": "02-08",
                "weekday": "周四",
                "money": "￥363",
                "list": [
                    {
                        "key": 9,
                        "startTime": "06:35",
                        "endTime": "08.50",
                        "startAddress": "首都T3",
                        "endAddress": "虹桥T2",
                        "aviation": "吉祥航HO1252 空客321(中)",
                        "totalMoney": "44444",
                        "type": "经济舱4.9折",
                        "riseHot": "持续涨价中"
                    }
                ]
            },
            "Fri": {
                "date": "02-09",
                "weekday": "周五",
                "money": "￥363",
                "list": [
                    {
                        "key": 9,
                        "startTime": "06:35",
                        "endTime": "08.50",
                        "startAddress": "首都T3",
                        "endAddress": "虹桥T2",
                        "aviation": "吉祥航HO1252 空客321(中)",
                        "totalMoney": "5555",
                        "type": "经济舱4.9折",
                        "riseHot": "持续涨价中"
                    }
                ]
            }
        };
        const UpOrDown = {
            "UP": true,
            "DOWN": false
        }
        return (
            <div className="list">
                <div className="date-list">
                    <div className="date-list-left">
                        {
                            Object.keys(data).map((key, index) => {
                                return   <Touchable touchClass="m-content-active" onTap={() => this.clickDateListHandler(key, index)}>
                                    <div key={key} className="date-item">
                                        <div>{data[key].date}</div>
                                        <div>{data[key].weekday}</div>
                                        <div>{data[key].money}</div>
                                    </div>
                                </Touchable>
                            }) 
                        }
                    </div>
                    <div className="more">
                        <i class="iconfont icon-rili"></i>
                        <div>更多日期</div>
                    </div>
                </div>
                <List
                    itemHeight="115"
                    ref="list"
                    extraClass="flex m-list"
                    dataSource={data[this.state.key].list}
                    renderItem={(item, key) => <div key={key} className="journey-item">
                    <div className="journey-left">
                        <div className="top">
                            <div className="start">
                                <div className="time">{item.startTime}</div>
                                <div className="address">{item.startAddress}</div>
                            </div>
                            <div className="routerLine">
                                <div className="line"></div>
                            </div>
                            <div className="end">
                                <div className="time">{item.endTime}</div>
                                <div className="address">{item.endAddress}</div>
                            </div>
                        </div>
                        <div className="bottom">{item.aviation}</div>
                    </div>
                    <div className="journey-right">
                        <div className="totalMoney">{item.totalMoney}</div>
                        <div className="type">{item.type}</div>
                        <div className="riseHot">{item.riseHot}</div>
                    </div>
                </div>}
                    itemHeight={150}
                    itemExtraClass={(item, i) => {
                        return 'item ' + i;
                    }}
                    onItemTap={(item, i, ds) => {
                        alert("this index is ===> " + i);
                    }}
                    onScroll={(offsetY, UpOrDown) => this.scorllHiddenSome(offsetY, UpOrDown)}
                    usePullRefresh={true}
                    onRefresh={() => {
                        setTimeout(() => {
                            console.log("刷新");
                            this.refs.list.stopAnimate();
                            this.refs.list.stopRefreshing(true);
                        }, 500);
                    }}
                    useLoadMore={true}
                    onLoad={() => {
                        setTimeout(() => {
                        console.log("加载更多")
                        this.refs.list.stopLoading(true);
                        }, 500);
                    }}
                    onScrollEnd={() => {console.log("滑动结束")}}                    
                />
            </div>
        )
    }

    scorllHiddenSome(offsetY, UpOrDown) {
        //待优化，触发次数过多,节流未生效
        const footer = document.getElementsByTagName('footer')[0];
        const dateList = document.getElementsByClassName('date-list')[0];
        let timer = false;
        //上滑
        if(UpOrDown === "up" || offsetY > 0) {
            console.log("up")
            if(footer.className.indexOf("date-list-footer-hidden") > 0 && dateList.className.indexOf("date-list-footer-hidden") > 0) {
                footer.className = ' footerFlex';
                dateList.className = ' date-list';
            }
            //加载更多
            if(offsetY < -460) {
                if(footer.className.indexOf("date-list-footer-hidden") === -1 && dateList.className.indexOf("date-list-footer-hidden") === -1) {
                    footer.className += ' date-list-footer-hidden';
                    dateList.className += ' date-list-footer-hidden';
                }
            }
        }else {//下滑
            // clearTimeout(timer);
            // timer = setTimeout(function() {
            //     if(footer.className.indexOf("date-list-footer-hidden") === -1 && dateList.className.indexOf("date-list-footer-hidden") === -1) {
            //         footer.className += ' date-list-footer-hidden';
            //         dateList.className += ' date-list-footer-hidden';
            //     }
            //     console.log("防抖，滑动完成才可收起");
            // }, 1000);
            //滑动立即收起，或使用函数节流——一段时间内执行一次
            if(footer.className.indexOf("date-list-footer-hidden") === -1 && dateList.className.indexOf("date-list-footer-hidden") === -1) {
                footer.className += ' date-list-footer-hidden';
                dateList.className += ' date-list-footer-hidden';
            }
        }
    }

    clickDateListHandler(activeKey,index) {
        const dataItemActive = document.getElementsByClassName("date-item");
        //初始化date列表，使样式统一，再添加active样式
        for(let i=0; i<dataItemActive.length; i++) {
            if(dataItemActive[i].className.indexOf("date-item-active") > 0) {
                dataItemActive[i].className = "date-item"
            }
        }
        dataItemActive[index].className += " date-item-active";
        
        this.setState({
            key: activeKey
        })
    }
}

CalendarList.defaultProps = {
}

export default CalendarList;
