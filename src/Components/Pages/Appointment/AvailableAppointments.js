import React from "react";

const AvailableAppointments = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-xl lg:max-w-lg">
      <div className="card-body ">
        <h2 className="card-title text-primary mx-auto">{name}</h2>
        <p className="text-center">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-700">No appointment available</span>
          )}
        </p>

        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>

        <label
          htmlFor="booking-modal"
          className="btn btn-primary uppercase text-white w-1/2 mx-auto"
          disabled={slots.length === 0}
          onClick={() => setTreatment(service)}
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AvailableAppointments;
