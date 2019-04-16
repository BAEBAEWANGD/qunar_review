import React, { Component } from 'react';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <header className="yo-header">
                <h2 className="title" dangerouslySetInnerHTML={{ __html: this.props.title }}></h2>
                {
                    this.props.left ?
                        <Touchable touchClass="touchable-opacity" onTap={() => this.props.left.onTap()}>
                            <a className="regret yo-ico"
                               dangerouslySetInnerHTML={{ __html: this.props.left.title }}></a>
                        </Touchable> : null
                }
                {
                    this.props.right.icon ?
                        <Touchable touchClass="touchable-opacity" onTap={() => this.props.right.onTap()}>
                            {/* <a className={this.props.right.icon ? "affirm yo-ico" : "affirm"}>{this.props.right.title || ''}</a> */}
                            <a className="affirm">{this.props.right.title || ''}</a>
                        </Touchable> 
                        :
                        <Touchable touchClass="touchable-opacity" onTap={() => this.props.right.onTap()}>
                            <a className="affirm"><i class="iconfont icon-find"></i></a>
                        </Touchable>
                }
            </header>
        )
    }
}

Header.defaultProps = {
    title: '标题',
    left: {
        title: '&#xf07d;',
        onTap: function () {
            yoHistory.go(-1);
        }
    },
    right: {
        icon: false,
        onTap: function () {
            alert('hello');
        }
    }
}

export default Header;
