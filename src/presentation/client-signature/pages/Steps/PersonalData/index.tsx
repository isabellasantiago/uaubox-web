import { UseFormRegister } from "react-hook-form";
import { StepsSignatureEnum } from "../../../../../common/enums/signature-steps";
import { Input } from "../../../components/Input";
import { Container, PersonalDataSection, Form, Row, AddressSection, LoginDataSection } from './styles'


interface PersonalDataProps{
    step: number
    register: UseFormRegister<any>;
    changeScreen: (step: StepsSignatureEnum) => void;
}

export const PersonalData = ({step, register, changeScreen} : PersonalDataProps) => {
    return (
        <Container id="personalData">
                <div>
                    <h2>Preencha seus dados pessoais para nos conhecermos melhor no próximo passo</h2>
                </div>
            <Form>
                <PersonalDataSection>
                    <h2>Dados Pessoais</h2>
                    <Input
                        width="340px"
                        label="Nome"
                        placeholder="Insira seu primeiro nome"
                        register={register}
                        value="name"
                    />
                    <Input 
                        width="340px"
                        label="Sobrenome"
                        placeholder="Insira seu sobrenome"
                        register={register}
                        value="lastName"
                    />
                    <Input
                        width="170px"
                        label="CPF"
                        placeholder="Somente números"
                        register={register}
                        value="cpf"
                    />
                    <Row>
                        <Input
                            width="165px"
                            label="Data de nascimento"
                            placeholder="DD/MM/AAAA"
                            inputType="date"
                            register={register}
                            value="birthDate"
                        />
                        <Input
                            width="165px"
                            label="Telefone"
                            placeholder="Somente números"
                            register={register}
                            value="phone"
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
                        value="address.cep"
                    />
                    <Row>
                        <Input
                            width="165px"
                            label="Senha"
                            placeholder="Informe sua senha"
                            register={register}
                            value="password"
                        />
                        <Input
                            width="165px"
                            label="Confirmar senha"
                            placeholder="Confirme a senha"
                            register={register}
                            value="password"
                        />
                    </Row>
                </LoginDataSection>
                <AddressSection>
                    <h2>Endereço</h2>
                
                    <Input
                        width="165px"
                        label="CEP"
                        placeholder="Somente números"
                        register={register}
                        value="address.cep"
                    />
                </AddressSection>
                
            </Form>
        </Container>
    )
}