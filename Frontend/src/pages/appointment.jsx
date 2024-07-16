import React from "react";
import AppointmentForm from "../components/AppointmentForm.jsx";
import Hero from "../components/Hero.jsx";

const Appointment = () => {
  return (
    <>
      <Hero title={"Schedule Your Appointment | ZeeCare Medical Institute"} imageUrl={"/signin.png"}/>
      <AppointmentForm />
    </>
  );
};

export default Appointment;
