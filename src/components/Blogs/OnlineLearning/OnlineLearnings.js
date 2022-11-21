import React from "react";
import "../LearnAnalytics/LearnAnalytics.css";
import "../../Blog/RecentBlog/RecentBlog.css";
import "../../Blog/Blogs/Blogs.css";
import "../OnlineLearning/OnlineLearning.css";
import facebook from "../../../resource/icon/facebook.png";
import twitter from "../../../resource/icon/twitter.png";
import linkedIn from "../../../resource/icon/linkedIn.png";
import copy from "../../../resource/icon/copy .png";
import RecentReleases from "../../Blog/RecentReleases/RecentReleases";
import onlinLearning from "../../../resource/blogs/online-learning.jpg";
import eyeTracking from "../../../resource/blogs/eye-tracking.jpg";
import '../../Blog/PopularArticles/PopularArticles.css'

const OnlineLearnings = () => {
  return (
    <>
      {/* Header */}
      <section className="online-learning-bg"></section>
      <div>
        <div className="blog-hero-text-bg d-flex justify-content-center ">
          <div className="blog-header-content d-flex align-items-center">
            <div className="row ">
              <div className="col-md-4">
                <img className="blog-header-image" src={onlinLearning} alt="" />
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
                      Can online learning be made a fitting alternative to
                      traditional classroom?
                    </h1>
                  </div>
                  <section>
                    <h6 className="share-via mt-3">Share Via:</h6>
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
                            "https://twitter.com/intent/tweet?text=Can+online+learning+be+made+a+fitting+alternative+to+traditional+classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F",
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
                            "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F",
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

                      <div className="d-flex m-2 more-share-div">
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
              <div className="col-lg-9 my-5 ">
                <div className="d-flex justify-content-center blog-spacing-right">
                  <div className="focci-sdk-container">
                    <div>
                      <img
                        className="blog-big-img"
                        src={onlinLearning}
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
                          src={eyeTracking}
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ position: "sticky", top: "10px" }}
                className="col-lg-3 my-5"
              >
                <RecentReleases></RecentReleases>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineLearnings;
