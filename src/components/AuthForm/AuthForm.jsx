import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import FormButton from "../FormButton/FormButton";

export default function AuthForm({ mood = "register", headerForm }) {
  return (
    <form className="m-auto w-lg rounded-3xl bg-[#f5f5ff] p-8 shadow">
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
        />
        <label className="font-semibold text-blue-950" htmlFor="password">
          Password
        </label>
        <input
          className="my-5 rounded-[10px] border-[1px] border-blue-900 p-3 outline-0 focus:border-3 focus:border-blue-500"
          type="password"
          name="password"
          id="password"
        />
      </div>
      {/* onSubmit will be passed */}
      <FormButton label={mood == "login" ? "login" : "register"} />
      <p className="my-5 text-center text-lg text-gray-600">
        {mood == "login"
          ? "Already got an account? Log in."
          : "Haven't got an account? Sign up."}
      </p>
    </form>
  );
}
