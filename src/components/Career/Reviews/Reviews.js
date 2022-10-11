import React, { useEffect } from "react";
import "./Reviews.css";
import Gnaneswara from "../../../resource/img/Gnaneshwar.jpg";
import Mayank from "../../../resource/img/mayank.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-creative";
import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Gnaneswara Rao",
      designation: "Machine Learning",
      Img: Gnaneswara,
      description:
        '"BrainAlive is truly an exceptional place to work. I love how it focuses a lot on the all-round well-being of its employees. The flexibility in working hours helps me regulate and balance my work with life. BrainAlive has helped me to grow especially as a professional Machine Leaning Engineer”',
    },
    {
      id: 2,
      name: "Mayank Saxena",
      designation: "Hardware",
      Img: Mayank,
      description:
        '"Its been a great learning journey uptil now in BrainAlive. Been a pleasure working under really knowledgeable leads"',
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="opeining-section">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
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
        {reviewsData.map((details) => (
          <SwiperSlide>
            <div className="row div-padding">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                  <img
                    className="review-profile-Img"
                    src={details.Img}
                    alt=""
                  />
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div data-aos="fade-up">
                  <p className="reviews-description">{details.description}</p>
                  <h4 className="reviewrs-name">{details.name}</h4>
                  <h6 className="reviews-description">{details.designation}</h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
