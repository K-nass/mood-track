import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import FormButton from "../FormButton/FormButton";
import MoodOption from "../MoodOption/MoodOption";
import { useMoodData } from "../../contexts/MoodDataProvider";
import {
  ERROR_ACTION,
  UPDATE_ACTION,
  INCREMENT_ACTION,
} from "../../contexts/moodActions";

const moods = [
  { id: 1, moodName: "very Happy", moodImg: "" },
  { id: 2, moodName: "Happy", moodImg: "" },
  { id: 3, moodName: "Neutral", moodImg: "" },
  { id: 4, moodName: "Sad", moodImg: "" },
  { id: 5, moodName: "Very Sad", moodImg: "" },
];
export default function MoodForm() {
  const { state, dispatch } = useMoodData();
  return (
    <form>
      <HeaderForm>How did you feel?</HeaderForm>
      {moods.length > 0
        ? moods.map((m) => (
            <MoodOption
              key={m.id}
              stateValue={state.moodName}
              name="mood"
              id={m.moodName}
              currentValue={m.moodName}
              onChange={(e) => {
                dispatch({
                  type: UPDATE_ACTION,
                  field: "moodName",
                  payLoad: e.target.value,
                });
              }}
            />
          ))
        : "there is no moods"}
      <FormButton
        label="Continue"
        onClick={(e) => {
          e.preventDefault();
          if (!state.moodName) {
            dispatch({ type: ERROR_ACTION, payLoad: "please select mood" });
            return;
          }
          dispatch({ type: INCREMENT_ACTION });
        }}
      />
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
}
