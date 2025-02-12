import React from "react";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Specials from "../Components/Specials";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Specials />
    </>
  );
};

export default HomePage;
