import React from "react";
import Card from "./Card";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Infomation = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-10">
      <Card
        bg="bg-gradient-to-r from-secondary"
        cardTitle="Opening Hours"
        img={clock}
      ></Card>
      <Card bg="bg-accent" cardTitle="Visit Our Location" img={marker}></Card>
      <Card
        bg="bg-gradient-to-r from-secondary"
        cardTitle="Contact us"
        img={phone}
      ></Card>
    </div>
  );
};

export default Infomation;
