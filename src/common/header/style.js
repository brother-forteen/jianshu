import styled from 'styled-components';
import logPic from '../../statics/images/nav-logo.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 780px;
  height: 58px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  &:after{
    display: block;
    content: '';
    clear: both;
  }
  &.hide-header{
    display: none;
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 56px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${logPic});
  background-size: contain;
`;

export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding: 0 200px 0 100px;
`;



export const NavSearch = styled.div`
  height: 100%;
  padding: 9px 10px 9px 15px;
  float: left;
  position: relative;
  .icon{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    position: absolute;
    right: 15px;
    top: 13px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
  }
  .iconFocused{
    background: #969696;
    color: #fff;
  }
`;

export const NavSearchInput = styled.input.attrs({
    placeholder: '搜索'
})`
  width: 160px;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  padding: 0 40px 0 20px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
  &.focused{
    width: 240px;
  }
  &::placeholder{
    color: #999;
  }
  &.slide-enter{
    transition: all 0.3s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
   transition: all 0.3s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  width: 250px;
  position: absolute;
  left: 15px;
  top: 100%;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  margin-top: 1px;
  border-radius: 4px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  &::before{
    display: block;
    content: '';
    background: #fff;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 27px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
  }
  &::after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTrending = styled.div`
  width: 100%;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
`;

export const SearchInfoHeader = styled.div`
  height: 20px;
  margin-bottom: 10px;
`;

export const SearchInfoSwitch = styled.a`
  float: right;
  cursor: pointer;
  font-size: 13px;
  vertical-align: middle;
  .iconSpin{
    display: inline-block;
    font-size: 13px;
    transition: all 0.5s ease;
    transform-origin: center center;
  }
`;

export const SearchInfoTag = styled.ul``;

export const SearchInfoTagItem = styled.li`
  margin: 3px 10px 3px 0;
  display: inline-block;
  line-height: 28px;
`;

export const SearchInfoItemLink = styled.a`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
    color: #666;
    border-color: #999;
    }
`;

export const Addition = styled.div`
 height: 100%;
 position: absolute;
 right: 0;
 top: 0;
 padding: 9px 0;
`;

export const Button = styled.button`
  height: 38px;
  line-height: 24px;
  border-radius: 20px;
  border: 1px solid rgba(236,97,73,.9);
  margin-right: 20px;
  padding: 6px 12px;
  background: #fff;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  &.reg{
    width: 80px;
    color: rgba(236, 97, 73, .8);
    &:hover{
      color: rgba(236, 97, 73, 1.0);
      border: 1px solid rgba(236, 97, 73, 1.0);
    }
  }
  &.writing{
    width: 100px;
    color: #fff;
    background: rgba(236, 97, 73, .8);
    &:hover{
      background: rgba(236, 97, 73, 1.0);
      border: 1px solid rgba(236, 97, 73, 1.0);
    }
  }
  &.button_no_color{
    border: none;
    color: #969696;
    background: none;
  }
`;