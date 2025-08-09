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
    <form className="">
      <h1 className="text-[#22224f] font-bold text-3xl">
        How was your mood today?
      </h1>
      {moods.length > 0
        ? moods.map((m) => (
            <div className="flex  justify-start items-center space-x-6 my-4 bg-white p-4 rounded-2xl border border-blue-50 hover:bg-blue-50 hover:border-blue-100 text-[#22224f] font-semibold cursor-pointer ">
              <input
                className=""
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
              <label className="" htmlFor={m.moodName.trim()}>
                {m.moodName}
              </label>
            </div>
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
