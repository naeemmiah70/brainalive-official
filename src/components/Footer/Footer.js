import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faLinkedin,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer-bg ">
      <div className="">
        <div className="row px-3 py-3">
          <div className="col-md-6 col-sm-12">
            <div className="footer-left" data-aos="fade-up">
              <div className="footer-small-div">
                <p className="text-white fw-bold partner-info">
                  Partner with us to make the{" "}
                  <br className="footer-display-none" /> intangible tangible
                </p>

                <button
                  onClick={() => (window.location = "mailto:info@braina.live")}
                  className="info-email"
                >
                  info@braina.live
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-right" data-aos="fade-up">
              <div>
                <h3 className="footer-socail-links-text text-center">
                  Social Links
                </h3>
                <div className="mt-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100063753982208"
                    target="_blank"
                    className="footer-icon-bg"
                  >
                    <FontAwesomeIcon
                      className="social-icon"
                      icon={faFacebookF}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/brain-alive/"
                    target="_blank"
                    className="footer-linkin-bg"
                  >
                    <FontAwesomeIcon
                      className="social-icon"
                      icon={faLinkedinIn}
                    />
                  </a>
                  <a
                    href="https://twitter.com/Braina_Live"
                    target="_blank"
                    className="footer-icon-bg"
                  >
                    <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                  </a>
                  <a
                    href="https://www.instagram.com/braina_live/"
                    target="_blank"
                    className="footer-icon-bg"
                  >
                    <FontAwesomeIcon
                      className="social-icon"
                      icon={faInstagram}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fotter-border" className="text-center  p-2">
        <small className="copy-write-text">
          Copyrights © 2022 Design & Developed by{" "}
          <a href="https://ith.tech/" target="_blank" className="ith-tech">
            ITH Technologies
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
