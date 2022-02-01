import { FirstStep, Container } from './styles'
import { Input } from '../../../components/Input';
import { ContinueButton } from '../../../components/ContinueButton';

interface IdentificationProps{
    step: number
}


export const IdentificationStep = ({step}: IdentificationProps) => {
    return (
        <Container id="identification">
        
        <FirstStep>
            <h1>Insira seu e-mail para continuar :)</h1>
            <Input label="Email" placeholder="mariajoaquina@example.com"/>
                <ContinueButton />
        </FirstStep>
        </Container>
        
    )
}