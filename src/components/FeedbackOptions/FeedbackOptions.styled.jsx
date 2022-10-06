import styled from 'styled-components';

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 260px;
  padding: 23px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  & h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    text-align: center;
    letter-spacing: 0.01em;

    color: #1f3349;
  }
  & ul {
    display: flex;
    gap: 20px;
    padding: 0;
  }
`;

export const Item = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  border: none;
  background: none;
  &:hover {
    background: #d1f8fd;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }
  &:hover p {
    font-weight: 500;
    font-size: 14px;

    color: #272829;
  }
  & div {
    font-family: 'Roboto';
    font-style: normal;
    font-size: 40px;
    line-height: 47px;
  }
  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #7f8e9d;
  }
`;
