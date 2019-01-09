import styled from 'styled-components';

export const AuthorWrapper = styled.div`
  width: 100%;
  padding: 30px 0 40px;
  vertical-align: middle;
`;

export const AuthorLink = styled.a.attrs({
    href: `${(props) => props.href}`,
    target: '_blank'
})`
  text-decoration: none;
  .user-icon{
    width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const AuthorBasicInfo = styled.div`
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  line-height: 20px;
  .user-name{
    margin-right: 3px;
    font-size: 16px;
    color: #333;
    cursor: pointer;
  }
  .article-info{
    font-size: 12px;
    color: #969696;
    margin-right: 5px;
  }
  button{
    padding: 0 7px 0 5px;
    font-size: 12px;
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
    font-weight: 400;
    line-height: normal;
    outline: none;
    border: none;
    margin-left: 10px;
    cursor: pointer;
  }
`;