import styled from 'styled-components';

export const NavItem = styled.div`
  height: 100%;
  line-height: 26px;
  padding: 15px;
  color: #333;
  margin-right: 10px;
  font-size: 17px;
  cursor: pointer;
  position: relative;
  &.left{
    float: left;
  }
  &.active{
    color: #ea6f5a;
  }
`;