import React from "react";

const Card = ({ img, cardTitle, bg }) => {
  return (
    <div className="">
      <div className={` py-10 card lg:card-side to-primary shadow-xl ${bg}`}>
        <figure className="pl-3">
          <img src={img} alt="Album"></img>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{cardTitle}</h2>
          <p className="text-white">
            Click the button to listen on Spotiwhy app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
