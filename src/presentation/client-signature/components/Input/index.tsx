import { InputContainer } from './styles'

interface InputProps{
    label: string
    placeholder?: string

}

export const Input = ({label, placeholder}: InputProps) => {

    return(
        <InputContainer>
        <label htmlFor="">{label}</label>
        <input type="text" placeholder={placeholder}/>
        </InputContainer>
    )
}