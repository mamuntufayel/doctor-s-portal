import React from "react";
import background from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section style={{ background: `url(${background})` }} className="my-10">
      <div className=" text-center mt-8">
        <h5 className="text-secondary text-sm font-bold">Contact Us</h5>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <div className="w-2/5 mx-auto">
        <form className=" flex flex-col">
          <input
            className=" my-3 pl-3 rounded"
            type="text"
            name="email address"
            id=""
            placeholder="Email Address"
          />
          <input
            className="my-3 pl-3 rounded"
            type="text"
            name="subject"
            id=""
            placeholder="subject"
          />
          <textarea
            className=" my-3 pl-3 rounded"
            type="text"
            name="message"
            id=""
            placeholder="Message"
          />
          <button
            className=" mb-3 w-2/4 mx-auto btn btn-primary text-white "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
