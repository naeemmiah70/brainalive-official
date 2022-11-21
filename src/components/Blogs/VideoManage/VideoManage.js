import React from "react";
import "./VideoManage.css";
import "../LearnAnalytics/LearnAnalytics.css";
import facebook from "../../../resource/icon/facebook.png";
import twitter from "../../../resource/icon/twitter.png";
import linkedIn from "../../../resource/icon/linkedIn.png";
import copy from "../../../resource/icon/copy .png";
import RecentReleases from "../../Blog/RecentReleases/RecentReleases";
import videoManage from "../../../resource/blogs/video-management.jpg";
import intrinsic from "../../../resource/blogs/intrinsic.png";
import germane from "../../../resource/icon/mind.png";
import segmentation from "../../../resource/icon/self-aware.png";
import segmentation2 from "../../../resource/icon/e-learning.png";

const VideoManage = () => {
  return (
    <>
      {/* Header */}
      <section className="video-managing-bg"></section>
      <div>
        <div className="blog-hero-text-bg d-flex justify-content-center ">
          <div className="blog-header-content d-flex align-items-center">
            <div className="row ">
              <div className="col-md-4">
                <img className="blog-header-image" src={videoManage} alt="" />
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
                      Is your educational video effectively managing the
                      cognitive load of your viewers?
                    </h1>
                  </div>
                  <section>
                    <h6 className="share-via mt-3">Share Via:</h6>
                    <div className="d-flex flex-wrap mt-3">
                      <a
                        className="d-flex my-2 text-decoration-none"
                        onClick={() =>
                          window.open(
                            "https://web.facebook.com/sharer.php?t=Is%20your%20educational%20video%20effectively%20managing%20the%20cognitive%20load%20of%20your%20viewers%3F&u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F&_rdc=1&_rdr",
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
                            "https://twitter.com/intent/tweet?text=Is+your+educational+video+effectively+managing+the+cognitive+load+of+your+viewers%3F&url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F",
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
                            "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F",
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
        <div className="blog-container">
          <div className="container">
            <div className="row ">
              {/* Main Blog */}
              <div className="col-lg-9 mt-5">
                <div className="d-flex justify-content-center blog-spacing-right">
                  <div className="focci-sdk-container">
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src={videoManage}
                        alt=""
                      />

                      <p className="main-blog-text">
                        One of the primary considerations when constructing
                        educational materials, including video, is cognitive
                        load. Cognitive load theory states that not all the
                        information from sensory memory (i.e. what we see and
                        hear), is stored and processed in the working memory due
                        to its limited capacity. It is this limited information
                        in working memory that gets encoded in long term memory.
                        Educational material needs to be effectively designed
                        and delivered to efficiently use this limited working
                        memory and hence maximize the learner outcomes.
                      </p>
                      <p className="main-blog-text">
                        The cognitive load theory is well explained in an
                        article by Cynthia J. Brame
                      </p>
                    </div>
                    <div>
                      <h3
                        style={{
                          color: "#fff",
                          fontFamily: "Galano-Grotesque",
                          marginTop: "15px",
                          fontWeight: 700,
                        }}
                      >
                        “Cognitive Load Theory sugges ts that any learning
                        experience has three components.
                      </h3>
                      <div className="row mt-3">
                        <div className="col-md-3 text-center">
                          <img
                            className="img-fluid mt-3"
                            src={intrinsic}
                            alt=""
                          />
                        </div>
                        <div className="col-md-9">
                          <p className="main-blog-text">
                            The first of these is intrinsic load, which is
                            inherent to the subject under study and is
                            determined in part by the degrees of connectivity
                            within the subject. The common example given to
                            illustrate a subject with low intrinsic load is a
                            word pair (e.g., blue = azul), whereas grammar is a
                            subject with a high intrinsic load due to its many
                            levels of connectivity and conditional
                            relationships.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-3 text-center">
                          <img
                            className="img-fluid mt-3 "
                            src={germane}
                            alt=""
                          />
                        </div>
                        <div className="col-md-9">
                          <p className="main-blog-text">
                            The second component of any learning experience is
                            germane load, which is the level of cognitive
                            activity necessary to reach the desired learning
                            outcome- e.g., to make the comparisons, do the
                            analysis, elucidate the steps necessary to master
                            the lesson. The ultimate goal of these activities is
                            for the learner to incorporate the subject under
                            study into a schema of richly connected ideas.
                          </p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-3 text-center">
                          <img
                            className="img-fluid mt-3 "
                            src={segmentation}
                            alt=""
                          />
                        </div>
                        <div className="col-md-9">
                          <p className="main-blog-text">
                            The third component of a learning experience is
                            extraneous load, which is cognitive effort that does
                            not help the learner toward the desired learning
                            outcome. It is often characterized as load that
                            arises from a poorly designed lesson (e.g.,
                            confusing instructions, extra information), but may
                            also be load that arises due to stereotype threat or
                            imposter syndrome. These concepts are more fully
                            articulated and to some extent critiqued in an
                            excellent review by de Jong (2010)’
                          </p>
                        </div>
                      </div>
                      <p className="main-blog-text">
                        In an article by Richard E. Mayer & Roxana Moreno
                        (2003): Nine Ways to Reduce Cognitive Load in Multimedia
                        Learning, Educational Psychologist, 38:1, 43-52, as
                        shown below, he cited some well researched load
                        reduction methods in multimedia instruction to better
                        manage the cognitive load and thus maximize learning
                        outcomes.
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-3 text-center">
                          <img
                            className="img-fluid mt-3"
                            src={segmentation2}
                            alt=""
                          />
                        </div>
                        <div className="col-md-9">
                          <p className="main-blog-text">
                            <strong className="text-white fw-bold">
                              Off loading
                            </strong>{" "}
                            – It is suggested to balance the load on visual and
                            verbal channels to help the learner better process
                            the information from each channel separately.
                          </p>
                        </div>
                      </div>
                      <p className="main-blog-text">
                        <strong className="text-white fw-bold">
                          For example
                        </strong>{" "}
                        , a two minute animation depicting the steps in
                        lightning formation along with concurrent on-screen text
                        describing the steps in lightning formation creates what
                        Sweller (1999) called a split-attention effect because
                        the learner’s visual attention is split between viewing
                        the animation and reading the on-screen text
                      </p>
                      <p className="main-blog-text">
                        <span style={{ color: "#C21E7E", fontWeight: "bold" }}>
                          FOCII
                        </span>{" "}
                        provides feedback on the optimal speed and segmentation
                        recommendation based on the context and learner profile.
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-3 text-center">
                          <img
                            className="img-fluid mt-3"
                            src={segmentation}
                            alt=""
                          />
                        </div>
                        <div className="col-md-9 d-flex align-items-center">
                          <p className="main-blog-text">
                            <strong className="text-white fw-bold">
                              Off loading
                            </strong>{" "}
                            – It is suggested to balance the load on visual and
                            verbal channels to help the learner better process
                            the information from each channel separately.
                          </p>
                        </div>
                      </div>
                      <p className="main-blog-text">
                        <strong>For example</strong>, suppose a learner clicks
                        on an explanation in a multimedia encyclopedia, and he
                        or she receives a narrated animation describing the
                        steps (which requires essential processing) along with
                        background music or inserted narrated video clips of
                        damage caused by lightning (which require incidental
                        processing), will lead to the learner using limited
                        cognitive resources on incidental processing, thus
                        leaving less cognitive capacity for essential
                        processing.
                      </p>
                      <p className="main-blog-text">
                        <span style={{ color: "#C21E7E", fontWeight: "bold" }}>
                          FOCII
                        </span>{" "}
                        provides feedback on the presence of various such weeds
                        that result in unproductive use of the learner’s
                        cognitive capacity. The feedback includes assessment of
                        background music, verbal impact and complexity of
                        learner words and more.
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-3 text-center">
                          <img
                            className="img-fluid mt-3 "
                            style={{ borderRadius: "25px" }}
                            src={intrinsic}
                            alt=""
                          />
                        </div>
                        <div className="col-md-9 d-flex align-items-center">
                          <p className="main-blog-text">
                            <strong className="text-white fw-bold">
                              Alignment and synchronization
                            </strong>{" "}
                            – It is a process of aligning the image and
                            corresponding narration both in space and time to
                            minimize learner incidental processing consumed at
                            searching and mapping visual and verbal elements.
                          </p>
                        </div>
                      </div>
                      <p className="main-blog-text">
                        <strong className="text-white fw-bold">
                          {" "}
                          For example
                        </strong>
                        , misalignment of words and pictures on the screen, such
                        as presenting an animation in one window with concurrent
                        on-screen text in another window elsewhere on the screen
                        or misalignment in the narration and graphic display
                        leads to cognitive overload caused by incidental
                        processing rather than essential processing.
                      </p>
                      <p className="main-blog-text">
                        <strong
                          style={{ color: "#C21E7E", fontWeight: "bold" }}
                        >
                          FOCII
                        </strong>{" "}
                        measures the misalignment in spatial and temporal
                        misalignment between verbal and visual elements of a
                        multimedia material.
                      </p>
                    </div>
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

export default VideoManage;
