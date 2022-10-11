import React from "react";
import { Link } from "react-router-dom";
import "./AbhaHeader.css";

const AbhaHeader = () => {
  return (
    <section className="abha-header row d-flex align-items-center">
      <div class="bg-box col-xxl-4 col-xl-5 col-lg-6 col-md-8">
        <div class="caption-box text-center">
          <h1>
            <span>The neurological rehabilitation of tomorrow</span>
          </h1>
        </div>

        <Link to="/abha_science">
          <button class="abha-header-btn">Know More</button>
        </Link>
      </div>
    </section>
  );
};

export default AbhaHeader;
