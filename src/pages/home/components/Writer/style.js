import styled from 'styled-components';

export const WriterWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  .title{
    vertical-align: middle;
    span{
      font-size: 14px;
      color: #969696;
    }
    button{
      font-size: 14px;
      color: #969696;
      float: right;
      text-decoration: none;
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
      vertical-align: middle;
      margin-top: -1px;
      padding: 0;
      i{
        margin-left: 5px;
        display: inline-block;
        transition: all 0.5s ease;
      }
    }
  }
`;

export const WritterUl = styled.ul`
  width: 100%;
  padding-top: 15px;
  box-sizing: border-box;
  vertical-align: middle;
  .writer-check-all{
    display: block;
    padding: 8px 0;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
`;

export const WritterLi = styled.li`
  width: 100%;
  margin-bottom: 15px;
  position: relative;
  line-height: 20px;
  img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    vertical-align: middle;
    box-shadow: 0 0 0 1px #ddd;
    margin-right: 10px;
  }
  .userInfo{
    display: inline-block;
    vertical-align: middle;
    a{
      text-decoration: none;
    }
    .name{
      font-size: 14px;
      display: block;
      color: #333;
    }
    .content{
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
  .attention{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    text-decoration: none;
    i{
      font-size: 14px;
      margin-right: 5px;
    }
  }
`;