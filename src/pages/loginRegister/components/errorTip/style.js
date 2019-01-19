import styled from 'styled-components';

export const ErrorTipWrap = styled.div`
    opacity: 0;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    -moz-transition: opacity .5s;
    -o-transition: opacity .5s;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    text-align: center;
    box-sizing: border-box;
    padding-top: 30px;
    display: none;
    &.show-error-msg{
      opacity: 1;
      display: inline-block;
    }
`;

export const ErrorTipItem = styled.p`
  display: inline-block;
  border: 1px solid #ea6f5a;
  padding: 5px 10px;
  border-radius: 4px;
  color: #ea6f5a;
`;