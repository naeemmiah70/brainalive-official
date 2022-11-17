import React from "react";
import "./FociiShopperHeader.css";
import Video from "../../../resource/shopper-vid2.mp4";
import '../../FOCIIce/FOCIIceHeader/FOCIIceHeader.css'

const FociiShopperHeader = () => {
  return (
    <section className="focii-ce-header">
      <div className="ce-text-position d-flex justify-content-center">
        <div className="text-center">
          <h3 className="shopper-video-title">Shopper Insights</h3>
          <p className="ce-video-description">
            The Shoppers attention doesn't grows itself, we help you grab it
          </p>
          <div className="d-flex justify-content-center">
            <div class="neumar-header-btn hovertext-container">
              <p class="hovertext-p1">Try it for free</p>
              <p class="hovertext-p2" style={{ color: "#fff" }}>
                Coming Soon
              </p>
            </div>
          </div>
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

export default FociiShopperHeader;
