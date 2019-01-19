import styled from 'styled-components';

export const Button = styled.button`
  height: 38px;
  line-height: 24px;
  border-radius: 20px;
  border: 1px solid rgba(236,97,73,.9);
  margin-right: 20px;
  padding: 6px 12px;
  background: #fff;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  &.button_no_color{
    border: none;
    color: #969696;
    background: none;
  }
  &.reg{
    width: 80px;
    color: rgba(236, 97, 73, .8);
    &:hover{
      color: rgba(236, 97, 73, 1.0);
      border: 1px solid rgba(236, 97, 73, 1.0);
    }
  }
`;