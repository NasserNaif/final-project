import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectRoute from "../components/ProtectRoute";
import Footer from "./Footer";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import LogInPage from "./LogInPage";
import Nav from "./Nav";
import RegisterPage from "./RegisterPage";
<<<<<<< HEAD
import ProjectCards from "../components/ProjectCards";
import NewProject from "./NewProject";
import RequstPage from "./RequstPage";
import RequstCard from "../components/RequstCard";

=======
import NewProject from "./NewProject";
import RequstPage from "./RequstPage";
import RequstCard from "../components/RequstCard";
>>>>>>> master

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/postrequset/:projectid" element={<RequstPage />} />
          <Route path="/reqcard" element={<RequstCard />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
