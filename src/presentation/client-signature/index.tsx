import {useState} from 'react'
import { Steps } from './pages/Steps';

export function Signature(){
    const [step, setStep] = useState<number>(1);
    
    
    
    return (
        <>
        <Steps step={step}/>
        </>
    )
}