import styled from 'styled-components';

export const SliderMain = styled.div`
    width: 625px;
    height: 270px;
    margin-bottom: 35px;
    position: relative;
    background: #fff;
    cursor: pointer;
    overflow: hidden;
    border-radius: 6px;
    .banner-button-wrap{
       width: 0;
       height: 0;
       opacity: 0;
       transition: all 0.5s ease;
    }
`;

export const SliderWrap = styled.ul`
    width: calc(100% * 5);
    height: 270px;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s ease;
    &:after{
      display: block;
      content: '';
      clear: both;
    }
`;

export const SliderItem = styled.li`
    width: 625px;
    height: 270px;
    float: left;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
`;

export const CarouselIndicators = styled.ol`
  width: 80%;
  height: 24px;
  position: absolute;
  bottom: 8px;
  left: 10%;
  text-align: center;
`;
export const CarouselIndicatorsItem = styled.li`
  width: 25px;
  height: 2px;
  background: hsla(0,0%,47%,.4);
  margin: 0 3px;
  display: inline-block;
  &.active{
    background-color: #fff;
  }
`;

export const BannerButton = styled.button`
    background-image: none;
    background-color: rgba(0,0,0,.4);
    height: 50px;
    width: 40px;
    top: 40%;
    border: none;
    outline: none;
    position: absolute;
    cursor: pointer;
    &:hover{
      background-color: rgba(0,0,0,.6);
    }
    i{
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
      text-align: center;
      line-height: 48px;
      font-size: 26px;
      font-weight: 600;
    }
    &.prev{
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      left: 0;
      i{
        transform: rotate(-180deg) translateX(3px);
      }
    }
    &.next{
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      right: 0;
      i{
        transform: translateX(3px);
      }
    }
`;

