import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings inneWidth flexCenter c-container">
        <img src="./assets/prologis.png" alt="company1" />
        <img src="./assets/tower.png" alt="company2" />
        <img src="./assets/equinix.png" alt="company3" />
        <img src="./assets/realty.png" alt="company4" />
      </div>
    </section>
  );
};

export default Companies;
