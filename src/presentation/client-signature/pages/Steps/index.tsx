import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { StepsSignatureEnum } from "../../../../common/enums/signature-steps.enum";
import { SignatureModel } from "../../../../domain/models/signature.model";
import { Header } from "../../components/Header";
import { FormStep } from "./Forms";
import { IdentificationStep } from "./Identification";
import { PersonalData } from "./PersonalData";
import { Plans } from './Plans'
import { Container } from "./styles";

interface StepsProps {}

export const Steps = () => {
  const [signatureInfos, setSiginatureInfos] = useState<SignatureModel>();
  const [formFields, setFormFields] = useState({});
  const [step, setStep] = useState<StepsSignatureEnum>(
    StepsSignatureEnum.identification
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    clearErrors,
  } = useForm();

  const email = getValues("email");

  const handleStep = (stepNumber: StepsSignatureEnum) => {
    setStep(stepNumber);
  };

  useEffect(() => {
    const subscription = watch(async (value) => {
      setFormFields(value);
    });
    return () => subscription.unsubscribe();
  }, []);

  const submitSignatureData = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("cpf", data.cpf);
      formData.append("name", data.name);
      formData.append("lastName", data.lastName);
      formData.append("password", data.password);
      formData.append("birthDate", data.birthDate);
      formData.append("phone", data.phone);
      formData.append("address.cep", data.address.cep);
      formData.append("address.street", data.address.street);
      formData.append("address.number", data.address);
      formData.append("address.disctrict", data.address.district);
      formData.append("address.city", data.address.city);
      formData.append("address.state", data.address.state);
      formData.append("address.complement", data.address.complement);
      formData.append("address.reference", data.address.referece);
      formData.append("agreedTerms", data.agreedTerms);
      formData.append("forms.skin", data.forms.skin);
      formData.append("forms.hair", data.forms.hair);
      formData.append("forms.productPreference", data.forms.productPrefence);
      formData.append("plan.name", data.plan.name);
      formData.append("plan.price", data.plan.price);
      formData.append("plan.months", data.plan.months);

      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Header step={step} handleStep={() => handleStep(step)} />
      {step === StepsSignatureEnum.identification && (
        <IdentificationStep
          step={step}
          changeScreen={handleStep}
          register={register}
        />
      )}
      {step === StepsSignatureEnum.personalData && (
        <PersonalData
          step={step}
          register={register}
          changeScreen={handleStep}
          setValue={setValue}
          email={email}
          getValues={getValues}
        />
      )}
      {step === 3 && (
        <FormStep step={step} register={register} changeScreen={handleStep} />
      )}
      {step === 4 && (
        <Plans
          step={step}
          register={register}
          changeScreen={handleStep}
        />
      )}
      {/* {step === 5 && ()} */}
    </Container>
  );
};
