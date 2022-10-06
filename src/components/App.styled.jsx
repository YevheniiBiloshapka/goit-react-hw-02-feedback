import styled from 'styled-components';
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  gap: 30px;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 306px;
  overflow: hidden;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
  & h2 {
    padding: 23px;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    text-align: center;
    letter-spacing: 0.01em;

    color: #1f3349;
  }
`;

export const Message = styled.p`
  margin: 0 auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 23px;

  color: #7f8e9d;
`;
