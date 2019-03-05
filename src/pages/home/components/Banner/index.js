import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    SliderMain,
    SliderWrap,
    SliderItem,
    CarouselIndicators,
    CarouselIndicatorsItem,
    BannerButton
} from './style';

class Banner extends Component{
    constructor(props){
        super(props);
        this.state = {
            carouseArr: [],
            interval: null,
            index: 0
        };

        // 按钮的显隐
        this.bannerMouseMove = (str) => {
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
        };

        // 点击左右按钮
        this.handleButtonClick = (str) => {
            this.clearInterval();

            switch (str) {
                case 'prev':
                    this.carouselFun('prev');
                    break;

                case 'next':
                    this.carouselFun('next');
                    break;

                default:
                    break;
            }

            this.interval();
        };

        // 滚动方法
        this.carouselFun = (str) => {
            const { carouseArr } = this.props;
            let carouselItemWidth = parseInt(this.bannerWrap.style.width);         // 显示图片的尺寸
            let len = carouseArr.size;                                // 轮播图的数组长度
            let offsetLeft = parseInt(this.sliderWrap.style.left) || 0;            // 距离左侧的偏移量
            let index = this.state.index;

            if(str === 'prev'){
                index--;
                index = index < 0 ? len - 1 : index;
                if(offsetLeft === 0){
                    offsetLeft = -carouselItemWidth*(len - 1);
                }else {
                    offsetLeft += carouselItemWidth;
                }
            }else {
                index++;
                index = index > len - 1 ? 0 : index;
                if(offsetLeft === -carouselItemWidth*(len - 1)){
                    offsetLeft = 0
                }else {
                    offsetLeft -= carouselItemWidth;
                }
            }

            this.sliderWrap.style.left = offsetLeft + 'px';
            this.setState({index});
        };

        // 定时器
        this.interval = () => {
            let interval = setInterval(() => {
                this.handleButtonClick('next');
            }, 3000);
            this.setState({interval: interval});
        };

        // 清除定时器
        this.clearInterval = () => {
            clearInterval(this.state.interval);
            this.setState({interval: null});
        };

        // 点击底部button
        this.handleNavClick = (index) => {
            this.clearInterval();
            this.setState({index});
            let carouselItemWidth = parseInt(this.bannerWrap.style.width);         // 显示图片的尺寸
            this.sliderWrap.style.left = -carouselItemWidth * index + 'px';
            this.interval();
        }
    }
    render() {
        const { carouseArr } = this.props;
        return(
            <SliderMain ref={(bannerWrap) => {this.bannerWrap = bannerWrap}} style={{width: '625px'}}>
                <SliderWrap ref={(sliderWrap) => {this.sliderWrap = sliderWrap}}>
                    {carouseArr.map((item, index) => (
                        <SliderItem key={ item.get('id') }><img src={ item.get('url') } alt=""/></SliderItem>
                    ))}
                </SliderWrap>

                <CarouselIndicators>
                    {carouseArr.map((item, index) => (
                        <CarouselIndicatorsItem onClick={ () => this.handleNavClick(index) } className={this.state.index === index ? 'active' : ''} key={item.get('id')}></CarouselIndicatorsItem>
                    ))}
                </CarouselIndicators>

                <div ref={(bannerButton) => {this.bannerButton = bannerButton}} className='banner-button-wrap'>
                    <BannerButton className='prev' onClick={ () => this.handleButtonClick('prev') }><i className='iconfont'>&#xe64d;</i></BannerButton>
                    <BannerButton className='next' onClick={ () => this.handleButtonClick('next') }><i className='iconfont'>&#xe64d;</i></BannerButton>
                </div>
            </SliderMain>
        )
    }

    componentDidMount() {
        this.bannerMouseMove('in');
        this.bannerMouseMove('out');
        this.interval();
    }

    componentWillUnmount() {
        this.clearInterval();
    }
}

const mapStateToProps = (state) => ({
    carouseArr: state.getIn(['home', 'carouseArr'])
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);