import React from "react";
import AverageMoodCard from "../AverageMoodCard/AverageMoodCard";
import HeaderForm from "../HeaderForm/HeaderForm";
import { useState } from "react";
import MultiStepForm from "../MultiStepForm/MultiStepForm";
import AuthForm from "../AuthForm/AuthForm";
import { Link, Outlet } from "react-router-dom";
export default function Home() {
  const [date] = useState(new Date());
  // const [isFormHidden, setIsFormHidden] = useState(false);
  return (
    <div>
      <p>hello kareem</p>
      <HeaderForm>How are you feeling today?</HeaderForm>
      <p>
        {date.toLocaleString("default", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <Link
        className="cursor-pointer rounded-2xl bg-blue-600 px-5 py-2 text-2xl font-semibold text-white"
        to="logmood"
      >
        Log today's mood...
      </Link>
      {/* multi step form */}
      <Outlet />
      <div>
        <AverageMoodCard />
        <AverageMoodCard />
      </div>
    </div>
  );
}
