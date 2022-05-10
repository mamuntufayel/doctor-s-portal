import React from "react";
import footerBg from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <section>
      <footer
        style={{ background: `url(${footerBg})`, backgroundSize: "cover" }}
        className=" p-10 text-accent"
      >
        <div className="footer">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <a className="link link-hover">Fluoride Treatment </a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teeth Whitening</a>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <a className="link link-hover">New York - 101010 Hudson</a>
          </div>
        </div>
        <div className="text-center">
          <p>Copyright © 2022</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
