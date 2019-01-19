import styled from 'styled-components';
import logPic from '../../statics/images/nav-logo.png';

export const LoginWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  box-sizing: border-box;
  &:after{
  content: '';
   display: block;
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background: #f1f1f1;
   z-index: -1;
  }
`;

export const Logo = styled.img.attrs({
    src: logPic
})`
  display: block;
  width: 200px;
  float: left;
  margin: 0 0 0 10px;
`;

export const LoginBox = styled.div`
    width: 440px;
    margin: 160px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    box-sizing: border-box;
`;

export const LoginTitle = styled.div`
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
  box-sizing: border-box;
  text-align: center;
  span{
    padding: 0 15px;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const LoginTitleButton = styled.button`
  height: 42px;
  text-align: center;
  padding: 10px 10px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #969696;
  letter-spacing: 2px;
  cursor: pointer;
  &.active{
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
`;

export const FormContainer = styled.div`

`;