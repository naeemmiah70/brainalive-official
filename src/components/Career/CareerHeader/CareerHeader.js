import React from "react";
import "./CareerHeader.css";

const CareerHeader = () => {
  return (
    <section className="Career-header-bg">
      <div className="Career-header-text row">
        <div className="text-center col-lg-5 col-md-7 p-3">
          <h1 className="we-are-hiring">WE ARE HIRING!</h1>
          <p className="header-hiring-details">
            Excited About Opportunities In Computer Vision, Machine Learning And
            Embedded Domains? We Will Be Glad To Reach You!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerHeader;
