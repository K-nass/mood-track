import React, { useEffect, useReducer } from "react";
import MoodForm from "../MoodForm/MoodForm";
import FeelMood from "../FeelMood/FeelMood";
import LogMood from "../LogMood/LogMood";
import SleepMood from "../SleepMood/SleepMood";
// import style from "./MultiStepForm.module.css";
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
export default function MultiStepForm() {
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
    <div>
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
