import { format } from "date-fns";
import React from "react";

const AppointmentDate = ({ date }) => {
  return (
    <div>
      <h4 className="text-primary text-2xl text-center mt-10 font-bold">
        Available Appointment on {format(date, "PP")}{" "}
      </h4>
    </div>
  );
};

export default AppointmentDate;
