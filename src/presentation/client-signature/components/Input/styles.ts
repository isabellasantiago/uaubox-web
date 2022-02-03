import styled from "styled-components";

interface InputProps {
  widthSize: string;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;

  label {
    font: 14px "Montserrat";
    line-height: 18px;
    color: #000;
    margin-bottom: "5px";
    margin-left: "5px";
  }
  input {
    padding: 0px 15px;
    width: ${(props) => props.widthSize};
    height: 40px;

    font: 14px "Montserrat";

    background: #ffffff;

    box-sizing: border-box;
    border: 1px solid #727272;
    border-radius: 8px;
    padding: 0px 5px;

    &:disabled {
      background: #ccc;
      cursor: block;
    }
  }
`;
