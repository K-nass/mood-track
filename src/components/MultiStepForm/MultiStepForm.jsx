import React from "react";
import MoodForm from "../MoodForm/MoodForm";
import FeelMood from "../FeelMood/FeelMood";
import LogMood from "../LogMood/LogMood";
import SleepMood from "../SleepMood/SleepMood";
import StepIndictor from "../StepIndicator/StepIndicator";
import { useMoodData } from "../../contexts/MoodDataProvider";

export default function MultiStepForm({ handleCloseForm }) {
  const { state } = useMoodData();
  return (
    <div className="m-auto w-lg rounded-3xl bg-[#f5f5ff] p-8 shadow">
      <h1 className="text-3xl font-bold text-[#22224f]">Log your mood</h1>
      <button onClick={() => handleCloseForm(false)}>x</button>
      <div className="my-10 flex justify-between gap-3">
        {Array.from({ length: 4 }).map((_, idx) => (
          <StepIndictor
            key={idx}
            currentStep={state.step}
            indictorStep={idx + 1}
          />
        ))}
      </div>
      {state.step == 1 && <MoodForm />}
      {state.step == 2 && <FeelMood />}
      {state.step == 3 && <LogMood />}
      {state.step == 4 && <SleepMood />}
    </div>
  );
}
