import React from "react";
import "./ShopperSolution.css";
import Video from "../../../resource/our-solution.m4v";

const ShopperSolution = () => {
  return (
    <div className="focci-sdk-bg">
      <div className="focci-sdk-container m-4">
        <div className="row shopper-bg p-2">
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div className="solution-description">
              <h2 className="buying-header">Our Solution</h2>
              <p className="shopping-text mt-5">
                FOCII provides you insights on consumer behavior by letting you
                experience your consumer journey through their eyes. Our
                solution contains data and insights to maximize the user
                conversion on your product page.
              </p>
            </div>
          </div>
          <div className="col-md-5 mt-3">
            <video className="w-100 solution-div" autoPlay loop muted>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="my-5 text-center">
          <h5 className="shopper-bottom-text">
            Do you want to improve your user conversion?
          </h5>
          <div className="d-flex justify-content-center ">
            <div class="neumar-header-btn hovertext-container shopper-bottom-btn focii_shopper-bottom-btn">
              <p class="hovertext-p1">Try it for free</p>
              <p class="hovertext-p2" style={{ color: "#fff" }}>
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopperSolution;
