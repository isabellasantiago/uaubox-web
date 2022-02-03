import { UseFormRegister } from "react-hook-form";
import { InputContainer } from "./styles";
import InputMask from "react-input-mask";

interface InputProps {
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  dataValue?: string;
  width: string;
  inputType?: string;
  maxLength?: number;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  maskInput?: boolean;
  maskValue?: string | Array<string | RegExp>;
  maskPlaceholder?: string;
  checkingCEP?: (e: any) => void | undefined;
  onChange?: (...args: any) => void;
}

export const Input = ({
  label,
  placeholder,
  register,
  dataValue,
  width,
  inputType,
  maxLength,
  required,
  value,
  disabled,
  maskInput,
  maskValue,
  maskPlaceholder,
  checkingCEP,
  onChange,
}: InputProps) => {
  return (
    <InputContainer widthSize={width}>
      <label htmlFor={dataValue}>{label}</label>
      {maskInput ? (
        <InputMask
          mask={maskValue || ""}
          maskPlaceholder={maskPlaceholder}
          placeholder={placeholder}
          {...register(`${dataValue}`, {
            required,
            maxLength,
            disabled,
          })}
          onBlur={checkingCEP}
          onChange={onChange}
        />
      ) : (
        <input
          type={inputType || "text"}
          placeholder={placeholder}
          {...register(`${dataValue}`, {
            required,
            maxLength,
            disabled,
          })}
          name={dataValue}
          value={value}
          onChange={onChange}
        />
      )}
    </InputContainer>
  );
};
