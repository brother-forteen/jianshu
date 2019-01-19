import styled from 'styled-components';

export const SideTool = styled.ul`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  box-sizing: border-box;
`;

export const SideItem = styled.li`
   width: 50px;
   height: 50px;
   border: 1px solid #dcdcdc;
   border-bottom: none;
   background-color: #fff;
   transition: .1s ease-in;
   color: #333;
   line-height: 50px;
   text-align: center;
   position: relative;
   cursor: pointer;
   vertical-align: middle;
   &:nth-child(1){
     &:hover{
       .side-title{
         display: block;
       }
     }
   }
   &:nth-last-child(1){
    border-bottom: 1px solid #dcdcdc;
    &:hover{
    .side-title{
      display: block;
      }
    }
   }
   
   .side-up{
    display: inline-block;
    -webkit-transform:rotate(-90deg);
    font-size: 24px;
   }
   .side-share{
    font-size: 24px;
   }
`;

export const SideTag = styled.div`
  width: 78px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  left: -90px;
  top: 10px;
  background: #1A1A1A;
  color: #fff;
  border-radius: 4px;
  display: none;
  z-index: 99;
  &:after{
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    background: #1A1A1A;
    position: absolute;
    right: -5px;
    top: 10px;
    -webkit-transform:rotate(-45deg);
    transform: rotate(-45deg);
  }
  &.hide-tag{
    display: none!important;
  }
`;

export const SideShareWrap = styled.ul`
  width: 220px;
  position: absolute;
  left: -240px;
  bottom: -40px;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  a{
    text-decoration: none;
  }
  
  &:before{
   display: block;
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    right: -9px;
    bottom: 51px;
    -webkit-transform:rotate(-45deg);
    transform: rotate(-45deg);
    background: #fff;
    z-index: 0;
    }
  &:after{
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    right: -10px;
    bottom: 50px;
    border: 1px solid #dcdcdc;
    -webkit-transform:rotate(-45deg);
    transform: rotate(-45deg);
    background: #fff;
    z-index: -1;
  }
  &.hide-side-share{
    display: none;
  }
`;

export const SideShareItem = styled.li`
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  color: #333;
  box-sizing: border-box;
  padding-left: 15px;
  img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
  }
`;