import styled from 'styled-components';

export const ListWrapper = styled.ul`
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #f0f0f0
`;

export const ListItem = styled.li`
  min-height: 140px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  width: 100%;
  padding: 35px 0 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  line-height: 20px;
`;

export const ListInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 165px;
  
  &.padding-right-no_pic{
    padding-right: 2px;
  }
`;

export const ListA = styled.a.attrs({
    href: '/',
    target: '_blank'
})`
  &.list-img{
    position: absolute;
    top: 50%;
    margin-top: -50px;
    right: 0;
    width: 150px;
    height: 100px;
    &.img-show{
      display: block;
    }
    &.img-hide{
      display: none;
    }
  }
  
  &.list-title{
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    vertical-align: baseline;
    &:link{
      color: #333;
      text-decoration: none;
    }
    &:visited{
      color: #969696;
      text-decoration: none;
    }
    &:hover{
      color: #333;
      text-decoration: underline;
    }
    &:active{
      color: #333;
      text-decoration: underline;
    }
  }
  
  &.icon-meta{
    color: #b4b4b4;
    font-size: 12px;
    text-decoration: none;
    margin-right: 10px;
    transition: all 0.5s ease;
    &:hover{
      color: #666;
    }
  }
`;

export const ListContent = styled.p`
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    text-align: justify;
`;

export const ListImg = styled.img.attrs({
    src: ''
})`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
`;

export const ListMeta = styled.div`
  font-weight: 400;
  line-height: 20px;
  font-size: 12px;
  color: #b4b4b4;
  span{
    margin-right: 10px;
    cursor: default;
  }
  i{
    margin-right: 4px;
    vertical-align: middle;
  }
`;

export const LoadMore = styled.button`
  width: 100%;
  padding: 0;
  border-radius: 20px;
  background-color: #a5a5a5;
  height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
  letter-spacing: 3px;
  &:hover{
      background-color: #656565;
  }
`;