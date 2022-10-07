import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #7f8e9d;
  & p {
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #7f8e9d;
  }

  & span {
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;

    color: #1f3349;
  }
`;

export const StatistickItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 6px;

  height: 74px;
  border-right: 1px solid #7f8e9d;

  background: #ecf1f3;
  &:nth-child(1) {
    flex: 0 1 33%;
  }
  &:nth-child(2) {
    flex: 0 1 33%;
  }
  &:nth-child(3) {
    flex: 0 1 33%;
    border-right: none;
  }
  &:nth-child(4) {
    border-top: 1px solid #7f8e9d;
    flex: 0 1 49.6%;
    background: #daf5ff;
  }
  &:nth-child(5) {
    border-top: 1px solid #7f8e9d;
    border-right: none;
    flex: 0 1 49.6%;
    background: #dfffda;
  }
`;
