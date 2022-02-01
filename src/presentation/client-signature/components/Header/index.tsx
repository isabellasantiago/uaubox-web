import {HeaderContainer, Container, Logo, NavBar, Eclipse} from './styles'
import {ReactComponent as UauIcon} from '../../../assets/uaublack.svg'
import { IdentificationStep } from '../../pages/Steps/Identification';

interface HeaderProps{
    step: number
    onClick?: () => void;
    handleStep: (stepNumber:number) => void;
}

export const Header = ({step, onClick, handleStep}: HeaderProps) => {
    

    return(
        <Container>

        <HeaderContainer>
            <Logo>
                <UauIcon style={{width: "140px"}}/>
            </Logo>
            <NavBar>
                <a href="" onClick={() => handleStep(1)}>
                    {step === 1 ? <Eclipse currentPage={true}>1</Eclipse>: <Eclipse>1</Eclipse>}
                    
                    Identificação
                    </a>
                <a href="#personalData" onClick={() => handleStep(2)}>
                    {step === 2 ? 
                        <Eclipse currentPage={true}>2</Eclipse> : 
                        <Eclipse>2</Eclipse>
                    }
                    Dados Pessoais
                    </a>
                <a href="#forms" onClick={() => handleStep(3)}>
                {step === 3 ? <Eclipse currentPage={true}>3</Eclipse> : <Eclipse>3</Eclipse>}
                Formulário
                </a>
                <a href="#plans" onClick={() => handleStep(4)}>
                {step === 4 ? <Eclipse currentPage={true}>4</Eclipse> : <Eclipse>4</Eclipse>}
                    Planos
                    </a>
                <a href="#payment">
                {step === 5 ? <Eclipse currentPage={true}>5</Eclipse> : <Eclipse>5</Eclipse>}
                    Pagamento
                    </a>
            </NavBar>
        </HeaderContainer>
        </Container>
    )
}