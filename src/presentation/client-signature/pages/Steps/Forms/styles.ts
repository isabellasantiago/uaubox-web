import styled from "styled-components";

export const Form = styled.form`
  width: 500px;

 #button {
    display: flex;
    justify-content: center;
    width: 100%;
    ;
 }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Montserrat", sans-serif;

  h2 {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    white-space: nowrap;

    margin-bottom: 8px;
  }
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 5px;
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin: 50px 0px;
`;
