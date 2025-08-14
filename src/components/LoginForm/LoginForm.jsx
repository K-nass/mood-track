import React from "react";
// import style from './LoginForm.module.css'
import HeaderForm from "../HeaderForm/HeaderForm";
// import { useUserData } from "../../contexts/userData/UserDataProvider";
// import { register } from "../Firebase/SignupWithEmailAndPassword";
import FormButton from "../FormButton/FormButton";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import FormLabel from "../FormLabel/FormLabel";
import FormInput from "../FormInput/FormInput";
import FormIntro from "../FormIntro/FormIntro";

export default function LoginForm() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form
        // onSubmit={handleSubmit}
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
            // value={state.email}
            // onChange={(e) =>
            //   dispatch({
            //     type: "register",
            //     field: e.target.name,
            //     payload: e.target.value,
            //   })
            // }
          />

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="****"
            // value={state.password}
            // onChange={(e) =>
            //   dispatch({
            //     type: "register",
            //     field: e.target.name,
            //     payload: e.target.value,
            //   })
            // }
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
