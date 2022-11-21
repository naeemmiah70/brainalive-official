import React from "react";
import "./LearnAnalytics.css";
import { Link } from "react-router-dom";
import facebook from "../../../resource/icon/facebook.png";
import twitter from "../../../resource/icon/twitter.png";
import linkedIn from "../../../resource/icon/linkedIn.png";
import copy from "../../../resource/icon/copy .png";
import RecentReleases from "../../Blog/RecentReleases/RecentReleases";
import '../../Blog/Blogs/Blogs.css'
import learningAnalytics from '../../../resource/blogs/learning-analytics.jpg';
import analyticsDiagram from '../../../resource/blogs/analytics-diagram.png'
import '../../Blog/PopularArticles/PopularArticles.css'

const LearnAnalytic = () => {

  return (
    <>
      {/* Header */}

      <section className="learn-analytics-bg"></section>
      <div>
        <div className="blog-hero-text-bg d-flex justify-content-center ">
          <div className="blog-header-content analytics-header-content d-flex align-items-center">
            <div className="row">
              <div className="col-md-5">
                <img
                  className="blog-header-image"
                  src={learningAnalytics}
                  alt=""
                />
              </div>
              <div className="col-md-7 d-flex align-items-center">
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
                      Learning Analytics
                    </h1>
                  </div>
                  <section>
                    <h6 className="share-via mt-3">Share Via:</h6>
                    <div className="d-flex flex-wrap mt-3">
                      <a
                        className="d-flex my-2 text-decoration-none"
                        onClick={() =>
                          window.open(
                            "https://web.facebook.com/sharer.php?t=Learning%20Analytics&u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F13%2Flearning-analytics-2%2F&_rdc=1&_rdr",
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
                            "https://twitter.com/intent/tweet?text=Learning+Analytics&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F13%2Flearning-analytics-2%2F",
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
                            "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbraina.live%2Fblog%2F",
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
              <div className="col-lg-9 my-5">
                <div className="d-flex justify-content-center blog-spacing-right">
                  <div className="focci-sdk-container">
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src={learningAnalytics}
                        alt=""
                      />
                      <p className="main-blog-text">
                        As per an MIT study, the completion rates for LMS-based
                        courses is not more than 4 per cent and the success of
                        the graduates is even lower. Various factors that
                        influence learner engagement include the quality of
                        lesson design and delivery, it’s difficulty for
                        students, or loss of motivation among the learners due
                        to changed priorities. Learning analytics helps identify
                        at-risk learners and provide timely manner
                        interventions, preventing academic failure. Learning
                        analytics is defined as the measurement, collection,
                        analysis and reporting of data about learners and their
                        contexts, for purposes of understanding and optimizing
                        learning and the environments in which it occurs.
                      </p>
                      <p className="main-blog-text">
                        Learner behavior data captured in the form of platform
                        interaction, virtual participation, assessment
                        performance etc. gives abundant opportunities to
                        understand learner engagement in quasi real-time.{" "}
                      </p>
                      <p className="main-blog-text">
                        One of the most significant benefits of learning
                        analytics is being able to offer support for eLearning
                        experience personalization. This information allows us
                        to recommend supplemental courses or modules to fill
                        performance gaps and improve the comprehension.
                      </p>
                      <p className="main-blog-text">
                        <strong
                          style={{ color: "#C21E7E", fontWeight: "bold" }}
                        >
                          BrainAlive’s learning analytics
                        </strong>{" "}
                        helps build the learner profile, by grouping the user’s
                        data from different sources, by analyzing them and
                        providing a complex result on four levels of the virtual
                        behaviour of the student: the descriptive level (what
                        has happened), the diagnosis level (why it happened),
                        the predictive level (what will happen, for example
                        signaling the lack of performance and the risk of
                        failure) and the prescription level (what should be
                        done, for example the recommendation of educational
                        resources)
                      </p>
                    </div>
                    <div>
                      <div className="d-flex justify-content-center">
                        <img
                          className="img-fluid blog-big-img"
                          src={analyticsDiagram}
                          alt=""
                        />
                      </div>
                      <h5 className="main-blog-color-heading">
                        Descriptive Analytics
                      </h5>
                      <p className="main-blog-text">
                        It examines the results and analyzes past events to know
                        how to approach the future. Descriptive analysis looks
                        at past performance and understands the progress by
                        extracting historical data to find reasons for past
                        success or failure. It summarizes the raw data and will
                        display the results in a format easy to interpret by
                        users, allowing them to learn from past behaviours and
                        understanding how it might affect their future
                        performance. Using descriptive analytics, we aim to
                        create the virtual profile of the student, to indicate
                        the current level of performance, describing the
                        previous results and the events that led to these
                        results.
                      </p>

                      <h5 className="main-blog-color-heading">
                        Diagnostic Analysis
                      </h5>
                      <p className="main-blog-text">
                        Diagnostic analytics providex more information than
                        typical results, by examination of the data content to
                        answer to the question: “Why did it happen?.
                      </p>
                      <p className="main-blog-text">
                        The purpose of the diagnostic analytics is to
                        investigate why the user has exhibited a certain
                        behavior. e.g. a lack of information, a lack of practice
                        or it is an isolated event, produced once, caused by
                        lack of attention .
                      </p>
                      <h5 className="main-blog-color-heading">
                        Predictive Analysis
                      </h5>
                      <p className="main-blog-text">
                        Predictive analytics turns data into useful information
                        in order to determine the probable future outcome of an
                        event or the probability that a certain situation will
                        occur, answering the question: “What will happen?”. This
                        level of analytics is based on the previous two levels
                        (descriptive and diagnostic), using their results to
                        apply an algorithm of prediction (educational data
                        mining) which will predict the performance of the
                        student based on his behaviour and past results.
                      </p>
                      <h5 className="main-blog-color-heading">
                        Descriptive Analytics
                      </h5>
                      <p className="main-blog-text">
                        Prescriptive analytics suggests decision options to take
                        advantage of the predictions, using optimization
                        algorithms to advise on possible outcomes and answer the
                        question: “What should we do? Based on this analytics,
                        new recommendations will be made so that the student can
                        reach his maximum potential. Teachers will have access
                        to these statistics, to have a clear idea of the
                        performance of their students, having the ability to
                        improve and adapt the content of the future courses.
                      </p>
                    </div>

                    {/* Share Via */}
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
                          <Link
                            to="/blog/tag/learning-analytics"
                            className="tag-texts"
                          >
                            learning analytics
                          </Link>
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
                <RecentReleases></RecentReleases>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnAnalytic;
