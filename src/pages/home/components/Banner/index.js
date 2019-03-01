import React, { Component, Fragment } from 'react';

import {
    BannerWrap,
    BannerItem,
    BannerButton
} from './style';

class Banner extends Component{
    constructor(props){
        super(props);
        this.bannerMouseMove = this.bannerMouseMove.bind(this);
    }
    render() {
        return(
            <Fragment>
                <BannerWrap ref={(bannerWrap) => {this.bannerWrap = bannerWrap}}>
                    <BannerItem>banner</BannerItem>

                    <div ref={(bannerButton) => {this.bannerButton = bannerButton}} className='banner-button-wrap'>
                        <BannerButton className='prev'><i className='iconfont'>&#xe64d;</i></BannerButton>
                        <BannerButton className='next'><i className='iconfont'>&#xe64d;</i></BannerButton>
                    </div>
                </BannerWrap>
            </Fragment>
        )
    }

    // 按钮的显隐
    bannerMouseMove(str){
        switch (str) {
            case 'in':
                this.bannerWrap.onmouseenter = () => {
                    this.bannerButton.style.opacity = 1
                };
                break;

            case 'out':
                this.bannerWrap.onmouseleave = () => {
                    this.bannerButton.style.opacity = 0
                };
                break;

            default:
                break;
        }
    }

    componentDidMount() {
        console.log(this.bannerWrap);
        this.bannerMouseMove('in');
        this.bannerMouseMove('out');
        // this.bannerWrap.addEventListener('onmouseenter', function () {
        //     console.log(1111)
        // })
    }
}

export default Banner;