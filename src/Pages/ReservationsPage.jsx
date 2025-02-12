import React from "react";
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
          width: "100vw",
          height: "auto",
        }}
      >
        <Tables />
      </div>
    </>
  );
};

export default ReservationsPage;
