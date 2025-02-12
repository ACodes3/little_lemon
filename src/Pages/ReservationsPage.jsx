import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Tables from "../Components/Reservations/Tables";

const ReservationsPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "auto",
        }}
      >
        <Tables />
      </div>
      <Footer />
    </>
  );
};

export default ReservationsPage;
