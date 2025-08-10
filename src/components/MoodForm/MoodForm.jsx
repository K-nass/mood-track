import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
// import style from './MoodForm.module.css'
import FormButton from "../FormButton/FormButton";

const moods = [
  { id: 1, moodName: "very Happy", moodImg: "" },
  { id: 2, moodName: "Happy", moodImg: "" },
  { id: 3, moodName: "Neutral", moodImg: "" },
  { id: 4, moodName: "Sad", moodImg: "" },
  { id: 5, moodName: "Very Sad", moodImg: "" },
];
export default function MoodForm({
  state,
  dispatch,
  updateAction,
  errorAction,
  incrementAction,
}) {
  return (
    <form>
      <HeaderForm>How did you feel?</HeaderForm>
      {moods.length > 0
        ? moods.map((m) => (
            <div
              className={`my-5 space-x-5 rounded-2xl border border-blue-200 p-3 text-2xl font-semibold text-blue-950 ${state.moodName == m.moodName ? "border-2 border-blue-500" : ""} box-border cursor-pointer bg-white hover:bg-[#f5f5ff]`}
            >
              <input
                className="h-5 w-5 rounded text-blue-500 accent-blue-500 focus:ring-blue-400"
                type="radio"
                name="mood"
                id={m.moodName.trim()}
                value={m.moodName}
                onChange={(e) => {
                  dispatch({
                    type: updateAction,
                    field: "moodName",
                    payLoad: e.target.value,
                  });
                }}
              />
              <label
                className="cursor-pointer text-gray-700 select-none"
                htmlFor={m.moodName.trim()}
              >
                {m.moodName}
              </label>
            </div>
          ))
        : "there is no moods"}
      <FormButton
        label="Continue"
        onClick={(e) => {
          e.preventDefault();
          if (!state.moodName) {
            dispatch({ type: errorAction, payLoad: "please select mood" });
            return;
          }
          dispatch({ type: incrementAction });
        }}
      />
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
}
