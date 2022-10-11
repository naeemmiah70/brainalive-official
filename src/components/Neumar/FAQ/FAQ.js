import React from "react";
import "./FAQ.css";

const FAQ = () => {
  const data = [
    {
      id: 1,
      question: "What Is A Gaze Point Tracker?",
      answere:
        "A gaze point tracker uses your devices’ web camera / in-built camera to track novel facial features as you gaze across the screen. The machine learning models then projects the pupil gaze points in the screen in real-time It further provides the trajectory and fixation points with which the pupil was moved across the screen.",
    },
    {
      id: 2,
      question: "What Can I Use FOCII For?",
      answere:
        "FOCII can be used for testing the usability of your application/website, to understand the pain points in the customer journey and to identify the effectiveness of your content FOCII can provide useful analytics for your landing page, content and commercial pages.",
    },
    {
      id: 3,
      question: "Can We Do Conversion Rate Optimization (CRO) Using FOCII?",
      answere:
        "Yes, we can do it. Conversion rate optimization is done to maximise the conversion of users to perform the desired action in the website/app. Few examples of CRO are increasing the customer conversion rate from product page to shopping cart, increasing the conversion rate of subscription etc. And gaining better understanding on how users navigate your website, what they click, how they perceive the content, and, most importantly, why they leave your resource without completing the expected conversion FOCII along with google analytics provides data on how users experience your website, where do they look, how they perceive the content and what drives their action that adds value to the engagement.",
    },
    {
      id: 4,
      question: "Can We Do Usability Testing Using FOCII?",
      answere:
        "Yes, we can do it. Usability testing helps in identifying the confusing elements/flow in the user journey that prevents users from performing the desired action. FOCII captures the true way the user uses the application. The ability to track the gaze point of the user would lead to identify the complex content/design elements in the app. Further, the gaze sequence provides insight on whether the user was able to find the required information with minimal effort.",
    },
    {
      id: 5,
      question: "How Is FOCII Better?",
      answere:
        "FOCII does eye tracking that gives you information that cannot be inferred from mouse data alone. In a study it was found that even when only looking at the Y-axis (the more common direction for the mouse to follow the eye), a mere 56 of 175 Google result pages had mouse movement mimic eye movement. That’s only 32%. Further, we do not require custom hardware and do not restrict users to fixed screen size to run an eye tracking study. We use user’s own computers/webcams to track user experience.",
    },
    {
      id: 6,
      question: "How Does Our Tool Work?",
      answere:
        "FOCII captures users' experience in their most natural form. We use the user's laptop/desktop inbuilt camera to capture the eye movements and other facial features to compute the user gaze point on the screen and the overall engagement.",
    },
  ];
  return (
    <section className="interest-bg d-flex justify-content-center">
      <div className="focci-sdk-container">
        <div className="">
          <div className="text-center">
            <h2 className="text-white fw-bold my-5">FAQ</h2>
            <div className="bar"></div>
          </div>
        </div>

        <div
          class="faqs-container"
          itemscope
          itemtype="https://schema.org/FAQPage"
        >
          {data.map((data) => (
            <div
              class="faq-singular"
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <h2
                data-bs-toggle="collapse"
                href={`#collapseExample${data.id}`}
                role="button"
                aria-expanded="false"
                aria-controls={`collapseExample${data.id}`}
                class="faq-question"
                itemprop="name"
              >
                {data.question}
              </h2>
              <div
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
                id={`collapseExample${data.id}`}
                class="faq-answer collapse"
              >
                <div itemprop="text">
                  <p className="answer-text">{data.answere}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
