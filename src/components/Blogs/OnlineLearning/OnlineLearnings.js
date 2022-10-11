import React from "react";
import RecentBlog from "../../Blog/RecentBlog/RecentBlog";
import "./OnlineLearning.css";

const OnlineLearnings = () => {
  return (
    <>
      {/* Header */}
      <section>
        <div className="online-learning-bg"></div>
        <h1 className="blog-header-center-text" id="learning-heading-text">
          Can online learning be made a fitting <br /> alternative to
          traditional classroom?
        </h1>
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
                            className="d-flex text-decoration-none"
                            href="https://www.facebook.com/sharer.php?t=Can%20online%20learning%20be%20made%20a%20fitting%20alternative%20to%20traditional%20classroom%3F&amp;u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F"
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
                            href="https://twitter.com/intent/tweet?text=Can+online+learning+be+made+a+fitting+alternative+to+traditional+classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F"
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
                            href="https://www.linkedin.com/shareArticle?title=Can%20online%20learning%20be%20made%20a%20fitting%20alternative%20to%20traditional%20classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F&amp;mini=true"
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
                              New Normal Online Teaching Traditional Classroom
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
                href="https://twitter.com/intent/tweet?text=Can+online+learning+be+made+a+fitting+alternative+to+traditional+classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F"
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
                href="https://twitter.com/intent/tweet?text=Can+online+learning+be+made+a+fitting+alternative+to+traditional+classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F"
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
                href="https://www.linkedin.com/shareArticle?title=Can%20online%20learning%20be%20made%20a%20fitting%20alternative%20to%20traditional%20classroom%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F09%2F03%2Fcan-online-learning-be-made-a-fitting-alternative-to-traditional-classroom%2F&amp;mini=true"
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

export default OnlineLearnings;
