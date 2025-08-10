import React from "react";
export default function FormButton({ label, onClick }) {
  return (
    <button
      className="w-full cursor-pointer rounded-2xl bg-blue-500 p-4 font-bold text-white hover:bg-blue-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
