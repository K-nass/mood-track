import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="flex items-center" to={"/"}>
      <img className="w-35" src="images/logo.svg" alt="logo img" />
    </Link>
  );
}
