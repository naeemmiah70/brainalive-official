import React from "react";
import shopping1 from "../../../resource/shopping1.png";
import shopping2 from "../../../resource/shopping2.png";
import shopping3 from "../../../resource/shopping3.png";
import shopping4 from "../../../resource/shopping4.png";
import shopping5 from "../../../resource/shopping5.png";
import shopping6 from "../../../resource/shopping6.png";
import cart from "../../../resource/cart.png";
import laptop from "../../../resource/laptop.png";
import "./YourQuestions.css";

const YourQuestions = () => {
  return (
    <section className="focci-sdk-bg">
      <div className="focci-sdk-container">
        <div className="text-center py-5">
          <h2 className="buying-header">
            Get Unbiased Data To Answer Your Questions
          </h2>
          <div className="bar"></div>
        </div>

        <div className="row shp mt-40" data-aos="zoom-in">
          <div className="col-sm-5 pr-6">
            <div
              className="card-shadow data-card first-card mr-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <p>
                How are the price discounts performing for a defined product
                category
              </p>
              <img
                src={shopping1}
                className="img-fluid sticker"
                alt="shopping-icon"
              />
            </div>
            <div
              className="card-shadow data-card "
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1200"
            >
              <p>
                What consumers might wish to purchase before they even do so{" "}
              </p>
              <img
                src={shopping2}
                className="img-responsive data-card-2"
                alt="shopping-icon"
              />
            </div>
            <div
              className="card-shadow data-card ml-0"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1500"
            >
              <p>What grabs the immediate attention of the customer</p>
              <img
                src={shopping3}
                className="img-responsive data-card-3"
                alt="shopping-icon"
              />
            </div>
          </div>

          <div className="col-sm-2">
            <img
              src={cart}
              className="img-fluid shop-cart"
              alt="shopping-icon"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="2000"
            />
            <img
              src={laptop}
              style={{
                width: "300px",
                position: "relative",
                top: "100px",
                right: "50px",
              }}
              alt="shopping-icon"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="2000"
            />
          </div>
          <div className="col-sm-5 pl-6">
            <div
              className="card-shadow data-card ml-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <p>
                Whether the improved product description is getting the
                necessary user attention{" "}
              </p>
              <img
                src={shopping4}
                className="img-fluid data-card-4"
                alt="shopping-icon"
              />
            </div>
            <div
              className="card-shadow data-card "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1200"
            >
              <p>
                Are customers struggling to identify the necessary product
                information{" "}
              </p>
              <img
                src={shopping5}
                className="img-fluid data-card-5"
                alt="shopping-icon"
              />
            </div>
            <div
              className="card-shadow data-card mr-0"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1500"
            >
              <p>
                What was the customer's visual behavior journey before bouncing
                off
              </p>
              <img
                src={shopping6}
                className="img-fluid  data-card-6"
                alt="shopping-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourQuestions;
