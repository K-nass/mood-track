import React, { useState } from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import { useUserData } from "../../contexts/userData/UserDataProvider";
import { register } from "../Firebase/SignupWithEmailAndPassword";
import FormButton from "../FormButton/FormButton";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import FormLabel from "../FormLabel/FormLabel";
import FormInput from "../FormInput/FormInput";
import FormIntro from "../FormIntro/FormIntro";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function RegisterForm() {
  const { state, dispatch } = useUserData();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (!/^\d{6}$/.test(password)) {
      setPasswordError("Password must be exactly 6 digits");
      hasError = true;
    }

    if (hasError) {
      return;
    }
    setLoading(true);
    try {
      await register(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
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
            value={email}
            placeholder="name@email.com"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => {
              if (!e.target.value) {
                setEmailError("Email is required");
              } else {
                setEmailError("");
              }
            }}
          />
          <div className="min-h-5">
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </div>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => {
              if (!e.target.value) {
                setPasswordError("Password is required");
              } else {
                setPasswordError("");
              }
            }}
          />
          <div className="min-h-5">
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          </div>
        </div>
        <div className="mt-5">
          <FormButton loading={loading} loadingText="loading ...">
            Sign Up
          </FormButton>
        </div>
        <div className="mt-5">
          {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
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
