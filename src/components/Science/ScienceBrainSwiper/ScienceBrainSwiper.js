import React from "react";
import "./SceinceBrainSwiper.css";

import maths1 from "../../../resource/brain-img/maths1.png";
import maths2 from "../../../resource/brain-img/maths2.png";
import maths3 from "../../../resource/brain-img/maths3.png";
import maths4 from "../../../resource/brain-img/maths4.png";
import maths5 from "../../../resource/brain-img/maths5.png";

import lang1 from "../../../resource/brain-img/lang1.png";
import lang2 from "../../../resource/brain-img/lang2.png";
import lang3 from "../../../resource/brain-img/lang3.png";
import lang4 from "../../../resource/brain-img/lang4.png";
import lang5 from "../../../resource/brain-img/lang5.png";

import hand1 from "../../../resource/brain-img/hand1.png";
import hand2 from "../../../resource/brain-img/hand2.png";
import hand3 from "../../../resource/brain-img/hand3.png";
import hand4 from "../../../resource/brain-img/hand4.png";
import hand5 from "../../../resource/brain-img/hand5.png";

import feet1 from "../../../resource/brain-img/feet1.png";
import feet2 from "../../../resource/brain-img/feet2.png";
import feet3 from "../../../resource/brain-img/feet3.png";
import feet4 from "../../../resource/brain-img/feet4.png";
import feet5 from "../../../resource/brain-img/feet5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Thumbs,
  FreeMode,
} from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-creative";
import "swiper/css/thumbs";
import { useState } from "react";

const ScienceBrainSwiper = () => {
  const [brainImgType, setBrainImgType] = useState("maths");
  const [activeThumb, setActiveThumb] = useState();
  const mathsDetails = [
    {
      id: 1,
      img: maths1,
    },
    {
      id: 2,
      img: maths2,
    },
    {
      id: 3,
      img: maths3,
    },
    {
      id: 4,
      img: maths4,
    },
    {
      id: 5,
      img: maths5,
    },
  ];

  const langDetails = [
    {
      id: 1,
      img: lang1,
    },
    {
      id: 2,
      img: lang2,
    },
    {
      id: 3,
      img: lang3,
    },
    {
      id: 4,
      img: lang4,
    },
    {
      id: 5,
      img: lang5,
    },
  ];

  const handDetails = [
    {
      id: 1,
      img: hand1,
    },
    {
      id: 2,
      img: hand2,
    },
    {
      id: 3,
      img: hand3,
    },
    {
      id: 4,
      img: hand4,
    },
    {
      id: 5,
      img: hand5,
    },
  ];

  const feetDetails = [
    {
      id: 1,
      img: feet1,
    },
    {
      id: 2,
      img: feet2,
    },
    {
      id: 3,
      img: feet3,
    },
    {
      id: 4,
      img: feet4,
    },
    {
      id: 5,
      img: feet5,
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="swipersection-bg">
      <div className="container">
        <div className="row">
          <div
            className={`col-md-4 ${brainImgType === "maths" && "view1"} ${
              brainImgType === "lang" && "view2"
            }`}
          >
            <div
              onMouseOver={() => setBrainImgType("maths")}
              className="brain-angle-view-div text-center"
            >
              <h2 className="brain-angle-title">
                Mathematics and  Logic
              </h2>
            </div>
            <div
              onMouseOver={() => setBrainImgType("lang")}
              className="brain-angle-view-div "
            >
              <h2 className="brain-angle-title text-center reading-and-language">
                Reading and Language Acquisition
              </h2>
            </div>
          </div>
          <div className="col-md-4 p-3 swiper-images-div align-items-center">
            <main>
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  A11y,
                  Autoplay,
                  Thumbs,
                  FreeMode,
                ]}
                autoplay={{ delay: 3000 }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                loop
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
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
                {brainImgType === "maths" && (
                  <div>
                    {mathsDetails.map((data, index) => (
                      <SwiperSlide key={index}>
                        <div
                          key={data.id}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <img
                              className="swiper-image"
                              src={data.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
                {brainImgType === "lang" && (
                  <div>
                    {langDetails.map((data) => (
                      <SwiperSlide>
                        <div
                          key={data.id}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <img
                              className="swiper-image"
                              src={data.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
                {brainImgType === "hand" && (
                  <div>
                    {handDetails.map((data) => (
                      <SwiperSlide>
                        <div
                          key={data.id}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <img
                              className="swiper-image"
                              src={data.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
                {brainImgType === "feet" && (
                  <div>
                    {feetDetails.map((data) => (
                      <SwiperSlide>
                        <div
                          key={data.id}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <img
                              className="swiper-image"
                              src={data.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
              </Swiper>
              {/* Thumbs */}
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                freeMode={true}
                watchSlidesProgress={true}
                breakpoints={{
                  320: {
                    slidesPerView: 5,
                  },
                  480: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 5,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1440: {
                    slidesPerView: 5,
                  },
                  2560: {
                    slidesPerView: 5,
                  },
                }}
              >
                {brainImgType === "maths" && (
                  <div>
                    {mathsDetails.map((data, index) => (
                      <SwiperSlide key={index}>
                        <div
                          key={data.id}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <img
                              className="swiper-pagination-image"
                              src={data.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
                {brainImgType === "lang" && (
                  <div>
                    {langDetails.map((data) => (
                      <SwiperSlide>
                        <div
                          key={data.id}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <img
                              className="swiper-pagination-image"
                              src={data.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
                {brainImgType === "hand" && (
                  <div>
                    {handDetails.map((data) => (
                      <SwiperSlide>
                        <div
                          key={data.id}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <img
                              className="swiper-pagination-image"
                              src={data.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
                {brainImgType === "feet" && (
                  <div>
                    {feetDetails.map((data) => (
                      <SwiperSlide>
                        <div
                          key={data.id}
                          className="d-flex align-items-center justify-content-center"
                        >
                          <div>
                            <img
                              className="swiper-pagination-image"
                              src={data.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
              </Swiper>
            </main>

           
          </div>
          <div
            className={`col-md-4 ${brainImgType === "hand" && "view3"} ${
              brainImgType === "feet" && "view4"
            }`}
          >
            <div
              onMouseOver={() => setBrainImgType("hand")}
              className="brain-angle-view-div "
            >
              <h2 className="brain-angle-title text-center">
                Motor Movement - Hands
              </h2>
            </div>
            <div
              onMouseOver={() => setBrainImgType("feet")}
              className="brain-angle-view-div text-center"
            >
              <h2 className="brain-angle-title">Motor Movement - Feet</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceBrainSwiper;
