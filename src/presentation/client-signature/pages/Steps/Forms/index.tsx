import { UseFormRegister } from "react-hook-form";
import { StepsSignatureEnum } from "../../../../../common/enums/signature-steps.enum";
import { ContinueButton } from "../../../components/ContinueButton";
import { RadioButton } from "../../../components/RadioButton";
import { Container, Form, Question, Row } from "./styles";

interface FormsProps {
  changeScreen: (step: StepsSignatureEnum) => void;
  step: number;
  register: UseFormRegister<any>;
}

export const FormStep = ({ changeScreen, step, register }: FormsProps) => {
  return (
    <Container>
      <h2>Estamos anisos para te conhecer melhor!!</h2>
      <h2>Preencha o formulário para que a sua box seja a sua cara!</h2>
      <Form>
        <Row>
            <Question>
              <h4>Tipo de pele</h4>
              <RadioButton
                register={register}
                nameValue="forms.skin"
                value="seca"
              />
              <RadioButton
                register={register}
                nameValue="forms.skin"
                value="oleosa"
              />
              <RadioButton
                register={register}
                nameValue="forms.skin"
                value="mista"
              />
            </Question>
            <Question id="start">
              <h4>Tipo de cabelo</h4>
              <RadioButton
                register={register}
                nameValue="forms.hair"
                value="crespo"
              />
              <RadioButton
                register={register}
                nameValue="forms.hair"
                value="ondulado"
              />
              <RadioButton
                register={register}
                nameValue="forms.hair"
                value="liso"
              />
            </Question>
        </Row>
        <Row>
            <Question>
              <h4>Preferência por tipo de produto?</h4>
              <RadioButton
                register={register}
                nameValue="forms.productPreference"
                value="Vegano"
              />
              <RadioButton
                register={register}
                nameValue="forms.productPreference"
                value="Não Vegano"
              />
              <RadioButton
                register={register}
                nameValue="forms.productPreference"
                value="Tanto faz"
              />
            </Question>
        </Row>
        <div id="button">
            <ContinueButton onClick={() => changeScreen(StepsSignatureEnum.plans)}/>
        </div>
      </Form>
    </Container>
  );
};
