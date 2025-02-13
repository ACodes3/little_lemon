import { Button } from "@mui/material";
import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BookingFormModal from "../Components/OrderPage/BookingFormModal";
import Tables from "../Components/Reservations/Tables";

const ReservationsPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar />
      <div className="container">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#495E57",
            "&:hover": { backgroundColor: "#3a4a44" },
          }}
          onClick={handleOpen}
        >
          Book Table
        </Button>
        <BookingFormModal open={open} handleClose={handleClose} />
      </div>
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
