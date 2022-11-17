import React from "react";
import RecentBlog from "../../Blog/RecentBlog/RecentBlog";
import "./OnlineLearning.css";
import { useState } from "react";
import Modal from "react-modal";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import FeedbackModal from "../../Blog/FeedbackModal/FeedbackModal";
import { Link } from "react-router-dom";

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
};
Modal.setAppElement("#root");

const OnlineLearnings = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const componentRef = useRef();

  const [feedbackModalIsOpen, setFeedbackIsOpen] = useState(false);
  function feedbackOpenModal() {
    setFeedbackIsOpen(true);
  }
  function feedbackCloseModal() {
    setFeedbackIsOpen(false);
  }
  return (
    <>
      {/* Header */}
      <section className="online-learning-bg">
        <div className="blog-hero-text-bg d-flex justify-content-center align-items-center">
          <h1 className="blog-header-center-text text-center">
            Can online learning be made a fitting <br className="break-none" />{" "}
            alternative to traditional classroom?
          </h1>
        </div>
      </section>

      <section ref={componentRef} className="blog-bg">
        <div className="blog-container ">
          <div className="container">
            <div className="row">
              {/* Main Blog */}
              <div className="col-lg-9 my-5 ">
                <div className="d-flex justify-content-center blog-spacing-right">
                  <div className="focci-sdk-container">
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src="https://braina.live/blog/wp-content/uploads/2021/09/Downloader.la-6110ee948b1fc.jpg"
                        alt=""
                      />
                      <h3
                        style={{
                          color: "#fff",
                          fontFamily: "Galano-Grotesque",
                          marginTop: "15px",
                          fontWeight: "normal",
                        }}
                      >
                        Are you one among the many trying to accustom to the new
                        normal?
                      </h3>
                      <p className="main-blog-text">
                        The new normal in education is the ever increasing usage
                        of online learning tools. Online learning stands to
                        transform the concept of education with better content,
                        improved accessibility, and affordability while meeting
                        different learning needs.
                      </p>
                      <p className="main-blog-text">
                        However, online learning has its own set of drawbacks
                        preventing it from becoming a fitting alternative to
                        traditional classroom. In a typical classroom a teacher
                        has the ability to detect and regain learner attention
                        through various pedagogical approaches, whereas in
                        online learning the learner presence is limited to a
                        small screen with smaller windows making it highly
                        tiring to focus on individual learner faces. Human’s
                        intent and feelings are majorly conveyed through
                        non-verbal signals such as facial expressions, the tone
                        and pitch of the voice, postures and gestures. Unlike
                        that of a face-to-face interaction, where these cues are
                        processed automatically, in online learning, it is hard
                        for the speaker to grasp the non-verbal cues of the
                        listeners. Teachers remark that they fail to get the
                        reassurance that the students have really understood the
                        content. They further remark that due to the increased
                        efforts in paying more attention to the learner cues,
                        the planned lesson delivery also gets affected.
                      </p>
                      <p className="main-blog-text">
                        Letting the students switch on the webcam is not a
                        common occurrence given the student privacy and internet
                        issues. This has made it almost impossible to get
                        feedback on content relevance and engagement.
                      </p>
                    </div>
                    <div>
                      <div className="d-flex justify-content-center">
                        <img
                          className="img-fluid blog-big-img"
                          src="https://braina.live/blog/wp-content/uploads/2021/09/1st-1024x576.jpg"
                          alt=""
                        />
                      </div>

                      <p className="main-blog-text">
                        <strong
                          style={{ color: "#C21E7E", fontWeight: "bold" }}
                        >
                          BrainAlive’s FOCII
                        </strong>{" "}
                        is a webcam based real-time learner engagement feedback
                        system. FOCII’s revolutionary feedback makes online
                        learning as convenient as that of classroom learning
                        while still employing all benefits of online learning.
                        FOCII’s advanced algorithms decode user behavior through
                        webcam and convert it into useful feedback on learner’s
                        conduct and cognitive engagement. These actionable
                        insights enable the teachers to customize the lecture
                        content and delivery to better engage the learners and
                        maximize learning outcomes. FOCII’s state of the art
                        algorithms uses learners’ eye movements, pupil gaze
                        fixations, aversions, diversion, facial features, and
                        postures to gauge the engagement of the users derived
                        from principles of neuroscience and psychology.
                      </p>
                      <p className="main-blog-text">
                        FOCII also uses a non-invasive BCI headset to provide
                        additional robust feedback on the cognitive engagement
                        of the users. BCI feedback helps distinguish average
                        content from highly engaging content, thus giving direct
                        feedback on the relevance of the content for the target
                        learners.
                      </p>
                      <p className="main-blog-text">
                        To ensure maximum learner privacy all necessary
                        computations are conducted within the student’s system
                        environment while providing only actionable insights to
                        teachers. This further eliminates the need for streaming
                        the user video thus reducing internet connectivity
                        issues.
                      </p>
                      <p className="main-blog-text">
                        FOCII’s engagement analytics is not limited to just the
                        feedback from learner behavior but from the material
                        itself in terms of how the content is designed and
                        presented. It uses Natural Language Processing
                        algorithms to analyze the audio, text, and video course
                        materials and provide feedback on the delivery
                        appropriateness and engagement of the content. The
                        feedback helps teachers create and deliver the content
                        in a way that maximizes the learner’s interest and
                        outcomes.
                      </p>
                      {/* Share Via: */}
                      <section>
                        <h6 className="share-via mt-4">Share Via:</h6>
                        <div className="d-flex flex-wrap mt-3">
                          <a
                            className="d-flex my-2 text-decoration-none"
                            onClick={() =>
                              window.open(
                                "https://web.facebook.com/sharer.php?t=Can%20online%20learning%20be%20made%20a%20fitting%20alternative%20to%20traditional%20classroom%3F&u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F&_rdc=1&_rdr",
                                "Popup",
                                "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                              )
                            }
                          >
                            <div className="facebook-share-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-facebook bottom-social-icon "
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                              </svg>
                            </div>
                            <div className="fb-share-text-bg">
                              <p className="facebook-text px-3">FaceBook</p>
                            </div>
                          </a>
                          <a
                            className="d-flex m-2 text-decoration-none"
                            onClick={() =>
                              window.open(
                                "https://twitter.com/intent/tweet?text=Can+online+learning+be+made+a+fitting+alternative+to+traditional+classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F",
                                "Popup",
                                "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                              )
                            }
                          >
                            <div className="twitter-share-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-twitter bottom-social-icon"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                              </svg>
                            </div>
                            <div className="twitter-share-text-bg">
                              <p className="facebook-text px-3">Twitter</p>
                            </div>
                          </a>
                          <a
                            className="d-flex my-2 text-decoration-none"
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F",
                                "Popup",
                                "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                              )
                            }
                          >
                            <div className="linkedIn-share-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-linkedin bottom-social-icon"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                              </svg>
                            </div>
                            <div className="linkedIn-share-text-bg">
                              <p className="facebook-text px-3">LinkedIn</p>
                            </div>
                          </a>

                          <div
                            onClick={openModal}
                            className="d-flex m-2 more-share-div"
                          >
                            <div className="Plus-share-icon">
                              <a href="/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-plus-lg bottom-social-icon text-dark"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="plus-share-text-bg">
                              <p className="facebook-text px-3 text-dark">
                                More
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{ marginTop: "3rem" }}
                          className="text-white"
                        >
                          <div className="d-flex">
                            <p style={{ fontWeight: 300 }}>Category</p>:{" "}
                            <Link to="/blog" className="blog-category-btn">BLOG</Link>
                          </div>
                          <div className="d-flex">
                            <p style={{ fontWeight: 300 }}>Tags</p>:{" "}
                            <div className="tag-texts">
                              <Link
                                to="/blog/tag/new-normal"
                                className="tag-texts"
                              >
                                New Normal
                              </Link>{" "}
                              <Link
                                to="/blog/tag/online-teaching"
                                className="tag-texts"
                              >
                                Online Teaching
                              </Link>{" "}
                              <Link
                                to="/blog/tag/traditional-classroom"
                                className="tag-texts"
                              >
                                Traditional Classroom
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            border: "1px solid white",
                            marginTop: "10px",
                            opacity: "0.8",
                          }}
                        ></div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 my-5">
                <RecentBlog />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sidebar */}
      <section>
        <div>
          <div className="sidebar-width1 px-2">
            <div>
              <a
                className="facebook-icon-div toltip"
                onClick={() =>
                  window.open(
                    "https://web.facebook.com/sharer.php?t=Can%20online%20learning%20be%20made%20a%20fitting%20alternative%20to%20traditional%20classroom%3F&u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F&_rdc=1&_rdr",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-facebook sidebar-social-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span className="tooltiptext">Facebook</span>
              </a>
              <a
                className="twitter-icon-div toltip"
                onClick={() =>
                  window.open(
                    "https://twitter.com/intent/tweet?text=Can+online+learning+be+made+a+fitting+alternative+to+traditional+classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter sidebar-social-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                <span className="tooltiptext">Twitter</span>
              </a>
              <a
                className="linkedIn-icon-div toltip"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin sidebar-social-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <span className="tooltiptext">LinkedIn</span>
              </a>

              <div onClick={openModal} className="plus-icon-div toltip">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-lg sidebar-social-icon text-dark"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                  <span className="tooltiptext">More Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FeedbackModal
            feedbackModalIsOpen={feedbackModalIsOpen}
            feedbackCloseModal={feedbackCloseModal}
            feedbackOpenModal={feedbackOpenModal}
          ></FeedbackModal>
        </div>
      </section>
      <section>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <section className="sharing-modal">
            <div className="d-flex justify-content-between modal-header-border">
              <h6 className="modal-share-heading">Share Via:</h6>
              <p onClick={closeModal}>
                <FontAwesomeIcon className="close-btn" icon={faXmark} />
              </p>
            </div>
            <div className="d-flex flex-wrap">
              <a
                className="d-flex text-decoration-none m-2"
                onClick={() =>
                  window.open(
                    "https://web.facebook.com/sharer.php?t=Can%20online%20learning%20be%20made%20a%20fitting%20alternative%20to%20traditional%20classroom%3F&u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F&_rdc=1&_rdr",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  )
                }
              >
                <div className="modal-facebook-share-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-facebook modal-bottom-social-icon "
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </div>
                <div className="modal-fb-share-text-bg">
                  <p className="modal-facebook-text px-3">FaceBook</p>
                </div>
              </a>
              <a
                className="d-flex m-2 text-decoration-none"
                onClick={() =>
                  window.open(
                    "https://twitter.com/intent/tweet?text=Can+online+learning+be+made+a+fitting+alternative+to+traditional+classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  )
                }
              >
                <div className="modal-twitter-share-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-twitter modal-bottom-social-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </div>
                <div className="modal-twitter-share-text-bg">
                  <p className="modal-facebook-text px-3">Twitter</p>
                </div>
              </a>
              <a
                className="d-flex text-decoration-none m-2"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  )
                }
              >
                <div className="modal-linkedIn-share-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin modal-bottom-social-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div>
                <div className="modal-linkedIn-share-text-bg">
                  <p className="modal-facebook-text px-3">LinkedIn</p>
                </div>
              </a>
              <a
                className="d-flex text-decoration-none m-2"
                onClick={() =>
                  window.open(
                    "https://mix.com/add?url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fonline-teaching-just-got-easier%2F",
                    "Popup",
                    "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                  )
                }
              >
                <div className="modal-mix-share-icon">
                  <svg
                    class="ss-svg-icon modal-bottom-social-icon"
                    aria-hidden="true"
                    role="img"
                    fill="currentColor"
                    focusable="false"
                    width="28"
                    height="32"
                    viewBox="0 0 28 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 4v21.806c0 3.512 5.5 3.631 5.5 0v-14.912c0.494-3.306 5.5-3.15 5.5 0.406v10.956c0 3.619 6 3.625 6 0v-7.256c0.331-3.419 5.5-3.281 5.5 0.269v1.487c0 3.744 5.5 3.538 5.5 0v-12.756h-28z"></path>
                  </svg>
                </div>
                <div className="modal-mix-share-text-bg">
                  <p className="modal-facebook-text px-3">Mix</p>
                </div>
              </a>
              <a
                className="d-flex text-decoration-none m-2"
                href="mailto:?body=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fonline-teaching-just-got-easier%2F&amp;subject=Online%20teaching%20just%20got%20easier%21"
              >
                <div className="modal-others-share-icon">
                  <svg
                    class="ss-svg-icon modal-bottom-social-icon"
                    aria-hidden="true"
                    role="img"
                    fill="currentColor"
                    focusable="false"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32 12.964v14.179c0 1.571-1.286 2.857-2.857 2.857h-26.286c-1.571 0-2.857-1.286-2.857-2.857v-14.179c0.536 0.589 1.143 1.107 1.804 1.554 2.964 2.018 5.964 4.036 8.875 6.161 1.5 1.107 3.357 2.464 5.304 2.464h0.036c1.946 0 3.804-1.357 5.304-2.464 2.911-2.107 5.911-4.143 8.893-6.161 0.643-0.446 1.25-0.964 1.786-1.554zM32 7.714c0 2-1.482 3.804-3.054 4.893-2.786 1.929-5.589 3.857-8.357 5.804-1.161 0.804-3.125 2.446-4.571 2.446h-0.036c-1.446 0-3.411-1.643-4.571-2.446-2.768-1.946-5.571-3.875-8.339-5.804-1.268-0.857-3.071-2.875-3.071-4.5 0-1.75 0.946-3.25 2.857-3.25h26.286c1.554 0 2.857 1.286 2.857 2.857z"></path>
                  </svg>
                </div>
                <div className="modal-others-share-text-bg">
                  <p className="modal-facebook-text px-3">Email</p>
                </div>
              </a>

              <ReactToPrint
                trigger={() => (
                  <button style={{ border: "0", background: "none" }}>
                    {" "}
                    <div className="d-flex">
                      <div className="modal-others-share-icon">
                        <svg
                          class="ss-svg-icon modal-bottom-social-icon"
                          aria-hidden="true"
                          role="img"
                          fill="currentColor"
                          focusable="false"
                          width="30"
                          height="32"
                          viewBox="0 0 30 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.857 27.714h16v-4.571h-16v4.571zM6.857 16.286h16v-6.857h-2.857c-0.946 0-1.714-0.768-1.714-1.714v-2.857h-11.429v11.429zM27.429 17.429c0-0.625-0.518-1.143-1.143-1.143s-1.143 0.518-1.143 1.143 0.518 1.143 1.143 1.143 1.143-0.518 1.143-1.143zM29.714 17.429v7.429c0 0.304-0.268 0.571-0.571 0.571h-4v2.857c0 0.946-0.768 1.714-1.714 1.714h-17.143c-0.946 0-1.714-0.768-1.714-1.714v-2.857h-4c-0.304 0-0.571-0.268-0.571-0.571v-7.429c0-1.875 1.554-3.429 3.429-3.429h1.143v-9.714c0-0.946 0.768-1.714 1.714-1.714h12c0.946 0 2.25 0.536 2.929 1.214l2.714 2.714c0.679 0.679 1.214 1.982 1.214 2.929v4.571h1.143c1.875 0 3.429 1.554 3.429 3.429z"></path>
                        </svg>
                      </div>
                      <div className="modal-others-share-text-bg">
                        <p className="modal-facebook-text px-3 print-text">
                          Print
                        </p>
                      </div>
                    </div>
                  </button>
                )}
                content={() => componentRef.current}
              />

              <div
                className="d-flex  m-2"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://braina.live/blog/2021/09/03/can-online-learning-be-made-a-fitting-alternative-to-traditional-classroom/"
                  )
                }
              >
                <div className="modal-others-share-icon">
                  <svg
                    class="ss-svg-icon modal-bottom-social-icon"
                    aria-hidden="true"
                    role="img"
                    fill="currentColor"
                    focusable="false"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z"></path>
                  </svg>
                </div>
                <div className="modal-others-share-text-bg">
                  <p className="modal-facebook-text px-3">Copy Link</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <p className="snap-text">Powered by</p>
              <a
                href="https://socialsnap.com/?utm_source=WordPress&amp;utm_medium=link&amp;utm_campaign=inthewild"
                target="_blank"
              >
                <svg
                  class="ss-svg-icon snap-icon"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  width="30"
                  height="32"
                  viewBox="0 0 30 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.293 0.146l7.602 4.172c0.386 0.201 0.386 0.541 0 0.757l-16.688 9.147c-1.684 0.943-2.241 2.271-1.669 3.461 0 0.093 0 0.201-0.201 0.263-0.207 0.088-0.441 0.088-0.649 0l-10.399-5.702c-0.386-0.201-0.386-0.541 0-0.757l20.628-11.311c0.428-0.225 0.937-0.236 1.375-0.031zM7.892 31.854l-7.602-4.172c-0.386-0.201-0.386-0.541 0-0.757l16.688-9.147c1.684-0.943 2.241-2.271 1.669-3.461 0-0.093 0-0.201 0.201-0.263 0.207-0.088 0.442-0.088 0.649 0l10.399 5.702c0.386 0.201 0.386 0.541 0 0.757l-20.628 11.311c-0.428 0.225-0.937 0.237-1.375 0.031z"></path>
                </svg>
              </a>
              <p className="snap-text">Social Snap</p>
            </div>
          </section>
        </Modal>
      </section>
    </>
  );
};

export default OnlineLearnings;
