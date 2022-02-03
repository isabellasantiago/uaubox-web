import { FirstStep, Container } from './styles'
import { Input } from '../../../components/Input';
import { ContinueButton } from '../../../components/ContinueButton';
import { UseFormRegister } from 'react-hook-form';
import { StepsSignatureEnum } from '../../../../../common/enums/signature-steps.enum';

interface IdentificationProps{
    step: number,
    register: UseFormRegister<any>;
    changeScreen: (step: StepsSignatureEnum) => void;
}


export const IdentificationStep = ({step, register, changeScreen}: IdentificationProps) => {


    return (
        <Container id="identification">
        
        <FirstStep>
            <h1>Insira seu e-mail para continuar :)</h1>
            <Input
                width="280px"
                label="Email"
                placeholder="mariajoaquina@example.com"
                register={register}
                dataValue="email"
            />
                <ContinueButton onClick={() => changeScreen(StepsSignatureEnum.personalData)}/>
        </FirstStep>
        </Container>
        
    )
}