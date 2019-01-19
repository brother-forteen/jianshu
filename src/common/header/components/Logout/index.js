import React, { Component, Fragment } from 'react';
import {
    LogoutWrapper,
    LogoutImg,
    LogoutSlide,
    LogoutSlideItem
} from './style';
import headImg from './../../../../statics/images/icon1.png'

class Logout extends Component{
    render() {
        return(
            <Fragment>
                <LogoutWrapper>
                    <LogoutImg src={ headImg }></LogoutImg>
                    <i className='iconfont'>&#xe611;</i>
                    
                    <LogoutSlide>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe631;</i>我的主页</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe610;</i>收藏的文章</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe6ab;</i>喜欢的文章</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe604;</i>已购内容</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe63b;</i>我的钱包</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe660;</i>设置</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe66f;</i>帮助与反馈</a></LogoutSlideItem>
                        <LogoutSlideItem><a href=""><i className='iconfont'>&#xe6a9;</i>退出</a></LogoutSlideItem>
                    </LogoutSlide>
                </LogoutWrapper>
            </Fragment>
        )
    }
}

export default Logout;