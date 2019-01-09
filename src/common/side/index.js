import React, { Component } from 'react';
import {
    SideTool,
    SideItem,
    SideTag,
    SideShareWrap,
    SideShareItem
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class BackTop extends Component{
    render() {
        const { sideShareShow, backTop,showSideShare } = this.props;
        return (
            <SideTool>
                <SideItem title='123' onClick={backTop}>
                    <i className='iconfont side-up'>&#xe64d;</i>
                    <SideTag className='side-title'>
                        返回顶部
                    </SideTag>
                </SideItem>
                <SideItem onClick={() => showSideShare(sideShareShow)}>
                    <i className='iconfont side-share'>&#xe78c;</i>
                    <SideTag className={sideShareShow ? 'side-title hide-tag' : 'side-title'}>
                        分享文章
                    </SideTag>
                    <SideShareWrap className={sideShareShow ? '' : 'hide-side-share'}>
                        <a href="/#"><SideShareItem>分享到微信</SideShareItem></a>
                        <a href="/#"><SideShareItem>分享到微博</SideShareItem></a>
                        <a href="/#"><SideShareItem>分享到QQ空间</SideShareItem></a>
                        <a href="/#"><SideShareItem>分享到Twitter</SideShareItem></a>
                        <a href="/#"><SideShareItem>分享到Facebook</SideShareItem></a>
                        <a href="/#"><SideShareItem>分享到Google+</SideShareItem></a>
                        <a href="/#"><SideShareItem>分享到豆瓣</SideShareItem></a>
                    </SideShareWrap>
                </SideItem>
            </SideTool>
        )
    }
}

const mapStateToProps = (state) => ({
    sideShareShow: state.getIn(['side', 'sideShareShow'])
});

const mapDispatchToProps = (dispatch) => ({
    backTop(){
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        let interval = setInterval(function () {
            scrollTop = scrollTop - scrollTop / 5;
            window.scrollTo(0, scrollTop);
            if(scrollTop < 2){
                window.scrollTo(0, 0);
                clearInterval(interval);
            }
        },10);
    },
    
    showSideShare(booleanValue){
        dispatch(actionCreators.showSideShare(!booleanValue));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BackTop);