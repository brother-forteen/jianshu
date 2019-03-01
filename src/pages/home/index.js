import React, { Component } from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as headerActionCreators } from '../../common/header/store';
import Banner from './components/Banner';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Download from './components/Donwload';
import Advertisement from './components/Advertisement';
import Writer from './components/Writer';
import BackTop from '../../common/side';

import adImg1 from '../../statics/images/ad1.jpg';
import adImg2 from '../../statics/images/ad2.jpg';


class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Banner></Banner>
                    {/*<img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>*/}
                    <Topic></Topic>
                    <List></List>
                    
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Download></Download>
                    <Advertisement imgUrl={ adImg1 } href='123'></Advertisement>
                    <Writer></Writer>
                    <Advertisement imgUrl={ adImg2 } href='456'></Advertisement>
                </HomeRight>
    
                <BackTop></BackTop>
            </HomeWrapper>
        )
    }
    
    componentDidMount() {
        this.props.changeHomeData();
        this.props.showHeaderFun();
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    showHeaderFun(){
        dispatch(headerActionCreators.showHeader(true));
    },
});

export default connect(null, mapDispatchToProps)(Home);