import React from "react";

export default function MoodOption({
  name,
  id,
  currentValue,
  onChange,
  stateValue,
}) {
  return (
    <div
      className={`my-5 space-x-5 rounded-2xl border border-blue-200 p-3 text-2xl font-semibold text-blue-950 ${stateValue == currentValue ? "border-2 border-blue-500" : ""} box-border cursor-pointer bg-white hover:bg-[#f5f5ff]`}
    >
      <input
        className="h-5 w-5 rounded text-blue-500 accent-blue-500 focus:ring-blue-400"
        type="radio"
        name={name}
        id={id}
        value={currentValue}
        onChange={onChange}
      />
      <label className="cursor-pointer text-gray-700 select-none" htmlFor={id}>
        {currentValue}
      </label>
    </div>
  );
}
