import { useState, useEffect } from "react";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { StepsSignatureEnum } from "../../../../../common/enums/signature-steps.enum";
import { ContinueButton } from "../../../components/ContinueButton";
import { Input } from "../../../components/Input";
import {
  Container,
  PersonalDataSection,
  Form,
  Row,
  AddressSection,
  LoginDataSection,
  AddressInputSection,
  FlagSection,
  Flag,
  CheckboxContainer,
  SectionWrapper,
  ValidationList,
  ListItem,
} from "./styles";

interface PersonalDataProps {
  step: number;
  register: UseFormRegister<any>;
  changeScreen: (step: StepsSignatureEnum) => void;
  setValue: UseFormSetValue<any>;
  email: string;
  getValues: UseFormGetValues<any>;
}

export const PersonalData = ({
  step,
  register,
  changeScreen,
  setValue,
  email,
  getValues,
}: PersonalDataProps) => {
  const [showInputAddress, setShowInputsAddress] = useState(false);
  const [validatePassword, setValidatePassword] = useState({
    case: false,
    number: false,
    length: false,
    chars: false,
  });
  const [showFlag, setShowFlag] = useState(false);

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setShowInputsAddress(true);

        setValue("address.street", data.logradouro);
        setValue("address.district", data.bairro);
        setValue("address.city", data.localidade);
        setValue("address.state", data.uf);

        if (data.uf === "SP") setShowFlag(true);
      });
  };

  const secureText = (password: string) => {
    const upcase = RegExp("(?=.*[A-Z].*)");
    const num = RegExp("(?=.*\\d.*)");
    const spe = /^(?=.*?([^\w\s]|[_]))$/
    const length = password.length >= 8;

    setValidatePassword({
      case: upcase.test(password),
      number: num.test(password),
      length,
      chars: spe.test(password),
    });
  };


  return (
    <Container id="personalData">
      <div>
        <h2>
          Preencha seus dados pessoais para nos conhecermos melhor no próximo
          passo
        </h2>
      </div>
      <Form>
        <SectionWrapper>
          <PersonalDataSection>
            <h2>Dados Pessoais</h2>
            <Input
              width="340px"
              label="Nome"
              placeholder="Insira seu primeiro nome"
              register={register}
              dataValue="name"
              required
            />
            <Input
              width="340px"
              label="Sobrenome"
              placeholder="Insira seu sobrenome"
              register={register}
              dataValue="lastName"
              required
            />
            <Input
              width="170px"
              label="CPF"
              placeholder="Somente números"
              register={register}
              dataValue="cpf"
              maskInput={true}
              maskValue="999.999.999-99"
              required
            />
            <Row>
              <Input
                width="165px"
                label="Data de nascimento"
                placeholder="DD/MM/AAAA"
                inputType="date"
                register={register}
                dataValue="birthDate"
                required
              />
              <Input
                width="165px"
                label="Telefone"
                placeholder="Somente números"
                register={register}
                dataValue="phone"
                maskInput={true}
                maskValue="(99) 99999-9999"
                required
              />
            </Row>
          </PersonalDataSection>
          <LoginDataSection>
            <h2>Dados para login</h2>
            <Input
              width="340px"
              label="Email"
              placeholder="exemple@uaubox.com"
              register={register}
              dataValue="address.cep"
              required
              value={email}
              disabled
            />
            <Row>
              <Input
                width="165px"
                label="Senha"
                placeholder="Informe sua senha"
                register={register}
                dataValue="password"
                onChange={(password) => secureText(password.target.value)}
                required
                inputType="password"
              />
              <Input
                width="165px"
                label="Confirmar senha"
                placeholder="Confirme a senha"
                register={register}
                dataValue="passwordConfirmation"
                required
                inputType="password"
              />
            </Row>
            <ValidationList>
              <ListItem active={validatePassword.length}>
                insira pelo menos 8 caracteres
              </ListItem>
              <ListItem active={validatePassword.case}>
                insira pelo menos uma letra maiúscula
              </ListItem>
              <ListItem active={validatePassword.number}>
                insira pelo menos um número
              </ListItem>
              <ListItem active={validatePassword.case}>
                insira pelo menos um caracter especial{" "}
                <strong>!@#$%&amp;*;</strong>
              </ListItem>
            </ValidationList>
          </LoginDataSection>
        </SectionWrapper>
        <SectionWrapper>
          <AddressSection>
            <h2>Endereço</h2>
            <Input
              width="165px"
              label="CEP"
              placeholder="Somente números"
              register={register}
              dataValue="address.cep"
              maskInput={true}
              maskValue="99999-999"
              checkingCEP={checkCEP}
            />
            {showInputAddress && (
              <AddressInputSection>
                <Input
                  width="340px"
                  label="Endereço"
                  placeholder="Ex: Rua da saudade"
                  register={register}
                  dataValue="address.street"
                />
                <Row>
                  <Input
                    width="165px"
                    label="Número"
                    placeholder="Número"
                    register={register}
                    dataValue="address.number"
                  />
                  <Input
                    width="165px"
                    label="Complemento"
                    placeholder="Complemento"
                    register={register}
                    dataValue="address.complement"
                  />
                </Row>
                <Input
                  width="340px"
                  label="Bairro"
                  placeholder="Ex: Liberdade"
                  register={register}
                  dataValue="address.district"
                />
                <Row>
                  <Input
                    width="165px"
                    label="Cidade"
                    placeholder="Ex: São Paulo"
                    register={register}
                    dataValue="address.city"
                  />
                  <Input
                    width="165px"
                    label="Estado"
                    placeholder="Ex: São Paulo"
                    register={register}
                    dataValue="address.state"
                  />
                </Row>
                <Input
                  width="340px"
                  label="Referência"
                  placeholder="Ex: Esquina com o boteco do seu zé"
                  register={register}
                  dataValue="address.reference"
                />
              </AddressInputSection>
            )}
          </AddressSection>
          <FlagSection id="flag">
            <div>
              {showFlag && (
                <Flag>
                  <p>FRETE GRÁTIS</p>
                </Flag>
              )}
              <CheckboxContainer>
                <input type="checkbox" {...register("agreedTerms", { required: true})}/>
                <p>
                  Li e estou de acordo com os <strong>Termos de Uso</strong> e{" "}
                  <strong>Política de Privacidade</strong>
                </p>
              </CheckboxContainer>
              <ContinueButton onClick={() => changeScreen(StepsSignatureEnum.forms)}/>
            </div>
          </FlagSection>
        </SectionWrapper>
      </Form>
    </Container>
  );
};
