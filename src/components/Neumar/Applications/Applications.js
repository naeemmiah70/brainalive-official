import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import application1 from "../../../resource/application-1.jpg";
import application2 from "../../../resource/application-2.jpg";
import "../../Home/OurSolutions/OurSolutions.css";
import "./Applications.css";

const Applications = () => {
  const solutionsData = [
    {
      id: 1,
      title: "Shopper Insights",
      imgURL: application1,
      link: "/focii_shopper",
      description:
        "Understand what influences your online Shopper behavior and their decision making process. Optimize your user conversion rate and the experience through unbiased and insightful data.",
    },
    {
      id: 2,
      title: "Advertisement Insights",
      imgURL: application2,
      link: "",
      description: " Coming soon",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="container">
        <div className="mt-5">
          <h1 data-aos="fade-up" className="fw-bold text-center">
            Applications
          </h1>
          <div className="bar"></div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          {solutionsData.map((data) => (
            <div class="col-xs-12 col-sm-6 col-md-5">
              <div class="project-block item box-1">
                <Link to={data.link} aria-label="neumar">
                  <div class="image-box">
                    <figure class="image application-image">
                      <img src={data.imgURL} alt="student" />
                    </figure>

                    <div class="caption-box1">
                      <h3>{data.title}</h3>

                      <div class="text">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
