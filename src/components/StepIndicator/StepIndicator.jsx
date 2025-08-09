import React from "react";

export default function StepIndicator({ currentStep, indictorStep }) {
  return (
    <span
      className={`h-2 w-1/4 rounded ${currentStep >= indictorStep ? "bg-blue-500" : "bg-gray-400"}`}
    ></span>
  );
}
