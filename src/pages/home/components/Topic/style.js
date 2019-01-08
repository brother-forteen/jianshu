import styled from 'styled-components';

export const TopicWrapper = styled.ul`
  width: 640px;
  padding: 20px 0 10px 0;
  box-sizing: border-box;
  margin-left: -15px;
  border-top: 1px solid #f0f0f0;
  &:after{
    display: block;
    content: '';
    clear: both;
  }
`;

export const TopicItem = styled.li`
  height: 34px;
  display: block;
  float: left;
  margin-left: 15px;
  background: #f7f7f7;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  a{
    color: #333;
  }
  .topic-pix{
    width: 32px;
  }
  .topic-content{
    float: left;
    padding: 0 10px;
  }
  .img-show{
    display: block;
    float: left;
  }
  .img-hide{
    display: none;
  }
`;