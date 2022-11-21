import React from "react";
import "./FOCIIservices.css";
import '../../FOCIIce/FOCIISDK/FOCCISDK.css'
import focii1 from "../../../resource/icon/focii-1.png";
import focii2 from "../../../resource/icon/focii-2.png";
import focii3 from "../../../resource/icon/focii-3.png";
import focii4 from "../../../resource/icon/focii-4.png";
import focii5 from "../../../resource/icon/focii-5.png";
import focii6 from "../../../resource/icon/focii-6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FOCIIservices = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="interest-bg d-flex justify-content-center">
      <div className="focci-sdk-container neumar-services-margin-top">
        <div class="focci-comp-sol">
          <div data-aos="fade-up" class="row">
            <div class="col-sm-4">
              <div class="single_service service_right cro-card para single_one">
                <img src={focii1} alt="" />
                <div class="card-shadow">
                  <p>
                    Identify which information drives the maximum conversion and
                    place it strategically to improve conversion
                  </p>
                </div>
              </div>
              <div class="  single_service service_right cro-card para single_two">
                <img src={focii2} alt="" />
                <div class="card-shadow">
                  <p>
                    Understand what the user sees before responding to your
                    call-to-action
                  </p>
                </div>
              </div>
              <div class=" single_service service_right cro-card para single_three">
                <img src={focii3} alt="" />
                <div class="card-shadow">
                  <p>
                    Get a feedback on how much of the information is taken in by
                    the user
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 m-auto">
              <div class="focii-text">
                <div>
                  <h1 className="fw-bold focii-center-text text-white">
                    FOCII
                  </h1>
                  <div class="bar neumar-bar"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class=" single_service cro-card para single_four">
                <img src={focii4} alt="" />
                <div class="card-shadow">
                  <p>
                    Organise your website to improve the ease of site navigation
                  </p>
                </div>
              </div>
              <div class=" single_service cro-card para single_five">
                <img src={focii5} alt="" />
                <div class="card-shadow">
                  <p>
                    Find out what grabs the initial attention of your user and
                    find ways to retain it
                  </p>
                </div>
              </div>
              <div class=" single_service cro-card para single_six">
                <img src={focii6} alt="" />
                <div class="card-shadow">
                  <p>
                    Understand the true reason behind user behaviour through
                    scientific data and design a UX that resonates with user
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FOCIIservices;
