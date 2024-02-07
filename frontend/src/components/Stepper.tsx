import { Stepper as MTStepper, Step } from "@material-tailwind/react";
import React from "react";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

type TStepperProps = {
  steps: {
    value: number;
    name: string;
    component: React.ReactNode;
  }[];
};

export function Stepper({ steps }: TStepperProps) {
  const { activeStep } = useAppSelector((state) => state.stepper);
  // const { title } = useAppSelector((state) => state.module);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full py-4 px-8">
      <MTStepper placeholder={""} activeStep={activeStep}>
        {steps.map(({ value, name }) => (
          <Step
            placeholder={""}
            key={value}
            className="w-fit px-4 cursor-pointer"
            onClick={() => dispatch(setActiveStepper(value))}>
            {name}
          </Step>
        ))}
      </MTStepper>

      <div>{steps[activeStep].component}</div>
    </div>
  );
}
