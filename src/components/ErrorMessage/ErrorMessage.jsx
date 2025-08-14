import React from "react";
import { Link } from "react-router-dom";
// import style from './ErrorMessage.module.css'

export default function ErrorMessage({ children }) {
  return (
    <p className="flex items-center gap-1 text-xs leading-[1.1] font-normal tracking-normal text-red-700">
      <img src="/images/icon-info-circle.svg" alt="icon-info" />
      {children}
    </p>
  );
}
