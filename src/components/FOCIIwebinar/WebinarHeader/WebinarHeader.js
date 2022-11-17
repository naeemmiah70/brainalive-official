import React from "react";
import { Link } from "react-router-dom";
import "./WebinarHeader.css";
import "../../FOCIIce/FOCIISDK/FOCCISDK.css";
import "../../FOCIIce/FOCIIceHeader/FOCIIceHeader.css";
import Video from "../../../resource/webinar.mp4";

const WebinarHeader = () => {
  return (
    <section className="focii-ce-header">
      <div className="ce-text-position d-flex justify-content-center">
        <div className="text-center">
          <h3 className="ce-video-title">
            Know Your Audience Interest And Engagement In Webinars And Events Of
            Any Size
          </h3>
          <p className="ce-video-description">
            FOCII reports live engagement level of your audience and helps you
            decode audience dropouts like never before.
          </p>
          <Link to="/contact">
            <button className="get-free-demo-btn">Get Free Demo</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <video className="ce-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default WebinarHeader;
