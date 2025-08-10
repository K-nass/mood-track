import React, { useEffect, useReducer } from "react";
import MoodForm from "../MoodForm/MoodForm";
import FeelMood from "../FeelMood/FeelMood";
import LogMood from "../LogMood/LogMood";
import SleepMood from "../SleepMood/SleepMood";
import StepIndictor from "../StepIndicator/StepIndicator";
const UPDATE_ACTION = "UPDATE_FIELD";
const ERROR_ACTION = "SET_ERROR";
const INCREMENT_ACTION = "INCREMENT_STEP";
function reducer(state, action) {
  switch (action.type) {
    case UPDATE_ACTION:
      return { ...state, [action.field]: action.payLoad, error: null };
    case ERROR_ACTION:
      return {
        ...state,
        error: action.payLoad,
      };
    case INCREMENT_ACTION:
      return { ...state, step: state.step + 1, error: null };
    default:
      return { ...state };
  }
}
export default function MultiStepForm({ handleCloseForm }) {
  const [state, dispatch] = useReducer(reducer, {
    step: 1,
    moodName: "",
    feelMood: "",
    logMood: "",
    sleepMood: "",
    error: null,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);
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
      {state.step == 1 && (
        <MoodForm
          state={state}
          dispatch={dispatch}
          updateAction={UPDATE_ACTION}
          errorAction={ERROR_ACTION}
          incrementAction={INCREMENT_ACTION}
        />
      )}
      {state.step == 2 && (
        <FeelMood
          state={state}
          dispatch={dispatch}
          updateAction={UPDATE_ACTION}
          errorAction={ERROR_ACTION}
          incrementAction={INCREMENT_ACTION}
        />
      )}
      {state.step == 3 && (
        <LogMood
          dispatch={dispatch}
          updateAction={UPDATE_ACTION}
          incrementAction={INCREMENT_ACTION}
        />
      )}
      {state.step == 4 && (
        <SleepMood
          state={state}
          dispatch={dispatch}
          updateAction={UPDATE_ACTION}
          errorAction={ERROR_ACTION}
        />
      )}
    </div>
  );
}
