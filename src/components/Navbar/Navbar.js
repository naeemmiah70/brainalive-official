import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import brainaLive from "../../resource/brainalive-nav.png";

const Navbar = () => {
  return (
    <>
      <nav id="header-desktop" className="navbar navbar-expand-lg home-header">
        <div className="header-menu">
          <Link to="/" className="logo" aria-label="logo">
            <img src={brainaLive} width="55" height="53" alt="logo" />
          </Link>

          <ul className="header-links mt-3">
            <li className="header-link">
              <Link
                to="/"
                className="d-menu-link d-color-secondary nav-text"
                aria-label="home"
              >
                Home
              </Link>
              <div className="outline"></div>
            </li>

            <li class="dropdown header-link">
              <Link to="/" className="d-menu-link d-color-secondary nav-text">
                Company
                <FontAwesomeIcon className="down-icon" icon={faChevronDown} />
              </Link>
              <div class="dropdown-content">
                <Link to="/about" aria-label="about us" className="nav-text">
                  About Us
                </Link>
                <Link to="/career" aria-label="career" className="nav-text">
                  Career
                </Link>
                <Link to="/contact" aria-label="contact" className="nav-text">
                  Contact
                </Link>
              </div>
              <div className="outline"></div>
            </li>
            <li className="dropdown header-link">
              <Link to="/" className="d-menu-link d-color-secondary nav-text">
                Product
                <FontAwesomeIcon className="down-icon" icon={faChevronDown} />
              </Link>
              <div className="dropdown-content">
                <Link to="/ba3e" aria-label="ba3e" className="nav-text">
                  BA3E
                </Link>
                <Link to="/focii" aria-label="focii" className="nav-text">
                  FOCII
                </Link>
                <Link to="/abha" aria-label="abha" className="nav-text">
                  ABHA
                </Link>
              </div>
              <div className="outline"></div>
            </li>
            <li className="header-link">
              <Link
                to="/science"
                className="d-menu-link d-color-secondary nav-text"
                aria-label="science"
              >
                Science
              </Link>
              <div className="outline"></div>
            </li>
            <li className="header-link">
              <Link
                to="/blog"
                className="d-menu-link d-color-secondary nav-text"
                aria-label="/blog"
              >
                Blog
              </Link>
              <div class="outline"></div>
            </li>
          </ul>
          <div className="e-header-btn">
            <Link
              style={{ textDecoration: "none" }}
              to="/contact"
              aria-label="get free demo"
            >
              <button>Get free demo</button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Second Nav */}
      <nav id="header-mobile" className="white">
        <input id="burger-check" type="checkbox" />
        <label for="burger-check" className="burger-menu">
          <svg
            className="header-menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
          >
            <g transform="translate(0,-952.36218)">
              <path
                d="M14.2,972.9c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h71.6c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2H14.2z
        M14.2,998.2c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2h50.5c2.3,0,4.2-1.9,4.2-4.2s-1.9-4.2-4.2-4.2H14.2z M14.2,1023.4
       c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h71.6c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2H14.2z"
              ></path>
            </g>
          </svg>
          <span className="header-menu-text">Menu</span>
        </label>
        <label for="burger-check" className="close-menu">
          <svg
            className="header-menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
          >
            <g>
              <path
                class="st0"
                d="M16.3,84.4L16.3,84.4c-0.7-0.6-0.7-1.7,0-2.3l65.3-65.3c0.6-0.6,1.7-0.6,2.3,0l0,0c0.6,0.6,0.6,1.7,0,2.3
       L18.6,84.4C17.9,85.1,16.9,85.1,16.3,84.4z"
              ></path>
              <path
                d="M17.4,88.9c-1.4,0-2.9-0.5-4-1.6l-0.2-0.2c-1-1-1.5-2.4-1.5-3.8c0-1.5,0.6-2.9,1.7-4l65.3-65.3c2.2-2.2,5.8-2.2,8,0
       c1.1,1.1,1.7,2.5,1.7,4c0,1.5-0.6,2.9-1.7,4L21.4,87.2C20.3,88.3,18.9,88.9,17.4,88.9z"
              ></path>
            </g>
            <g>
              <path
                class="st0"
                d="M83.6,84.1L83.6,84.1c0.6-0.6,0.6-1.7,0-2.3L18.9,17c-0.6-0.6-1.7-0.6-2.3,0l0,0c-0.6,0.6-0.6,1.7,0,2.3
       l64.8,64.8C81.9,84.7,83,84.7,83.6,84.1z"
              ></path>
              <path
                d="M82.5,88.6c-1.4,0-2.9-0.5-4-1.6L13.7,22.2c-2.2-2.2-2.2-5.8,0-8c1.1-1.1,2.5-1.7,4-1.7c0,0,0,0,0,0c1.5,0,2.9,0.6,4,1.6
       L86.4,79c2.2,2.2,2.2,5.8,0,8l0,0C85.3,88,83.9,88.6,82.5,88.6z"
              ></path>
            </g>
          </svg>
          <span className="header-menu-text d-color-white">Close</span>
        </label>
        <div id="header-mobile-menu">
          <ul className="header-links-wrapper">
            <li className="header-link">
              <Link to="/" className="d-menu-link d-color-white">
                Home
              </Link>
              <div className="outline"></div>
            </li>
            <li className="dropdown header-link">
              <Link to="" class="d-menu-link d-color-white">
                Company
                <FontAwesomeIcon className="down-icon" icon={faChevronDown} />
              </Link>
              <div className="dropdown-content">
                <Link to="/about">About Us</Link>
                <Link to="/career">Career</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="outline"></div>
            </li>
            <li className="dropdown header-link">
              <Link to="" className="d-menu-link d-color-white">
                Product
                <FontAwesomeIcon className="down-icon" icon={faChevronDown} />
              </Link>
              <div className="dropdown-content">
                <Link to="/ba3e">BA3E</Link>
                <Link to="/focii">FOCII</Link>
                <Link to="/abha">ABHA</Link>
              </div>
              <div className="outline"></div>
            </li>
            <li className="header-link">
              <Link to="/science" class="d-menu-link d-color-white">
                Science
              </Link>
              <div className="outline"></div>
            </li>
            <li className="header-link">
              <Link to="/blog" className="d-menu-link d-color-white text-white">
                Blog
              </Link>
              <div className="outline"></div>
            </li>
            <li className="e-header-btn">
              <Link to="/contact">
                <button>
                  <span>Get free demo</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <Link className="logo" to="/">
          <img src={brainaLive} alt="Logho" width="51" height="50" />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
