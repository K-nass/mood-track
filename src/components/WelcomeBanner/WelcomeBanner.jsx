import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import { Link } from "react-router-dom";
import { useMoodData } from "../../contexts/moodData/MoodDataProvider";

export default function WelcomeBanner() {
  const { state } = useMoodData();

  return (
    <div className="mt-16 text-center">
      <p className="mb-5 text-3xl font-bold text-blue-500">Hello kareem</p>
      <h1 className="text-5xl font-extrabold text-blue-950">
        How are you feeling today?
      </h1>
      <p className="mt-5 font-semibold text-blue-950 opacity-70 shadow">
        {state.date}
      </p>
      <Link
        className="mt-5 inline-block cursor-pointer rounded-2xl bg-blue-500 px-5 py-5 text-2xl font-semibold text-white"
        to="logmood"
      >
        Log today's mood...
      </Link>
    </div>
  );
}
