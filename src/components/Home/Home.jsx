import React from "react";
import AverageMoodCard from "../AverageMoodCard/AverageMoodCard";
import HeaderForm from "../HeaderForm/HeaderForm";
import NavPage from "../NavPage/NavPage";
import { useState } from "react";
import MultiStepForm from "../MultiStepForm/MultiStepForm";
import AuthForm from "../AuthForm/AuthForm";
export default function Home() {
  const [date] = useState(new Date());
  const [isFormHidden, setIsFormHidden] = useState(false);
  return (
    <div>
      <NavPage />
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
      <button
        className="cursor-pointer rounded-2xl bg-blue-600 px-5 py-2 text-2xl font-semibold text-white"
        onClick={() => setIsFormHidden(!isFormHidden)}
      >
        to step form
      </button>
      {isFormHidden && <MultiStepForm handleCloseForm={setIsFormHidden} />}
      <div>
        <AverageMoodCard />
        <AverageMoodCard />
      </div>
      <AuthForm />
    </div>
  );
}
