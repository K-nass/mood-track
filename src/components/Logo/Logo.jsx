import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="flex items-center" to={"/"}>
      <img className="w-20" src="logo.png" alt="logo img" />
      <p className="text-blue-950">Mood tracker</p>
    </Link>
  );
}
