import React from "react";
import RecentBlog from "../../Blog/RecentBlog/RecentBlog";
import "./LearnAnalytics.css";

const LearnAnalytic = () => {
  return (
    <>
      {/* Header */}
      <section>
        <div className="learn-analytics-bg"></div>
        <h1 className="blog-header-center-text">Learning Analytics</h1>
      </section>

      <section className="blog-bg">
        <div className="blog-container ">
          <div className="container">
            <div className="row">
              {/* Main Blog */}
              <div className="col-md-9 my-5">
                <div className="d-flex justify-content-center">
                  <div className="focci-sdk-container">
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src="https://braina.live/blog/wp-content/uploads/2021/11/business-presentation-laptop-screen-1-1-1024x576.jpg"
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
                          src="https://braina.live/blog/wp-content/uploads/2021/11/1_z5n84q1b6bEd9ALs75GW2w-1.png"
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
                      <h6 className="share-via mt-4">Share Via:</h6>
                      <div className="d-flex flex-wrap mt-3">
                        <a
                          className="d-flex text-decoration-none"
                          href="https://www.facebook.com/sharer.php?t=Learning%20Analytics&amp;u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F13%2Flearning-analytics-2%2F"
                        >
                          <div className="facebook-share-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-facebook sidebar-social-icon "
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
                          className="d-flex mx-2 text-decoration-none"
                          href="https://twitter.com/intent/tweet?text=Learning+Analytics&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F13%2Flearning-analytics-2%2F"
                        >
                          <div className="twitter-share-icon">
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
                          </div>
                          <div className="twitter-share-text-bg">
                            <p className="facebook-text px-3">Twitter</p>
                          </div>
                        </a>
                        <a
                          className="d-flex text-decoration-none"
                          href="https://www.facebook.com/sharer.php?t=Learning%20Analytics&amp;u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F13%2Flearning-analytics-2%2F"
                        >
                          <div className="linkedIn-share-icon">
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
                          </div>
                          <div className="linkedIn-share-text-bg">
                            <p className="facebook-text px-3">LinkedIn</p>
                          </div>
                        </a>

                        <div className="d-flex mx-2">
                          <div className="Plus-share-icon">
                            <a href="/">
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
                            </a>
                          </div>
                          <div className="plus-share-text-bg">
                            <p className="facebook-text px-3 text-dark">More</p>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "3rem" }} className="text-white">
                        <div className="d-flex">
                          <p style={{ fontWeight: 300 }}>Categories</p>:{" "}
                          <p
                            style={{
                              background: "#e91e63",
                              padding: "3px 10px",
                              borderRadius: "10px",
                              marginLeft: "10px",
                              fontSize: "13px",
                              paddingBottom: "5px",
                            }}
                          >
                            Blog
                          </p>
                        </div>
                        <div className="d-flex">
                          <p style={{ fontWeight: 300 }}>Tags</p>:{" "}
                          <p
                            style={{
                              fontWeight: 300,
                              color: "#C21E7E",
                              marginLeft: "10px",
                              fontSize: "15px",
                              marginTop: "3px",
                            }}
                          >
                            learning analytics
                          </p>
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
              <div className="col-md-3 my-5">
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
                  className="facebook-icon-div"
                  href="https://www.facebook.com/sharer.php?t=Learning%20Analytics&amp;u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F13%2Flearning-analytics-2%2F"
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
                </a>
                <a
                  className="twitter-icon-div"
                  href="https://twitter.com/intent/tweet?text=Learning+Analytics&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F13%2Flearning-analytics-2%2F"
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
                </a>
                <a
                  className="linkedIn-icon-div"
                  href="https://www.facebook.com/sharer.php?t=Learning%20Analytics&amp;u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F13%2Flearning-analytics-2%2F"
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
                </a>

                <div className="plus-icon-div">
                  <a href="">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="sidebar-feeback">
              <p className="text-white feedback-text">Feedback</p>
            </div>
          </div>
      
      </section>
    </>
  );
};

export default LearnAnalytic;
