import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faEnvelope,
  faPhoneAlt,
  faHouse,
  faListDots,
  faPenAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = `https://brainalive-backend.onrender.com/messages`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Thanks! We will get back to you soon");
      });

    reset();
  };

  useEffect(() => {
    document.title = "Contact | BrainAlive";
  });

  return (
    <>
      <Navbar />
      <section className="contact-section-bg">
        <div className="contact-content d-flex justify-content-center align-items-center">
          <div className="contact-section contact-div">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div>
                  <h1 className="contact-hello">Hello.</h1>
                  <p className="contact-description">
                    We’d love to hear from you if you have a sales question, a
                    press inquiry or anything else you would like to ask us,
                    please send a message and we’ll get back to you.
                  </p>
                </div>
              </div>
              {/* Contact form */}
              <div className="col-lg-6">
                <div className="contact-form-div">
                  <h2 className="lets-talk">Let's Talk</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-5 input-field-div">
                        <div className="input-underline">
                          <FontAwesomeIcon
                            className="form-icons"
                            icon={faUserAlt}
                          />
                          <input
                            className="primary-input"
                            placeholder="First name*"
                            type="text"
                            {...register("firstName", { required: true })}
                          />
                        </div>
                        {errors.firstName && (
                          <span className="validation-text">
                            Please supply your first name
                          </span>
                        )}
                      </div>
                      <div className="col-md-5 input-field-div">
                        <div className="input-underline">
                          <FontAwesomeIcon
                            className="form-icons"
                            icon={faUserAlt}
                          />
                          <input
                            name="lastName"
                            className="primary-input"
                            placeholder="Last name*"
                            type="text"
                            {...register("lastName", { required: true })}
                          />
                        </div>
                        {errors.lastName && (
                          <span className="validation-text">
                            Please supply your last name
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-5 input-field-div">
                        <div className="input-underline">
                          <FontAwesomeIcon
                            className="form-icons"
                            icon={faEnvelope}
                          />
                          <input
                            className="primary-input"
                            placeholder="Work email*"
                            type="email"
                            {...register("email", { required: true })}
                          />
                        </div>
                        {errors.email && (
                          <span className="validation-text">
                            Please supply your work email
                          </span>
                        )}
                      </div>
                      <div className="col-md-5 input-field-div">
                        <div className="input-underline">
                          <FontAwesomeIcon
                            className="form-icons"
                            icon={faPhoneAlt}
                          />
                          <input
                            className="primary-input"
                            placeholder="Phone*"
                            type="phone"
                            {...register("phone", { required: true })}
                          />
                        </div>
                        {errors.phone && (
                          <span className="validation-text">
                            Please supply a valid phone number with area code
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-5 input-field-div">
                        <div className="input-underline">
                          <FontAwesomeIcon
                            className="form-icons"
                            icon={faHouse}
                          />
                          <input
                            className="primary-input"
                            placeholder="Company*"
                            type="text"
                            {...register("company", { required: true })}
                          />
                        </div>
                        {errors.company && (
                          <span className="validation-text">
                            Please supply your company
                          </span>
                        )}
                      </div>
                      <div className="col-md-5 input-field-div ">
                        <div className="input-underline p-1">
                          <FontAwesomeIcon
                            className="form-icons"
                            icon={faListDots}
                          />
                          <select
                            id="enquiry"
                            className="primary-input text-secondary"
                            name="enquiry"
                            type="selelct"
                            {...register("inquiryType", { required: true })}
                          >
                            <option className="select-type" value="">
                              Select Type of Enquiry{" "}
                            </option>
                            <option value="Sales">Beta Registration</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Press">Press </option>
                            <option value="Press">Free Demo </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row text-area-input">
                      <div className="input-field-div">
                        <div className="input-underline">
                          <FontAwesomeIcon
                            className="form-icons"
                            icon={faPenAlt}
                          />
                          <textarea
                            className="message-input"
                            placeholder="Message*"
                            cols="55"
                            rows="2"
                            {...register("message", { required: true })}
                          ></textarea>
                        </div>
                        {errors.phone && (
                          <span className="validation-text">
                            Please supply a valid message
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="">
                      <button type="submit" className="submit-btn">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
