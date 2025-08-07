import React from "react";
// import style from "./LogMood.module.css";

export default function LogMood({ dispatch, updateAction, incrementAction }) {
  return (
    <form>
      <h1>write About your day... (optional)</h1>
      <textarea
        name=""
        id=""
        placeholder="today i felt"
        onChange={(e) => {
          dispatch({
            type: updateAction,
            field: "logMood",
            payLoad: e.target.value,
            error: null,
          });
        }}
      ></textarea>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: incrementAction });
        }}
      >
        Continue
      </button>
    </form>
  );
}
