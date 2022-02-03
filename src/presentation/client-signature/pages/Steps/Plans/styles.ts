import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;

  h2 {
    max-width: 400px;
    text-align: center;
  }

  span {
    font-size: 12px;
  }

  > div {
    margin-top: 30px;

    display: flex;
    gap: 20px;
  }
`;
