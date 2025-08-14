import React from "react";
// import style from './FormLabel.module.css'

export default function FormLabel({ htmlFor, children }) {
  return (
    <label className="font-semibold text-blue-950" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
