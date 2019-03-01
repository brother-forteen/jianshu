import styled from 'styled-components';

export const BannerWrap = styled.ul`
    width: 625px;
    height: 270px;
    margin-bottom: 35px;
    position: relative;
    background: red;
    cursor: pointer;
    .banner-button-wrap{
       width: 0;
       height: 0;
       opacity: 0;
       transition: all 0.5s ease;
    }
`;

export const BannerItem = styled.li`

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

