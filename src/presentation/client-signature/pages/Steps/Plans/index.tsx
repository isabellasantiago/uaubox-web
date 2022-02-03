import { UseFormRegister } from "react-hook-form";
import { StepsSignatureEnum } from "../../../../../common/enums/signature-steps.enum";
import { Plan } from "../../../components/Plan";
import { Container } from "./styles";

interface PlansProps {
  step: number;
  register: UseFormRegister<any>;
  changeScreen: (step: StepsSignatureEnum) => void;
}

export const Plans = ({ step, register, changeScreen }: PlansProps) => {
  return (
    <Container>
      <h2>Escolha o melhor plano que combine com você :)</h2>
      <span>Planos que cabem no bolso!</span>
      <div>
        <Plan
          step={step}
          register={register}
          planName="TESTEI"
          planPrice="89,90"
          planMonth="01"
          changeScreen={changeScreen}
        />
        <Plan
          step={step}
          register={register}
          planName="AMEI"
          planPrice="79,90"
          planMonth="03"
          changeScreen={changeScreen}
        />
        <Plan
          step={step}
          register={register}
          planName="VICIEI"
          planPrice="74,90"
          planMonth="06"
          changeScreen={changeScreen}
        />
        <Plan
          step={step}
          register={register}
          planName="NÃO VIVO SEM"
          planPrice="69,90"
          planMonth="12"
          changeScreen={changeScreen}
        />
      </div>
    </Container>
  );
};
