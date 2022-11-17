import React, { useEffect } from "react";
import "./FeedbackModal.css";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Hate from "../../../resource/feedback/1.Bored-wasteOfTime.svg";
import Dislike from "../../../resource/feedback/2.Clueless.svg";
import Neutral from "../../../resource/feedback/3.Its Okay.svg";
import Like from "../../../resource/feedback/4.ItsGood.svg";
import Love from "../../../resource/feedback/5.Awesome.svg";

const customStyles = {
  overlay: {
    backgroundColor: "none",
  },
};
Modal.setAppElement("#root");

const FeedbackModal = ({
  feedbackModalIsOpen,
  feedbackCloseModal,
  feedbackOpenModal,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    setActiveSendBtn(false);
  };

  const [openTextarea, setOpenTextarea] = useState(false);
  const [activeSendBtn, setActiveSendBtn] = useState(false);
  useEffect(() => {
    setOpenTextarea(false);
    setActiveSendBtn(false);
  }, [feedbackCloseModal]);

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);
  const ActiveSendBtn = () => {
    console.log("hi");
    setActiveSendBtn(true);
  };
  return (
    <div className="">
      {!feedbackModalIsOpen && (
        <div onClick={feedbackOpenModal} className="sidebar-feeback d-flex">
          <p className="text-white feedback-text">Feedback</p>
        </div>
      )}
      <div>
        <Modal
          className="feedback-modal-position"
          isOpen={feedbackModalIsOpen}
          onRequestClose={feedbackCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div data-aos="fade-left">
            <div>
              {openTextarea ? (
                <div>
                  <span
                    onClick={feedbackCloseModal}
                    className="d-flex justify-content-end"
                  >
                    {" "}
                    <FontAwesomeIcon
                      onClick={() => setOpenTextarea(false)}
                      className="close-side-feedback"
                      icon={faXmark}
                    />
                  </span>
                </div>
              ) : (
                <p className="feedback-header">
                  How would you rate your experience?
                </p>
              )}
            </div>
            <span
              onClick={feedbackCloseModal}
              className="d-flex justify-content-end"
            >
              {" "}
              <FontAwesomeIcon className="feedback-close-btn" icon={faXmark} />
            </span>
            <div
              className={`reaction-div ${
                !openTextarea && "reaction-bottom-space"
              } ${openTextarea && "reaction-top-space"} d-flex`}
            >
              <button
                onClick={() => setOpenTextarea(true)}
                className="react emoji-toltip"
              >
                <img src={Hate} alt="" className="emoji" />

                <p className="emoji-toltip-text">Hate</p>
              </button>
              <button
                onClick={() => setOpenTextarea(true)}
                className="react emoji-toltip"
              >
                <img src={Dislike} className="emoji" alt="" />
                <p className="emoji-toltip-text">Dislike</p>
              </button>
              <button
                onClick={() => setOpenTextarea(true)}
                className="react emoji-toltip"
              >
                <img src={Neutral} alt="" className="emoji" />
                <p className="emoji-toltip-text">Neutral</p>
              </button>
              <button
                onClick={() => setOpenTextarea(true)}
                className="react emoji-toltip"
              >
                <img src={Like} alt="" className="emoji" />
                <p className="emoji-toltip-text">Like</p>
              </button>
              <button
                onClick={() => setOpenTextarea(true)}
                className="react emoji-toltip"
              >
                <img src={Love} alt="" className="emoji" />
                <p className="emoji-toltip-text ">Love</p>
              </button>
            </div>
            <div>
              {openTextarea ? (
                <form onSubmit={handleSubmit(onSubmit)} action="">
                  <div>
                    <textarea
                      className="feedback-text-area"
                      placeholder="Tell us your experience"
                      name=""
                      id=""
                      cols="36"
                      rows="7"
                      {...register("feedback")}
                      onChange={ActiveSendBtn}
                    ></textarea>
                  </div>

                  <div>
                    <strong className="hand-up-text">
                      Heads up! This is for feedback only.
                    </strong>
                    <p className="need-help-text">
                      Need help? Drop us a message at our{" "}
                      <Link to="/contact">Contact Us</Link> page.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className={`feedback-btn ${
                        activeSendBtn && "send-btn-active"
                      }`}
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default FeedbackModal;
