import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectRoute from "../components/ProtectRoute";
import Footer from "./Footer";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import LogInPage from "./LogInPage";
import Nav from "./Nav";
import RegisterPage from "./RegisterPage";
import NewProject from "./NewProject";
import RequstPage from "./RequstPage";
import RequstCard from "../components/RequstCard";

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/req" element={<RequstPage />} />
          <Route path="/reqcard" element={<RequstCard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
