import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";

import Infomation from "./Infomation";
import MakeAppointment from "./MakeAppointment";
import Ourservices from "./Ourservices";
import ServiceBanner from "./ServiceBanner";
import Testemonial from "./Testemonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Infomation></Infomation>
      <Ourservices></Ourservices>
      <ServiceBanner></ServiceBanner>
      <MakeAppointment></MakeAppointment>
      <Testemonial></Testemonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
