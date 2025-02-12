import React from "react";
import AboutComponent from "../Components/About/AboutComponent";
import Chefs from "../Components/About/Chefs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutComponent />
      <Chefs />
      <Footer />
    </>
  );
};

export default AboutPage;
