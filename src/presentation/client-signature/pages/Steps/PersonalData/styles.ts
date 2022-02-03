import styled from "styled-components";

interface ListValidationProps {
  active: boolean;
}

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  gap: 33px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 52px;

  div {
    h2 {
      margin-bottom: 20px;
      width: 510px;
      height: 40px;
      justify-self: flex-start;
      font-size: 16px;
      text-align: center;
      font-family: "Montserrat";
      font-weight: bold;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 150px;

  width: 900px;

  > section {
    h2 {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 14px;
      color: #000;
      line-height: 20px;
    }
  }
`;

export const PersonalDataSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  box-sizing: border-box;

  width: 430px;
  min-height: 300px;
  max-height: 400px;

  font-family: "Montserrat";
  h2 {
    display: flex;
    justify-content: flex-start;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddressSection = styled(PersonalDataSection)`
  max-height: 500px;
`;

export const LoginDataSection = styled(PersonalDataSection)`
  align-items: flex-start;
`;

export const ValidationList = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li<ListValidationProps>`
  color: ${(props) => (props.active ? "#7ed638" : "#000")};
  font-size: 12px;
`;

export const AddressInputSection = styled(AddressSection)`
  margin-top: 30px;
`;

export const Flag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 340px;
  height: 44px;

  background: #7ed638;
  border-radius: 10px;

  p {
    width: 134px;
    height: 22px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #fefefe;
  }
`;

export const FlagSection = styled(PersonalDataSection)`
  justify-content: center;
  

   > div {
    width: 340px;
    display: flex;
    gap: 90px;
    flex-direction: column;

    align-items: center
    justify-content: space-around;

    
    button {
      align-self: center;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  input {
    border: 2px solid rgba(51, 51, 51, 1);
    height: 40px;
  }
  p {
    text-align: center;
    font-weight: bold;
    width: 320px;
    strong {
      color: rgba(255, 70, 51, 1);
    }
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  max-width: 900px;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    max-width: 200px;
  }

  #flag {
    align-self: flex-end;
  }
`;
