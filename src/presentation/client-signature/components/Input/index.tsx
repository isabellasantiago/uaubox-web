import { UseFormRegister } from 'react-hook-form';
import { InputContainer } from './styles'

interface InputProps{
    label: string
    placeholder?: string
    register: UseFormRegister<any>;
    value?: string;
    width: string;
    inputType?: string;
}

export const Input = ({label, placeholder, register, value, width, inputType}: InputProps) => {

    return(
        <InputContainer widthSize={width}>
        <label htmlFor={value}>{label}</label>
        <input type={inputType || "text"} placeholder={placeholder} {...register(`${value}`)} name={value}/>
        </InputContainer>
    )
}