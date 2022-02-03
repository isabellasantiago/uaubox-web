import styled from "styled-components";

export const Border = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  padding: 22px;

  width: 278px;
  height: 350px;

  background: #fefefe;
  border: 1px solid rgba(0, 0, 0, 0.49);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Title = styled.h2`
  white-space: nowrap;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  color: #333333;
`;

export const Price = styled.h1`
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  span {
    align-self: center;
    margin-top: 20px;
  }
`;

export const Message = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: #000000;

  strong {
    font-weight: bold;
  }
`;

export const Button = styled.button`
  width: 210px;
  height: 43px;

  display: flex;
  justify-content: center;

  background: #ff3433;

  border: 1px solid #ff3433;
  border-radius: 28px;

  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  display: flex;
  align-items: center;

  color: #ffffff;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
