
import { Header } from '../../components/Header';
import { IdentificationStep } from './Identification';
import { PersonalData } from './PersonalData';
import { Container } from './styles'

interface StepsProps{
    step: number
}

export const Steps = ({step}: StepsProps) => {

    const handleStep = (stepNumber: number) => {
        step = stepNumber
    }
    return( 
        <Container>
            <Header step={step} handleStep={handleStep}/>
            {step === 1 && (
                <IdentificationStep step={step}/>
            )}
            {step === 2 &&(
                <PersonalData step={step}/>
            )}
            {/* {step === 3 && ()} */}
            {/* {step === 4 && ()} */}
            {/* {step === 5 && ()} */}
            
        </Container>
    )
}