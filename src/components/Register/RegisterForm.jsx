import React, { useReducer, useState } from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import { register } from "../Firebase/SignupWithEmailAndPassword";
import FormButton from "../FormButton/FormButton";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import FormLabel from "../FormLabel/FormLabel";
import FormInput from "../FormInput/FormInput";
import FormIntro from "../FormIntro/FormIntro";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function reducer(state, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.payload };
    case "setError":
      return { ...state, [action.field]: action.payload };
    case "clearErrors":
      return { ...state, emailError: "", passwordError: "", formError: "" };
    default:
      return state;
  }
}
export default function RegisterForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    formError: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "clearErrors" });
    let hasError = false;
    if (!state.email.trim()) {
      dispatch({
        type: "setError",
        field: "emailError",
        payload: "Email is required!",
      });
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      dispatch({
        type: "setError",
        field: "emailError",
        payload: " Please enter a valid email address!",
      });
      hasError = true;
    }

    if (!state.password.trim()) {
      dispatch({
        type: "setError",
        field: "passwordError",
        payload: "Password is required!",
      });
      hasError = true;
    } else if (!/^\d{6}$/.test(state.password)) {
      dispatch({
        type: "setError",
        field: "passwordError",
        payload: "Password must be exactly 6 digits!",
      });
      hasError = true;
    }

    if (hasError) {
      return;
    }
    setLoading(true);
    try {
      await register(state.email, state.password);
      navigate("/profileSetup");
    } catch (error) {
      dispatch({
        type: "setError",
        field: "formError",
        payload: error.message,
      });
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
        <FormIntro>
          Join to track your daily mood and sleep with ease.
        </FormIntro>
        <div className="mt-6 flex flex-col">
          <div className="flex items-center gap-2">
            <FormLabel htmlFor="email">Email address</FormLabel>
            <img
              className="w-3"
              src="/images/icon-info-circle.svg"
              alt="info icon"
            />
            <p className="mt-1 text-sm text-gray-500">
              You can use a fake email
            </p>
          </div>

          <FormInput
            type="email"
            id="email"
            name="email"
            value={state.email}
            placeholder="name@email.com"
            onChange={(e) =>
              dispatch({
                type: "updateField",
                field: e.target.name,
                payload: e.target.value,
              })
            }
            onBlur={(e) => {
              if (!e.target.value) {
                dispatch({
                  type: "setError",
                  field: "emailError",
                  payload: "Email is required!",
                });
              } else {
                dispatch({
                  type: "setError",
                  field: "emailError",
                  payload: "",
                });
              }
            }}
          />
          <div className="min-h-5">
            {state.emailError && (
              <ErrorMessage>{state.emailError}</ErrorMessage>
            )}
          </div>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            value={state.password}
            placeholder="******"
            onChange={(e) =>
              dispatch({
                type: "updateField",
                field: e.target.name,
                payload: e.target.value,
              })
            }
            onBlur={(e) => {
              if (!e.target.value) {
                dispatch({
                  type: "setError",
                  field: "passwordError",
                  payload: "Password is required!",
                });
              } else {
                dispatch({
                  type: "setError",
                  field: "passwordError",
                  payload: "",
                });
              }
            }}
          />
          <div className="min-h-5">
            {state.passwordError && (
              <ErrorMessage>{state.passwordError}</ErrorMessage>
            )}
          </div>
        </div>
        <div className="mt-5">
          <FormButton loading={loading} loadingText="loading ...">
            Sign Up
          </FormButton>
        </div>
        <div className="mt-5">
          {state.formError && <ErrorMessage>{state.formError}</ErrorMessage>}
        </div>
        <p className="mt-5 text-center text-lg text-gray-600">
          Already got an account?{" "}
          <Link className="ms-2 text-blue-500" to={"/login"}>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
