import styled from 'styled-components';

export const RecommendWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 4px;
`;

export const RecommendLink = styled.a.attrs({
    href: '/',
    target: '_blank',
    rel: 'noopener noreferrer'
})`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 50px;
  margin-bottom: 6px;
  overflow: hidden;
  &:nth-child(1){
    margin-top: -3px;
  }
`;

export const RecommendItem = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  vertical-align: middle;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;