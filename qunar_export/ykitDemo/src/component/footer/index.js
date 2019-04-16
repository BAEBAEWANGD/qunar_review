import React, { Component } from 'react';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCheck: [true, true, true, true]
        };
    }

    render() {
        let titles = this.props.title.split(',');
        let logo = this.props.logo.split(',');
        return (
            
            <footer className="footerFlex">
            {
                titles.map((title, key) => {
                    return  <Touchable touchClass="touchable-opacity " onTap={() => this.active(key)}>
                        <div className="footer-logo" key={key}>
                            <i class={"iconfont icon-" + logo[key]}></i>
                            <div className="desc">{title}</div>
                        </div>
                </Touchable> 
               })
            }
            </footer>
        )
    }

    active(key) {
        const logo = document.getElementsByClassName("footer-logo");
        if(this.state.activeCheck.length >= logo.length) {
            if(this.state.activeCheck[key]) {
                //点击显示颜色
                logo[key].className += ' active';
                this.state.activeCheck[key] = !this.state.activeCheck[key];
            }else {
                logo[key].className = logo[key].className.split(' ')[0];
                this.state.activeCheck[key] = !this.state.activeCheck[key];
            }
        }

    }
}

Footer.defaultProps = {
    title: '',
    logo: ''
}

export default Footer;