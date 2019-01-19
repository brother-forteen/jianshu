import styled from 'styled-components';

export const InputWrap = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    position: relative;
    i{
      display: block;
      width: 35px;
      height: 100%;
      text-align: center;
      line-height: 50px;
      position: absolute;
      left: 0;
      top: 0;
      font-size: 18px;
      color: #969696;
    }
    &:nth-child(1){
      border-radius: 4px 4px 0 0;
      border-bottom: none;
    }
    &:nth-child(2){
      border-radius: 0 0 4px 4px;
    }
`;

export const InputItem = styled.input`
  &.input-text{
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    color: #333;
    font-size: 16px;
    &::placeholder{
      font-size: 16px;
      color: #969696;
    }
  }
 
`;

export const LoginExtra = styled.div`
  width: 100%;
  padding: 15px 0;
  vertical-align: middle;
  color: #969696;
  &:after{
    display: block;
    content: '';
    clear: both;
  }
  input{
    margin-left: -1px;
    width: 15px;
    height: 15px;
    vertical-align: inherit;
  }
  a{
    float: right;
    text-decoration: none;
    color: #999;
    margin-right: -8px;
  }
`;

export const LoginButton = styled.button`
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    letter-spacing: 2px;
`;

export const MoreSign = styled.div`
  width: 100%;
  padding-top: 50px;
  box-sizing: border-box;
`;

export const MoreSignTitle = styled.h3`
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    text-align: center;
    &:before,&:after{
      content: "";
      border-top: 1px solid #b5b5b5;
      display: block;
      position: absolute;
      width: 60px;
      top: 6px;
    }
    &:before{
      left: 30px;
    }
    &:after{
      right: 30px;
    }
`;

export const MoreSignItemWrap = styled.ul`
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  &:after{
    display: block;
    content: '';
    clear: both;
  }
`;

export const MoreSignItem = styled.li`
  width: 25%;
  float: left;
  text-align: center;
  line-height: 50px;
  color: #969696;
  font-weight: 700;
  cursor: pointer;
`;

export const IconImg = styled.img`
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
`;

