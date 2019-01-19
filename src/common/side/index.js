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
import imgZhiFuBao from '../../statics/images/icon1.png'
import imgWeiBo from '../../statics/images/icon2.png'
import imgQQKongJian from '../../statics/images/icon3.png'
import imgQQ from '../../statics/images/icon4.png'
import imgWeixin from '../../statics/images/icon5.png'
import imgPengYouQuan from '../../statics/images/icon6.png'

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
                        <a href="/#"><SideShareItem><img src={ imgWeixin } alt=""/>分享到微信</SideShareItem></a>
                        <a href="/#"><SideShareItem><img src={ imgWeiBo } alt=""/>分享到微博</SideShareItem></a>
                        <a href="/#"><SideShareItem><img src={ imgQQKongJian } alt=""/>分享到QQ空间</SideShareItem></a>
                        <a href="/#"><SideShareItem><img src={ imgZhiFuBao } alt=""/>分享到支付宝</SideShareItem></a>
                        <a href="/#"><SideShareItem><img src={ imgQQ } alt=""/>分享到QQ</SideShareItem></a>
                        <a href="/#"><SideShareItem><img src={ imgPengYouQuan } alt=""/>分享到朋友圈</SideShareItem></a>
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