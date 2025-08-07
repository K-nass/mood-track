import React from "react";
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
  { id: 17, feelMood: "Anxious" },
  { id: 18, feelMood: "Calm" },
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
      <h1>How did you feel</h1>
      {feelMoods.map((m) => (
        <>
          <input
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
          <label htmlFor={m.feelMood}>{m.feelMood}</label>
          <br />
        </>
      ))}
      <button
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
      >
        Continue
      </button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
}
