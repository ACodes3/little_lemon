import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import OrderItems from "../Components/OrderPage/OrderItems";
import Promotions from "../Components/OrderPage/Promotions";

const OrderPage = () => {
  return (
    <>
      <Navbar />
      <Promotions />
      <OrderItems />
      <Footer />
    </>
  );
};

export default OrderPage;
