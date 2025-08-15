import React, { createContext, useContext, useEffect, useReducer } from "react";

const userDataContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "register":
      return {
        ...state,
        [action.field]: action.payload,
        error: null,
      };
    case "error":
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
}

export default function UserDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    userName: "",
    date: new Date().toLocaleString("default", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    error: null,
  });
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <userDataContext.Provider value={{ state, dispatch }}>
      {children}
    </userDataContext.Provider>
  );
}

function useUserData() {
  const context = useContext(userDataContext);
  if (!context) {
    throw new Error(" useUserData must be used within a UserDataProvider");
  }
  return context;
}

export { UserDataProvider, useUserData };
