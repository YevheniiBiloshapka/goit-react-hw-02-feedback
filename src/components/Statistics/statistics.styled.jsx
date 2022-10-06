import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 260px;
  padding: 23px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  margin: 0;
  padding: 0;
  list-style: none;
  & b {
    color: #1f3349;
    margin-left: 2px;
  }
`;
