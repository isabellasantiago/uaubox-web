import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { StepsSignatureEnum } from "../../../../common/enums/signature-steps.enum";
import { Border, Title, Price, Message, Button } from "./style";

interface PlanProps {
  step: number;
  register: UseFormRegister<any>;
  planName: string;
  planPrice: string;
  planMonth: string;
  onClick?: () => void;
  changeScreen: (step: StepsSignatureEnum) => void;
}

export const Plan = ({
  register,
  planName,
  planPrice,
  planMonth,
  onClick,
  changeScreen,
}: PlanProps) => {
  const [plan, setPlan] = useState({
    name: "",
    price: 0,
    months: 1,
  });
  const handlePlan = (stepNumber: number) => {
    changeScreen(stepNumber);

    setPlan({
      name: planName,
      price: Number(planPrice.replace(",", ".")),
      months: Number(planMonth),
    });
  };

  return (
    <Border>
      <Title>{planName}</Title>
      <Price>
        {planPrice}
        <span>/mês</span>
      </Price>
      <Message>
        Receba 1 box por mês, <strong>por {planMonth} mês</strong>
      </Message>
      <Button onClick={() => handlePlan(StepsSignatureEnum.payment)}>
        QUERO ESSE!
      </Button>
    </Border>
  );
};
