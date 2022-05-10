import React from "react";
import pic from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <section
      style={{ background: `url(${bg})` }}
      className="hero min-h-screen px-16"
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={pic} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className=" text-white btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
