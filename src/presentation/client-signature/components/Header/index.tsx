import { HeaderContainer, Container, Logo, NavBar, Eclipse } from "./styles";
import { ReactComponent as UauIcon } from "../../../assets/uaublack.svg";

interface HeaderProps {
  step: number;
  onClick?: () => void;
  handleStep: (stepNumber: number) => void;
}

export const Header = ({ step, onClick, handleStep }: HeaderProps) => {
  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <UauIcon style={{ width: "140px" }} />
        </Logo>
        <NavBar>
          <button onClick={() => handleStep(1)}>
            {step === 1 ? (
              <Eclipse currentPage={true}>1</Eclipse>
            ) : (
              <Eclipse>1</Eclipse>
            )}
            Identificação
          </button>
          <button onClick={() => handleStep(2)}>
            {step === 2 ? (
              <Eclipse currentPage={true}>2</Eclipse>
            ) : (
              <Eclipse>2</Eclipse>
            )}
            Dados Pessoais
          </button>
          <button onClick={() => handleStep(3)}>
            {step === 3 ? (
              <Eclipse currentPage={true}>3</Eclipse>
            ) : (
              <Eclipse>3</Eclipse>
            )}
            Formulário
          </button>
          <button onClick={() => handleStep(4)}>
            {step === 4 ? (
              <Eclipse currentPage={true}>4</Eclipse>
            ) : (
              <Eclipse>4</Eclipse>
            )}
            Planos
          </button>
          <button>
            {step === 5 ? (
              <Eclipse currentPage={true}>5</Eclipse>
            ) : (
              <Eclipse>5</Eclipse>
            )}
            Pagamento
          </button>
        </NavBar>
      </HeaderContainer>
    </Container>
  );
};
