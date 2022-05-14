import React, { useEffect, useState } from "react";
import Footer from "../Shares/Footer";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import AvailableAppointments from "./AvailableAppointments";
import AppointmentDate from "./AppointmentDate";
import bg from "../../../assets/images/bg.png";
import BookingModal from "./BookingModal";
const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div style={{ background: `url(${bg})` }} className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="doctor's chair img"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
      <div>
        <AppointmentDate date={date}></AppointmentDate>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-5">
        {services.map((service) => (
          <AvailableAppointments
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AvailableAppointments>
        ))}
        {treatment && (
          <BookingModal
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
          ></BookingModal>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
