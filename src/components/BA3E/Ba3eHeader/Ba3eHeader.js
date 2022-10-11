import React from "react";
import { useEffect } from "react";
import "./Ba3eHeader.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-creative";
import AOS from "aos";
import "aos/dist/aos.css";

const Ba3eHeader = () => {
  const data = [
    {
      id: 1,
      details: "Discover A New You - Know When And Where Your Brain Works Best",
    },
    {
      id: 2,
      details:
        "Peak Your Productivity - Optimize Your Time By Working On What You Are Best At",
    },
    {
      id: 3,
      details:
        "Be The Awakened One - Discover Your Focus Patterns Through Signal Intelligence",
    },
    {
      id: 4,
      details:
        "Real Time Insights - Get Instant Feedback On Your Concentration Shift",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="ba3e-header d-flex align-items-center">
        <div className="col-md-5 p-5">
          <h1 className="ba3e-header-text">Making the Intangible Tangible</h1>
          <p className="ba3e-description">
            Your brain behavior demystified for you. With BA3E we give a peek
            into your brain activity thereby helping you discover and develop
            new habits that help you blaze through your day
          </p>
        </div>
      </section>
      <section className="swiper-section d-flex align-items-center">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{ delay: 3000 }}
          navigation
          spaceBetween={1}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
            1440: {
              slidesPerView: 1,
            },
            2560: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((details) => (
            <SwiperSlide>
              <div className="swiper-div">
                <div>
                  <p className="swiper-text text-center">{details.details}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Ba3eHeader;
