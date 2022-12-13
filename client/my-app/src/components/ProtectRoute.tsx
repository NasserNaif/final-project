import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute() {
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}

export default ProtectRoute;
