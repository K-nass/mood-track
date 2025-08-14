import React, { useState } from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import { useUserData } from "../../contexts/userData/UserDataProvider";
import { register } from "../Firebase/SignupWithEmailAndPassword";
import FormButton from "../FormButton/FormButton";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const { state, dispatch } = useUserData();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      setLoading(true);
      await register(state.email, state.password);
    } catch (error) {
      setLoading(false);
      dispatch({ type: "error", payload: error.message });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="m-auto w-lg rounded-3xl bg-white p-8 shadow-lg"
      >
        <div className="mb-10 flex justify-center">
          <Logo />
        </div>
        <HeaderForm> Create an account </HeaderForm>
        <p className="mt-3 text-lg text-gray-600">
          Join to track your daily mood and sleep with ease.
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
                type: "register",
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
                type: "register",
                field: e.target.name,
                payload: e.target.value,
              })
            }
          />
        </div>
        <FormButton loading={loading}>Sign Up</FormButton>
        <p className="my-5 text-center text-lg text-gray-600">
          Already got an account?{" "}
          <Link className="text-blue-500" to={"/login"}>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
