import React, { useState } from "react";
import "./AbhaScienceHeader.css";
import Modal from "react-modal";
import popupVideo from "../../../resource/abha/Brainalive.mp4";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: 0,
  },
  overlay: {
    backgroundColor: "rgb(28 28 28 / 59%)",
  },
};
Modal.setAppElement("#root");

const AbhaScienceHeader = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div class="global-overlay ">
        <div class="overlay">
          <div class="overlay-wrapper">
            <div class="overlay-inner zoom-onload cover-background"></div>
            <div class="overlay-inner background-dark-5 opacity-30"></div>
            <div class="overlay-shape background-dark-5 opacity-40"></div>
          </div>
        </div>
      </div>
      <div id="home" class="ed-homeblock">
        <div class="homeblock-container">
          <section class="section fullscreen-element sm-pt-180 sm-pb-180">
            <div class="table-container">
              <div class="table-content">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-6 col-lg-offset-1 col-md-12 overlay-contents">
                      <p class="lead">
                        Our active stroke therapy involves the user's brain
                        during the therapy to help achieve a better and quicker
                        recovery
                      </p>
                      <button
                        onClick={openModal}
                        class="abha-science-popup-btn"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
            <div className="d-flex justify-content-center">
              <div class="popup-content">
                <div>
                  <div
                    onClick={closeModal}
                    class="close-btn text-end text-white"
                  >
                    &#10006;
                  </div>
                  <video width="100%" loop autoPlay controls>
                    <source
                      data-src={popupVideo}
                      data-mobile-src={popupVideo}
                      type="video/mp4"
                      src={popupVideo}
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AbhaScienceHeader;
