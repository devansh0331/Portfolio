import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function Main() {
  return (
    <div className="text-white h-screen w-screen overflow-x-hidden overflow-y-scroll bg-hero bg-no-repeat bg-cover bg-center bg-fixed backdrop-blur-lg">
      <Navbar />
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default Main;
