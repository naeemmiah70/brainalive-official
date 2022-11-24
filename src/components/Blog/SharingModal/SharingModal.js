import React from "react";
import Modal from "react-modal";
import "../Sidebar/Sidebar.css";
import "./SharingModal.css";
import "../../Blogs/LearnAnalytics/LearnAnalytics.css";
import facebook from "../../../resource/icon/facebook.png";
import twitter from "../../../resource/icon/twitter.png";
import linkedIn from "../../../resource/icon/linkedIn.png";
import copy from "../../../resource/icon/copy .png";
import close from "../../../resource/icon/close.png";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "66%",
//     right: "auto",
//     bottom: "auto",
//     transform: "translate(-50%, -50%)",
//     background: "none",
//     border: 0,
//   },
//   overlay: {
//     backgroundColor: "none",
//   },
// };
Modal.setAppElement("#root");

const SharingModal = ({ modalIsOpen, closeModal, links, customStyles}) => {
  const { facebookShare, twitterShare, linkedInShare, copyLink } = links;
  console.log(facebookShare, twitterShare, linkedInShare, copyLink);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <section className="sharing-modal">
          <div className="d-flex justify-content-between">
            <h6 className="modal-share-via">Share Via:</h6>
            <img
              onClick={closeModal}
              className="modal-close-icon"
              src={close}
              alt=""
            />
          </div>

          <section>
            <div
              className="d-flex justify-content-between my-2 social-share"
              onClick={() =>
                window.open(
                  `${facebookShare}`,
                  "Popup",
                  "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                )
              }
            >
              <div className="">
                <p className="social-media-name">FaceBook</p>
              </div>
              <div className="">
                <img className="social-media-icon" src={facebook} alt="" />
              </div>
            </div>
            <div
              className="d-flex justify-content-between my-2 social-share"
              onClick={() =>
                window.open(
                  `${twitterShare}`,
                  "Popup",
                  "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                )
              }
            >
              <div>
                <p className="social-media-name">Twitter</p>
              </div>
              <div>
                <img className="social-media-icon" src={twitter} alt="" />
              </div>
            </div>
            <div
              className="d-flex justify-content-between my-2 social-share"
              onClick={() =>
                window.open(
                  `${linkedInShare}`,
                  "Popup",
                  "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                )
              }
            >
              <div>
                <p className="social-media-name">LinkedIn</p>
              </div>
              <div>
                <img className="social-media-icon" src={linkedIn} alt="" />
              </div>
            </div>

            <div
              onClick={() => navigator.clipboard.writeText(`${copyLink}`)}
              className="d-flex justify-content-between my-2 social-share copy-btn-bg"
            >
              <div>
                <p className="copy-text">Copy Link</p>
              </div>
              <div>
                <img className="social-media-icon " src={copy} alt="" />
              </div>
            </div>
          </section>
        </section>
      </Modal>
    </div>
  );
};

export default SharingModal;
