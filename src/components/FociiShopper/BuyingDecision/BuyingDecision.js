import React from "react";
import "./BuyingDecision.css";
import shopping from "../../../resource/online-shopping.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BuyingDecision = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="focci-sdk-bg">
      <div className="focci-sdk-container">
        <div className="row">
          <div className="text-center py-5">
            <h2 data-aos="fade-up" className="buying-header">
              The Driving Factor Behind The Buying Decision
            </h2>
            <div className="bar"></div>
          </div>
          <div data-aos="fade-up" className="col-md-6 d-flex justify-content-center">
            <div  className="shopping-div-text">
              <p className="shopping-text">
                Understanding what influences a purchase decision is key to
                providing the most optimised buying journey for the customers.
              </p>
              <p className="shopping-text">
                {" "}
                Eye gaze tracking provides the ability to look at what each
                individual class of users are looking at comprising of product
                price,description, visuals, social proof, shipping information
                etc.{" "}
              </p>{" "}
              <p className="shopping-text">
                {" "}
                This helps identify the driving factor behind the buying
                decision. It is essential to provide this 'key info' to the
                customer at the right touch point during the buying journey.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={shopping} alt="" />
          </div>
        </div>

        <section className="row d-flex justify-content-center my-5">
          <div className="text-center py-5">
            <h2 data-aos="fade-up" className="buying-header">What Is Seen Is What Is Bought</h2>
            <div className="bar"></div>
          </div>
          <div data-aos="fade-up" className="col-md-9">
            <div className="seen-div">
              <p className="seen-text">
                In the existing digital paradigm, the product that is successful
                in capturing the user's attention has the highest sales. Hence ,
                getting that user's attention is the real game changer. Eye gaze
                data helps measure the user attention that your page elements
                capture among your customers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BuyingDecision;
