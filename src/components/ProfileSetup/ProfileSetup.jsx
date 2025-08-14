import React, { useState } from "react";
// import style from "./ProfileSetup.module.css";
import Logo from "../Logo/Logo";
import HeaderForm from "../HeaderForm/HeaderForm";
import FormIntro from "../FormIntro/FormIntro";
import FormLabel from "../FormLabel/FormLabel";
import FormInput from "../FormInput/FormInput";
import { useUserData } from "../../contexts/userData/UserDataProvider";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import FormButton from "../FormButton/FormButton";
import { useNavigate } from "react-router-dom";

export default function ProfileSetup() {
  const navigate = useNavigate();
  const { state, dispatch } = useUserData();
  const [loading, setLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!state.userName.trim()) {
      dispatch({ type: "error", payload: "Name is required" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      try {
        navigate("/");
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      } finally {
        setLoading(false);
      }
    }, 1000);
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
        <HeaderForm> Personalize your experience </HeaderForm>
        <FormIntro>
          Add your name and a profile picture to make Mood yours.
        </FormIntro>
        <div className="mt-6 flex flex-col">
          <FormLabel htmlFor="userName">Name</FormLabel>
          <FormInput
            type="text"
            name="userName"
            id="name"
            value={state.userName}
            placeholder="Your Name"
            onBlur={(e) => {
              if (!e.target.value.trim()) {
                dispatch({ type: "error", payload: "Name is required" });
              }
            }}
            onChange={(e) => {
              dispatch({
                type: "register",
                field: e.target.name,
                payload: e.target.value,
              });
              if (state.error) dispatch({ type: "error", payload: null });
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <FormLabel htmlFor="userImg">Upload Image</FormLabel>
            <img
              className="w-5"
              src="images/avatar-placeholder.svg"
              alt="avatar image"
            />
          </div>
          <p className="my-2 text-sm text-gray-500">Optional</p>
          <p className="my-2 text-sm text-gray-600">Max 250KB, PNG or JPEG</p>
          <FormInput type="file" name="userImg" id="userImg" />
        </div>
        <div className="mt-5">
          {state.error && <ErrorMessage>{state.error}</ErrorMessage>}
        </div>

        <div className="mt-5">
          <FormButton loading={loading} loadingText="Saving ...">
            Start Tracking
          </FormButton>
        </div>
      </form>
    </div>
  );
}
