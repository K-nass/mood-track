import React, { useState } from "react";
// import style from './LoginForm.module.css'
import HeaderForm from "../HeaderForm/HeaderForm";
import FormButton from "../FormButton/FormButton";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import FormLabel from "../FormLabel/FormLabel";
import FormInput from "../FormInput/FormInput";
import FormIntro from "../FormIntro/FormIntro";
import { useAuth } from "../../contexts/authContext/AuthProvider";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!email.trim() && !password.trim()) {
      setError("email and password are required");
    }
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(true);
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
        <HeaderForm> Welcome back! </HeaderForm>
        <FormIntro>Log in to continue tracking your mood and sleep.</FormIntro>
        <div className="mt-6 flex flex-col">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <FormButton>Log in</FormButton>
        <p className="my-5 text-center text-lg text-gray-600">
          Haven't got an account?
          <Link className="ms-2 text-blue-500" to={"/register"}>
            Sign up.
          </Link>
        </p>
      </form>
    </div>
  );
}
