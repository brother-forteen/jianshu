import styled from 'styled-components';

export const LogoutWrapper = styled.div`
  width: 88px;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  &:hover{
    ul{
      display: block;
    }
  }
`;

export const LogoutImg = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
`;

export const LogoutSlide = styled.ul`
  display: none;
  width: 158px;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  min-width: 160px;
  padding: 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.15);
  position: absolute;
  left: 0;
  top: 45px;
  &:before{
    display: block;
    width: 100%;
    height: 10px;
    content: '';
    position: absolute;
    left: 0;
    top: -10px;
    background: none;
  }
`;

export const LogoutSlideItem = styled.li`
  width: 100%;
  line-height: 20px;
  vertical-align: middle;
   &:hover{
      background: rgba(180, 180, 180, 0.2);
  }
  a{
    padding: 10px 20px;
    line-height: 30px;
    display: block;
    clear: both;
    font-weight: 400;
    color: #333;
    white-space: nowrap;
    text-decoration: none;
    i{
      margin-right: 10px;
      color: rgba(236,97,73,.8);
      vertical-align: middle;
    }
  }
  &:nth-last-child(1){
    i{
      font-weight: 700;
    }
  }
`;