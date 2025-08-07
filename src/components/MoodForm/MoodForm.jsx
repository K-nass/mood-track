import React from "react";
// import style from './MoodForm.module.css'

const moods = [
  { id: 1, moodName: "very Happy", moodImg: "" },
  { id: 2, moodName: "Happy", moodImg: "" },
  { id: 3, moodName: "Neutral", moodImg: "" },
  { id: 4, moodName: "Sad", moodImg: "" },
  { id: 5, moodName: "very Sad", moodImg: "" },
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
      <h1>How was your mood today?</h1>
      {moods.length > 0
        ? moods.map((m) => (
            <>
              <input
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
              <label htmlFor={m.moodName.trim()}>{m.moodName}</label>
              <br />
            </>
          ))
        : "there is no moods"}

      <button
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
