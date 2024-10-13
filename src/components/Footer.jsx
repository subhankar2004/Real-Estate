import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left side*/}
        <div className="flexColStart l-left">
          <img src="./assets/logo2.png" alt="logo2" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live them.
          </span>
        </div>

        {/*right side*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">006,Jagatpur,Cuttack,754021</span>
          <div className="f-menu flexStart">
            <span>Home</span>
            <span>Prperty</span>
            <span>Slot</span>
            <span>Appointment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
