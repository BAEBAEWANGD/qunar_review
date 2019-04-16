import React, { Component } from 'react';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import CalendarList from '$component/calendarList/index.js';
import './index.scss';


class Train extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header title="北京<i class='iconfont icon-single_arrow'></i>上海" />
                <CalendarList/>
                <Footer title="筛选,推荐排序,时间,价格" logo="shaixuan,sort_icon,shijian,jiage"/>
            </div>
        )
    }
}
export default Train;