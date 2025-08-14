import React from "react";
import FormButton from "../FormButton/FormButton";
import HeaderForm from "../HeaderForm/HeaderForm";
import { useMoodData } from "../../contexts/moodData/MoodDataProvider";
import {
  UPDATE_ACTION,
  INCREMENT_ACTION,
} from "../../contexts/moodData/moodActions";

export default function LogMood() {
  const { dispatch } = useMoodData();
  return (
    <form>
      <HeaderForm>write About your day... (optional)</HeaderForm>
      <textarea
        onChange={(e) => {
          dispatch({
            type: UPDATE_ACTION,
            field: "logMood",
            payLoad: e.target.value,
            error: null,
          });
        }}
        rows="8"
        className="text-[1.1 rem] mt-6 block w-full resize-none rounded-lg border bg-white p-2.5 text-blue-800 outline-0 focus:border-2 focus:border-blue-500"
        placeholder="today i felt .."
      ></textarea>

      <br />
      {/* <FormButton
        label="Continue"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: INCREMENT_ACTION });
        }}
      /> */}
    </form>
  );
}
