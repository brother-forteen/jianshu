import React, { Component, Fragment } from 'react';

import {
    NavItem,
    LogoutSlide,
    LogoutSlideItem
} from './style';

class LogoutLeft extends Component {
    render() {
        return(
            <Fragment>
                <NavItem className='left active'>发现</NavItem>
                <NavItem className='left'>关注</NavItem>
                <NavItem className='left'>消息
    
                    <LogoutSlide>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe60a;</i>评论</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe621;</i>简信</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xec09;</i>投稿请求</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe6ef;</i>喜欢和赞</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe66d;</i>关注</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe632;</i>赞赏和付费</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe626;</i>其他提醒</a></LogoutSlideItem>
                    </LogoutSlide>
                </NavItem>
            </Fragment>
        )
    }
}

export default LogoutLeft;