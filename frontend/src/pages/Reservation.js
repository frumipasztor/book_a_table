import React from "react";
import Header from "../components/header/Header";
import ReservationForm from "../components/form/reservationForm";
import Footer from "../components/footer/Footer";

function Reservation() {
  return (
    <div className="reservation">
      <Header />
      <div className="siteTitle">
        <h2>Asztalfoglalás</h2>
        <span className="decorSpan"></span>
      </div>
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default Reservation;