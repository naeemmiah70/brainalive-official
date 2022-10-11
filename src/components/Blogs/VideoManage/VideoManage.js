import React from "react";
import "./VideoManage.css";
import RecentBlog from "../../Blog/RecentBlog/RecentBlog";

const VideoManage = () => {
  return (
    <>
      {/* Header */}
      <section>
        <div className="video-managing-bg"></div>
        <h1
          className="blog-header-center-text text-center"
          id="management-heading"
        >
          Is your educational video effectively <br /> managing the cognitive
          load of your <br /> viewers?
        </h1>
      </section>

      <section className="blog-bg">
        <div className="blog-container">
          <div className="container">
            <div className="row ">
              {/* Main Blog */}
              <div className="col-md-9 mt-5">
                <div className="d-flex justify-content-center">
                  <div className="focci-sdk-container my-5">
                    <div>
                      <img
                        className="img-fluid blog-big-img"
                        src="https://braina.live/blog/wp-content/uploads/2021/11/main-cognitive-load-image_edited-1024x576.jpg"
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
                        <div className="col-md-3">
                          <img
                            className="img-fluid mt-3"
                            src="https://braina.live/blog/wp-content/uploads/2021/11/intrinsic.png"
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
                        <div className="col-md-3">
                          <img
                            className="img-fluid mt-3"
                            src="https://braina.live/blog/wp-content/uploads/2021/11/germane-1.png"
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
                        <div className="col-md-3">
                          <img
                            className="img-fluid mt-3"
                            src="https://braina.live/blog/wp-content/uploads/2021/11/distracting-3.png"
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
                        <div className="col-md-3">
                          <img
                            className="img-fluid mt-3"
                            src="https://braina.live/blog/wp-content/uploads/2021/11/segmentation-1.png"
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
                        <div className="col-md-3">
                          <img
                            className="img-fluid mt-3"
                            src="https://braina.live/blog/wp-content/uploads/2021/11/distracting-3.png"
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
                        <div className="col-md-3">
                          <img
                            className="img-fluid mt-3"
                            style={{ borderRadius: "25px" }}
                            src="https://braina.live/blog/wp-content/uploads/2021/11/learning.jpg"
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

                      {/* Share Via */}
                      <section>
                        <h6 className="share-via mt-4">Share Via:</h6>
                        <div className="d-flex flex-wrap mt-3">
                          <a
                            className="d-flex text-decoration-none"
                            href="https://www.facebook.com/sharer.php?t=Is%20your%20educational%20video%20effectively%20managing%20the%20cognitive%20load%20of%20your%20viewers%3F&amp;u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F"
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
                            href="https://twitter.com/intent/tweet?text=Is+your+educational+video+effectively+managing+the+cognitive+load+of+your+viewers%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F"
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
                            href="https://www.linkedin.com/shareArticle?title=Is%20your%20educational%20video%20effectively%20managing%20the%20cognitive%20load%20of%20your%20viewers%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F&amp;mini=true"
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
                href="https://www.facebook.com/sharer.php?t=Is%20your%20educational%20video%20effectively%20managing%20the%20cognitive%20load%20of%20your%20viewers%3F&amp;u=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F"
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
                href="https://twitter.com/intent/tweet?text=Is+your+educational+video+effectively+managing+the+cognitive+load+of+your+viewers%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F"
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
                href="https://www.linkedin.com/shareArticle?title=Is%20your%20educational%20video%20effectively%20managing%20the%20cognitive%20load%20of%20your%20viewers%3F&amp;url=https%3A%2F%2Fbraina.live%2Fblog%2F2021%2F11%2F11%2Fis-your-educational-video-effectively-managing-the-cognitive-load-of-your-viewers%2F&amp;mini=true"
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

export default VideoManage;