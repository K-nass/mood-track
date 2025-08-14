import React, { useState } from "react";
import FormButton from "../FormButton/FormButton";
import MoodOption from "../MoodOption/MoodOption";
import ConfirmationMessage from "../ConfirmationMessage/ConfirmationMessage";
import HeaderForm from "../HeaderForm/HeaderForm";
import { useMoodData } from "../../contexts/moodData/MoodDataProvider";
import {
  ERROR_ACTION,
  UPDATE_ACTION,
} from "../../contexts/moodData/moodActions";

const sleepMood = [
  { id: 1, sleepMood: "9+hours" },
  { id: 2, sleepMood: "7-8hours" },
  { id: 3, sleepMood: "5-6hours" },
  { id: 4, sleepMood: "3-4hours" },
  { id: 5, sleepMood: "0-2hours" },
];
export default function SleepMood() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useMoodData();
  return (
    <>
      {!isSubmitted ? (
        <form>
          <HeaderForm>How many hours did you sleep last night?</HeaderForm>
          {sleepMood.map((m) => (
            <MoodOption
              key={m.id}
              stateValue={state.sleepMood}
              name="sleepMood"
              id={m.sleepMood}
              currentValue={m.sleepMood}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_ACTION,
                  field: "sleepMood",
                  payLoad: e.target.value,
                });
              }}
            />
          ))}
          {/* <FormButton
            label="Submit"
            loading={loading}
            onClick={(e) => {
              e.preventDefault();
              if (!state.sleepMood) {
                dispatch({
                  type: ERROR_ACTION,
                  payLoad: "please select sleep hours",
                });
                return;
              }
              setLoading(true);
              // setIsSubmitted(true);
              //simulate loading
              setTimeout(() => {
                setIsSubmitted(true);
                setLoading(false);
              }, 3000);
            }}
          /> */}
          {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        </form>
      ) : (
        <ConfirmationMessage />
      )}
    </>
  );
}
