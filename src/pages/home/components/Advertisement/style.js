import styled from 'styled-components';

export const AdvertisementLink = styled.a.attrs({
    href: `${(props) => props.href}`,
    target: '_blank'
})`
  display: block;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  height: 160px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  overflow: hidden;
  span{
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: #000;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.7;
  }
`;