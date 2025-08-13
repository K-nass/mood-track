import React from "react";
import MoodForm from "../MoodForm/MoodForm";
import FeelMood from "../FeelMood/FeelMood";
import LogMood from "../LogMood/LogMood";
import SleepMood from "../SleepMood/SleepMood";
import StepIndictor from "../StepIndicator/StepIndicator";
import { useMoodData } from "../../contexts/MoodDataProvider";
import { useNavigate } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MultiStepForm() {
  const navigate = useNavigate();
  const { state } = useMoodData();
  return (
    <div className="w-lg rounded-3xl bg-[#f5f5ff] p-8 shadow-lg">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-[#22224f]">Log your mood</h1>
        <button className="cursor-pointer" onClick={() => navigate("/")}>
          <FontAwesomeIcon
            className="p-2 opacity-60 hover:bg-blue-200"
            icon={faXmark}
          />
        </button>
      </div>
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
