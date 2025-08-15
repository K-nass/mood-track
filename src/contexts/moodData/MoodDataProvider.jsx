import React, { createContext, useContext, useReducer } from "react";
import { ERROR_ACTION, INCREMENT_ACTION, UPDATE_ACTION } from "./moodActions";
const MoodDataContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_ACTION:
      return { ...state, [action.field]: action.payLoad, error: null };
    case ERROR_ACTION:
      return {
        ...state,
        error: action.payLoad,
      };
    case INCREMENT_ACTION:
      return { ...state, step: state.step + 1, error: null };
    default:
      return { ...state };
  }
}
function MoodDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    step: 1,
    moodName: "",
    feelMood: "",
    logMood: "",
    sleepMood: "",
    error: null,
  });
  return (
    <MoodDataContext.Provider value={{ state, dispatch }}>
      {children}
    </MoodDataContext.Provider>
  );
}
function useMoodData() {
  const context = useContext(MoodDataContext);
  if (!context) {
    throw new Error("useMoodData must be used within a MoodDataProvider");
  }
  return context;
}

export { MoodDataProvider, useMoodData };
