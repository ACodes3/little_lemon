import React from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Specials from "../Components/Specials";
import Testimonials from "../Components/Testimonials";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
