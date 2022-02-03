import { UseFormRegister } from "react-hook-form";
import { RadioInput, Container } from "./styles";

interface RadioProps {
  register: UseFormRegister<any>;
  value: string;
  nameValue: string
}

export const RadioButton = ({ register, nameValue, value }: RadioProps) => {
  return (
    <Container>
      <RadioInput type="radio" {...register(`${nameValue}`)} name={nameValue} value={value}/><span>{value}</span>
    </Container>
  );
};
