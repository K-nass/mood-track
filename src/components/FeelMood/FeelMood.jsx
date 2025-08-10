import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import FormButton from "../FormButton/FormButton";
// import style from "./FeelMood.module.css";

const feelMoods = [
  { id: 1, feelMood: "Anxious" },
  { id: 2, feelMood: "Confident" },
  { id: 3, feelMood: "Disappointed" },
  { id: 4, feelMood: "Down" },
  { id: 5, feelMood: "Excited" },
  { id: 6, feelMood: "Frustrated" },
  { id: 7, feelMood: "Grateful" },
  { id: 8, feelMood: "Hopeful" },
  { id: 9, feelMood: "Irritable" },
  { id: 10, feelMood: "Lonely" },
  { id: 11, feelMood: "Optimistic" },
  { id: 12, feelMood: "Overwhelmed" },
  { id: 13, feelMood: "Peaceful" },
  { id: 14, feelMood: "Restless" },
  { id: 15, feelMood: "Stressed" },
  { id: 16, feelMood: "Tired" },
  { id: 17, feelMood: "Calm" },
];

export default function FeelMood({
  state,
  dispatch,
  updateAction,
  errorAction,
  incrementAction,
}) {
  return (
    <form>
      <HeaderForm>How did you feel</HeaderForm>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {feelMoods.map((m) => (
          <div
            className={`flex gap-2 border hover:bg-[#f5f5ff] ${state.feelMood === m.feelMood ? "border-blue-500" : "border-blue-200"} rounded-2xl p-3`}
          >
            <input
              className="cursor-pointer accent-blue-500"
              key={m.id}
              type="checkbox"
              name="feelMood"
              id={m.feelMood}
              value={m.feelMood}
              onChange={(e) => {
                dispatch({
                  type: updateAction,
                  field: "feelMood",
                  payLoad: e.target.value,
                });
              }}
            />
            <label
              className="cursor-pointer font-semibold text-[#22224f]"
              htmlFor={m.feelMood}
            >
              {m.feelMood}
            </label>
          </div>
        ))}
      </div>
      <FormButton
        label="Continue"
        onClick={(e) => {
          e.preventDefault();
          if (!state.feelMood) {
            dispatch({
              type: errorAction,
              payLoad: "Please at least one feel mood",
            });
            return;
          }
          dispatch({ type: incrementAction });
        }}
      />
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
}
