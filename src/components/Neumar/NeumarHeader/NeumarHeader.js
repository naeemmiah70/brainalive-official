import React, { useState } from "react";
import "./NeumarHeader.css";
import Video from "../../../resource/eye-m4v.mp4";
import popupVideo from "../../../resource/FOCII.mp4";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "400px",
    background: "none",
    border: 0,
  },
  overlay: {
    backgroundColor: "rgb(28 28 28 / 59%)",
  },
};
Modal.setAppElement("#root");

const NeumarHeader = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="focii-ce-header">
      <div
        id={`${modalIsOpen && "zIndex"}`}
        className="ce-text-position d-flex justify-content-center"
      >
        <div className="text-center">
          <h3 className="ce-video-title">
            Capture Your Consumer Behavior Where And How It Occurs In Real World
          </h3>
          <p className="ce-video-description mt-3">
            Integrated webcam based online eye tracking solution to better
            understand your consumer experience through unbiased data and
            actionable insights
          </p>
          <div className="d-flex justify-content-center mt-5">
            <div class="neumar-header-btn hovertext-container">
              <p class="hovertext-p1">Try it for free</p>
              <p class="hovertext-p2" style={{ color: "#fff" }}>
                Coming Soon
              </p>
            </div>

            <button onClick={openModal} className="neumar-know-more-btn">
              Know More
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div class="video-popup">
            <div class="popup-bg"></div>
            <div class="popup-content">
              <div class="close-btn text-end text-white">&#10006;</div>
              <video style={{filter: "grayscale(100%)"}} width="100%" loop autoPlay muted>
                <source
                  data-src={popupVideo}
                  data-mobile-src={popupVideo}
                  type="video/mp4"
                  src={popupVideo}
                />
              </video>
            </div>
          </div>
        </Modal>
      </div>
      <div className="row">
        <video className="ce-video" autoPlay loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default NeumarHeader;
