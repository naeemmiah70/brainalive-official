import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import application1 from "../../../resource/application-1.jpg";
import application2 from "../../../resource/application-2.jpg";
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
            <div className="col-md-5 d-flex justify-content-center px-2 py-3 hovered-div">
              <Link to={data.link} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    backgroundImage: `url(${data.imgURL})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="solution-div-bg"
                >
                  <div className="card-text d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h3 className="text-white mt-2">{data.title}</h3>
                      <p className="text-white hide-card-text">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
