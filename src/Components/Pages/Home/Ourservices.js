import React from "react";
import pic1 from "../../../assets/images/fluoride.png";
import pic2 from "../../../assets/images/cavity.png";
import pic3 from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Ourservices = () => {
  return (
    <section>
      <div className=" text-center mt-8">
        <h5 className="text-secondary text-sm font-bold">Our Services</h5>
        <h2 className="text-3xl">Service We Provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-10">
        <ServiceCard cardTitle="Fluoride Treatment" img={pic1}></ServiceCard>
        <ServiceCard cardTitle="Cavity Filling" img={pic2}></ServiceCard>
        <ServiceCard cardTitle="Teeth Whitening" img={pic3}></ServiceCard>
      </div>
    </section>
  );
};

export default Ourservices;
