import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import { useUserData } from "../../contexts/userData/UserDataProvider";
import { register } from "../Firebase/SignupWithEmailAndPassword";
import FormButton from "../FormButton/FormButton";

export default function AuthForm({ mood = "register", headerForm }) {
  const { state, dispatch } = useUserData();
  async function handleSubmit(e) {
    e.preventDefault();
    if (mood === "register") {
      await register(state.email, state.password);
      console.log("done");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto w-lg rounded-3xl bg-[#f5f5ff] p-8 shadow"
    >
      <HeaderForm>{headerForm}header form will be passed</HeaderForm>
      <p className="mt-3 text-lg text-gray-600">
        {mood == "login"
          ? "this is description for login form"
          : "this is description for register form"}
      </p>
      <div className="mt-6 flex flex-col">
        <label className="font-semibold text-blue-950" htmlFor="email">
          Email address
        </label>
        <input
          className="my-4 rounded-[10px] border-[1px] border-blue-900 p-3 outline-0 focus:border-3 focus:border-blue-500"
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: mood,
              field: e.target.name,
              payload: e.target.value,
            })
          }
        />
        <label className="font-semibold text-blue-950" htmlFor="password">
          Password
        </label>
        <input
          className="my-5 rounded-[10px] border-[1px] border-blue-900 p-3 outline-0 focus:border-3 focus:border-blue-500"
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: mood,
              field: e.target.name,
              payload: e.target.value,
            })
          }
        />
      </div>

      <FormButton>
        
      </FormButton>

      <p className="my-5 text-center text-lg text-gray-600">
        {mood == "login"
          ? "Already got an account? Log in."
          : "Haven't got an account? Sign up."}
      </p>
    </form>
  );
}
