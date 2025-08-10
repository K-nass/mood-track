import React, { useState } from "react";
import FormButton from "../FormButton/FormButton";
import MoodOption from "../MoodOption/MoodOption";
// import style from "./SleepMood.module.css";

const sleepMood = [
  { id: 1, sleepMood: "9+hours" },
  { id: 2, sleepMood: "7-8hours" },
  { id: 3, sleepMood: "5-6hours" },
  { id: 4, sleepMood: "3-4hours" },
  { id: 5, sleepMood: "0-2hours" },
];
export default function SleepMood({
  state,
  dispatch,
  updateAction,
  errorAction,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      {!isSubmitted ? (
        <form>
          <h1>How many hours did you sleep last night?</h1>
          {sleepMood.map((m) => (
            <MoodOption
              key={m.id}
              stateValue={state.sleepMood}
              name="sleepMood"
              id={m.sleepMood}
              currentValue={m.sleepMood}
              onChange={(e) => {
                dispatch({
                  type: updateAction,
                  field: "sleepMood",
                  payLoad: e.target.value,
                });
              }}
            />
          ))}
          <FormButton
            label="Submit"
            onClick={(e) => {
              e.preventDefault();
              if (!state.sleepMood) {
                dispatch({
                  type: errorAction,
                  payLoad: "please select sleep hours",
                });
                return;
              }
              setIsSubmitted(true);
            }}
          />
          {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        </form>
      ) : (
        "logged success"
      )}
    </>
  );
}
