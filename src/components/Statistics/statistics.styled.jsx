import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 306;
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

  width: 101px;
  height: 74px;

  background: #ecf1f3;
  &:not(:last-child) {
    border-right: 1px solid #7f8e9d;
  }

  &:nth-child(3n) {
    border-right: 1px solid #ecf1f3;
  }
`;

export const SumItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 152px;
  height: 74px;
  border-top: 1px solid #7f8e9d;
  background: #daf5ff;
  border-right: 1px solid #7f8e9d;
  &:nth-child(2n) {
    background: #dfffda;
  }
  &:last-child {
    border-right: 1px solid #dfffda;
  }
`;
