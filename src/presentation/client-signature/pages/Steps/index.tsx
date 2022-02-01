
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StepsSignatureEnum } from '../../../../common/enums/signature-steps';
import { SignatureModel } from '../../../../domain/models/signature.model';
import { Header } from '../../components/Header';
import { IdentificationStep } from './Identification';
import { PersonalData } from './PersonalData';
import { Container } from './styles'

interface StepsProps{

}

export const Steps = () => {
    const [formState, setFormState] = useState<SignatureModel>()
    const [step, setStep] = useState<StepsSignatureEnum>(
        StepsSignatureEnum.identification,
    )

    const { register, handleSubmit, formState: { errors }}= useForm()

    const handleStep = (stepNumber: StepsSignatureEnum) => {
        setStep(stepNumber)
    }
    
    // const handleFormStateChange = ( newFormState: SignatureModel) => {
    //     setFormState({...formState, ...newFormState})
    // }
    
    return( 
        <Container>
            <Header step={step} handleStep={() => handleStep(step)}/>
            {step === StepsSignatureEnum.identification && (
                <IdentificationStep 
                    step={step}
                    changeScreen={handleStep}
                    register={register}
                />
            )}
            {step === StepsSignatureEnum.personalData &&(
                <PersonalData 
                step={step}
                register={register}
                changeScreen={handleStep}
                />
            )}
            {/* {step === 3 && ()} */}
            {/* {step === 4 && ()} */}
            {/* {step === 5 && ()} */}
            
        </Container>
    )
}