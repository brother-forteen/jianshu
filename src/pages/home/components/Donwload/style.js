import styled from 'styled-components';

export const Download = styled.a.attrs({
    title: '',
    href: '/apps?utm_medium=desktop&amp;utm_source=index-aside-click',
    target: '_blank'
})`
  display: block;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  .qrcode{
    width: 60px;
    height: 60px;
    opacity: 0.85;
    vertical-align: middle;
  }
  .info{
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title{
      font-size: 15px;
      color: #333;
      i{
        font-weight: 600;
        vertical-align: middle;
        margin-left: 5px;
      }
    }
    .description{
      font-size: 13px;
      color: #999;
      padding-top: 4px;
    }
  }
  
  &:hover{
    .qrcode-hover{
      display: block;
    }
  }
  
  .qrcode-hover{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 40px;
    top: -212px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 6px;
    z-index: 10;
    border: 1px solid #969696;
    display: none;
    &:after{
      display: block;
      content: '';
      clear: both;
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      position: absolute;
      left: 50%;
      margin-left: -10px;
      bottom: 0;
      margin-bottom: -6px;
      background: #fff;
      box-shadow: 0 0 8px rgba(0, 0, 0, .2);
      border: 1px solid #969696;
      z-index: -1;
    }
    img{
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 6px;
    }
  }
`;