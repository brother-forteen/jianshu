import styled from 'styled-components';
import logPic from '../../statics/images/nav-logo.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 1080px;
  height: 58px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  left: 0;
  top: 0;
  &:after{
    display: block;
    content: '';
    clear: both;
  }
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
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

export const NavItem = styled.div`
  height: 100%;
  line-height: 26px;
  padding: 15px;
  color: #333;
  margin-right: 10px;
  font-size: 17px;
  cursor: pointer;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.div`
  height: 100%;
  padding: 9px 10px 9px 15px;
  float: left;
  position: relative;
    .iconfont{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    position: absolute;
    right: 15px;
    top: 13px;
    text-align: center;
    line-height: 28px;
  }
    .iconFocused{
      background: #969696;
      color: #fff;
    }
    .slide-enter{
      transition: all 0.3s ease-out;
    }
    .slide-enter-active{
      width: 240px;
    }
    .slide-exit{
     transition: all 0.3s ease-out;
    }
    .slide-exit-active{
      width: 160px;
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
  &.focused{
    width: 240px;
  }
  &::placeholder{
    color: #999;
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
`;