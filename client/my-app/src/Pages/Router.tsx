import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectRoute from "../components/ProtectRoute";
import Footer from "./Footer";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import LogInPage from "./LogInPage";
import Nav from "./Nav";
import RegisterPage from "./RegisterPage";

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
