import React from "react";
import RecentBlog from "../../Blog/RecentBlog/RecentBlog";
import "./OnlineTeaching.css";
import "../LearnAnalytics/LearnAnalytics.css";
import { useState } from "react";
import Modal from "react-modal";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import FeedbackModal from "../../Blog/FeedbackModal/FeedbackModal";
import { Link } from "react-router-dom";
import facebook from "../../../resource/icon/facebook.png";
import twitter from "../../../resource/icon/twitter.png";
import linkedIn from "../../../resource/icon/linkedIn.png";
import copy from "../../../resource/icon/copy .png";
import RecentReleases from "../../Blog/RecentReleases/RecentReleases";
import onlineTeaching from "../../../resource/blogs/online-teaching.jpg";
import asLearning from "../../../resource/blogs/as-learning.jpg";
import eyeTracking from "../../../resource/blogs/eye-tracking.jpg";
import engagingContent from "../../../resource/blogs/engaging-content.png";
import learnerEngagement from "../../../resource/blogs/learner-engagement.jpg";
import comparisionGraph from "../../../resource/blogs/comparision-graph.jpg";
import '../../Blog/PopularArticles/PopularArticles.css'

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

const OnlineTeaching = () => {
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
      <section className="online-teaching-bg"></section>
      <div>
        <div className="blog-hero-text-bg d-flex justify-content-center ">
          <div className="blog-header-content online-teaching-heading-content d-flex align-items-center">
            <div className="row ">
              <div className="col-md-4">
                <img
                  className="blog-header-image"
                  src={onlineTeaching}
                  alt=""
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div>
                  <div className="d-flex date-div mt-1">
                    <p style={{ color: "gray" }} className="date">
                      10th January
                    </p>{" "}
                    <strong style={{ color: "gray" }} className="popular-dot">
                      .
                    </strong>{" "}
                    <p style={{ color: "gray" }} className="date">
                      10 min read
                    </p>
                    <strong className="blog-bottom-dot">.</strong>{" "}
                  </div>
                  <div>
                    <button className="soap-color-btn">
                      <small> Online Learning</small>
                    </button>{" "}
                    <button className="robin-egg-blue-btn mx-2">
                      Traditional
                    </button>{" "}
                    <button className="champagne-color-btn">Classroom</button>
                  </div>
                  <div>
                    <h1 className="blog-top-header-title">
                      Online teaching just got easier!
                    </h1>
                  </div>
                  <section>
                    <h6 className="share-via mt-3">Share Via:</h6>
                    <div className="d-flex flex-wrap mt-3">
                      <a
                        className="d-flex my-2 text-decoration-none"
                        onClick={() =>
                          window.open(
                            "https://web.facebook.com/sharer.php?t=Online%20teaching%20just%20got%20easier!&u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fonline-teaching-just-got-easier%2F&_rdc=1&_rdr",
                            "Popup",
                            "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                          )
                        }
                      >
                        <div className="fb-share-text-bg">
                          <p className="facebook-text px-3">FaceBook</p>
                        </div>
                        <div className="facebook-share-icon">
                          <img src={facebook} alt="" />
                        </div>
                      </a>
                      <a
                        className="d-flex m-2 text-decoration-none"
                        onClick={() =>
                          window.open(
                            "https://twitter.com/intent/tweet?text=Online+teaching+just+got+easier%21&url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fonline-teaching-just-got-easier%2F",
                            "Popup",
                            "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                          )
                        }
                      >
                        <div className="twitter-share-text-bg">
                          <p className="facebook-text px-3">Twitter</p>
                        </div>
                        <div className="twitter-share-icon">
                          <img src={twitter} alt="" />
                        </div>
                      </a>
                      <a
                        className="d-flex my-2 text-decoration-none"
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fonline-teaching-just-got-easier%2F",
                            "Popup",
                            "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                          )
                        }
                      >
                        <div className="linkedIn-share-text-bg">
                          <p className="facebook-text px-3">LinkedIn</p>
                        </div>
                        <div className="linkedIn-share-icon">
                          <img src={linkedIn} alt="" />
                        </div>
                      </a>

                      <div
                        onClick={() => navigator.clipboard.writeText("")}
                        className="d-flex m-2 more-share-div"
                      >
                        <div className="plus-share-text-bg">
                          <p className="copy-text px-3">Copy</p>
                        </div>
                        <div className="Plus-share-icon">
                          <img src={copy} alt="" />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="blog-background">
        <div className="blog-container ">
          <div className="container">
            <div className="row">
              {/* Main Blog */}
              <div className="col-lg-9 my-5">
                <div className="d-flex justify-content-center blog-spacing-right">
                  <div className="focci-sdk-container">
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src={asLearning}
                        alt=""
                      />
                      <p className="main-blog-text">
                        As learning becomes increasingly online, the more
                        challenging it becomes to deliver engaging, high quality
                        and impactful education for students. While attention
                        lapses have been a regular occurrence in the traditional
                        classroom, it has been found to occur with even greater
                        frequency in online learning, where learners are prone
                        to digital multitasking.
                      </p>
                      <p className="main-blog-text">
                        In a typical classroom a teacher has the ability to
                        detect and regain learner attention through various
                        pedagogical approaches and thus gets the reassurance
                        that the students have really understood the content.
                        But the absence of any feedback on learner engagement in
                        online learning has kept the teachers in the dark.
                      </p>
                      <p className="main-blog-text">
                        While the education market has been a driver of growth
                        for tech giants, it has almost unanimously been
                        dissatisfied by features that limit learner feedback and
                        inhibit reproduction of the best of classroom learning
                        experiences.
                      </p>
                    </div>
                    <div>
                      <div className="d-flex justify-content-center">
                        <img
                          className="img-fluid blog-big-img"
                          src={eyeTracking}
                          alt=""
                        />
                      </div>

                      <p className="main-blog-text">
                        BrainAlive’s FOCII is a comprehensive feedback solution
                        that provides the teacher with the all necessary
                        feedback on content engagement and learner engagement.
                        It uses state of the art machine learning algorithms to
                        report on the content relevance and engagement for the
                        target learners.
                      </p>
                    </div>
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src={engagingContent}
                        alt=""
                      />
                      <h5 className="main-blog-color-heading">
                        Content Engagement
                      </h5>
                      <p className="main-blog-text">
                        The successful performance of a content depends on how
                        well the resource is designed and delivered. Equally
                        important is the relevance of the content to the target
                        audience. FOCII’s algorithms assess the verbal and non
                        verbal components of the video to report the design and
                        delivery appropriateness of content. Further, it also
                        analyses learner response in real time to map the
                        content relevance and thus the overall engagement level
                        of the content.
                      </p>
                    </div>
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src={learnerEngagement}
                        alt=""
                      />
                      <h5 className="main-blog-color-heading">
                        Learner engagement
                      </h5>
                      <p className="main-blog-text">
                        FOCII’s webcam based real-time learner engagement
                        feedback system is designed to help facilitate and
                        enhance staff – led live and blended instruction.
                        FOCII’s advanced algorithms decodes user behavior
                        through webcam and converts it into useful feedback on
                        learner’s conduct and cognitive engagement. Conductive
                        engagement feedback provides the information on how much
                        adherence the learner exhibited while remotely engaging
                        with the content. Just like that in a traditional
                        classroom where the teacher gets the feedback on student
                        interest through observing their posture, response
                        behavior etc., in FOCII’s environment as well the
                        teacher gets feedback on learner presence, their eye
                        movements, facial response and more.
                      </p>
                    </div>
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src={comparisionGraph}
                        alt=""
                      />

                      <p className="main-blog-text">
                        Cognitive engagement feedback collected through pupil
                        fixation, aversions and divergence patterns provide
                        information working memory utilizations while engaging
                        in learning tasks.
                      </p>
                      <p className="main-blog-text">
                        For more advanced insights and analytics, FOCII also
                        collects BCI data in real time to provide feedback on
                        the user’s mental engagement with the content. Highly
                        engaging resources have been found to excite the mental
                        state of the users resulting in elevated intent and
                        improved learning outcomes.
                      </p>
                      <p className="main-blog-text">
                        The feedback on learner conduct and cognitive engagement
                        is collectively used to let the teacher get a good
                        understanding on whether the learner has understood the
                        content or not.{" "}
                      </p>
                    </div>
                    {/* Share Via: */}
                    <section>
                      <div style={{ marginTop: "3rem" }} className="text-white">
                        <div className="d-flex">
                          <p style={{ fontWeight: 300 }}>Category</p>:{" "}
                          <Link to="/blog" className="blog-category-btn">
                            BLOG
                          </Link>
                        </div>
                        <div className="d-flex">
                          <p style={{ fontWeight: 300 }}>Tags</p>:{" "}
                          <div>
                            <Link
                              to="/blog/tag/content-engagement"
                              className="tag-texts"
                            >
                              Content Engagement
                            </Link>{" "}
                            <Link
                              to="/blog/tag/learner-engagement"
                              className="tag-texts"
                            >
                              Learner Engagement
                            </Link>{" "}
                            <Link
                              to="/blog/tag/online-teaching"
                              className="tag-texts"
                            >
                              Online Teaching
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
              <div className="col-lg-3 my-5">
                <RecentReleases />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineTeaching;
