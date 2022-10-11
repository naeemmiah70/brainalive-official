import React from "react";
import { Link } from "react-router-dom";
import "./FociiEvents.css";

const FociiEvents = () => {
  const eventsData = [
    {
      id: 1,
      title: "FOCII AI for Webinars",
      description: "Know what works for your audience and deliver like a pro",
      imgURL: "https://braina.live/images/icon/focii1.png",
      link: "/focii_webinar",
    },
    {
      id: 2,
      title: "FOCII AI for Education",
      description:
        "Understand true engagement of students in real time in a frictionless manner.",
      imgURL: "https://braina.live/images/icon/focii2.png",
      link: "/focii_education",
    },
    {
      id: 3,
      title: "FOCII AI SDK",
      description:
        "Completely customisable engagement AI white label solution/API for Learning/Webinar/Meeting softwares",
      imgURL: "https://braina.live/images/icon/focii3.png",
      link: "/focii_ce",
    },
  ];
  return (
    <section className="focii-bg">
      <div className="container pt-3">
        <div className="row d-flex justify-content-between">
          {eventsData.map((data) => (
            <div className="col-md-3">
              <div className="text-center">
                <img src={data.imgURL} alt="" />
              </div>
              <div className="text-center">
                <h4 className="focii-event-title">{data.title}</h4>
                <p className="focii-event-description">{data.description}</p>
              </div>
              <div className="text-center">
                <Link to={data.link}>
                  <button className="learn-more-btn">Learn more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FociiEvents;
