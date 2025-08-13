import React from "react";
// import style from './AverageMoodCard.module.css'

export default function AverageMoodCard({ type, children }) {
  const startColor =
    type === "averageMood" ? "from-[#B9B3FF]" : "from-[#758BE4]";
  return (
    <div
      className={`bg-gradient-to-r ${startColor} flex flex-col justify-center rounded-2xl to-gray-300 px-3 py-5`}
    >
      {children}
    </div>
  );
}
