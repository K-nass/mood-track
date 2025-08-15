import React from "react";
import { useAuth } from "../../contexts/authContext/AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";
// import style from "./PrivateRoute.module.css";
export default function PrivateRoute() {
  const navagaite = useNavigate()
  return <div>PrivateRoute</div>;
}
