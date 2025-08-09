import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
// import style from './MoodForm.module.css'

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
    <form className="">
     
      <HeaderForm>
        How did you feel?
      </HeaderForm>
      {moods.length > 0
        ? moods.map((m) => (
            <div
              className={`my-5 space-x-5 rounded-2xl border border-blue-200 p-3 text-2xl font-semibold text-blue-950 ${state.moodName == m.moodName ? "border-2 border-blue-500" : ""} box-border cursor-pointer bg-white hover:bg-[#f5f5ff]`}
            >
              <input
                className="accent-blue-500"
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
              <label className="cursor-pointer" htmlFor={m.moodName.trim()}>
                {m.moodName}
              </label>
            </div>
          ))
        : "there is no moods"}

      <button
        className="w-full cursor-pointer rounded-2xl bg-blue-500 p-4 font-bold text-white hover:bg-blue-600"
        onClick={(e) => {
          e.preventDefault();
          if (!state.moodName) {
            dispatch({ type: errorAction, payLoad: "please select mood" });
            return;
          }
          dispatch({ type: incrementAction });
        }}
      >
        Continue
      </button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
}
