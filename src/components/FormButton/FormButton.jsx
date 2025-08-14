import React from "react";
export default function FormButton({ loading, children }) {
  return (
    <button
      className={`w-full ${loading ? "cursor-default bg-gray-500 hover:bg-gray-500" : "cursor-pointer"} rounded-2xl bg-blue-500 p-4 font-bold text-white hover:bg-blue-600`}
      disabled={loading}
    >
      {loading ? "Loading ..." : children}
    </button>
  );
}
