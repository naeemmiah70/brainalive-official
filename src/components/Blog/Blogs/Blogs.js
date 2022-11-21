import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../BlogData/BlogData";
import "./Blogs.css";
import share from "../../../resource/icon/share (1).png";
import save from "../../../resource/icon/save.png";
import SharingModal from "../SharingModal/SharingModal";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [links, setLink] = useState(null);
  console.log(links);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {blogs.map((data) => (
        <>
          <div className="row text-white blogs-margin-top blogs-div">
            <div className="col-md-3 col-sm-12 d-flex align-items-center">
              <Link to={data.link} style={{ textDecoration: "none" }}>
                <div className="blog-card-img-overflow">
                  <img className="blog-card-img" src={data.img} alt="" />
                </div>
              </Link>
            </div>
            <div className="col-md-9 col-sm-12 d-flex align-items-center main-blog-card-text">
              <div className="blog-card-text">
                <Link to={data.link} style={{ textDecoration: "none" }}>
                  <h4 className="blog-title-text">{data.title}</h4>{" "}
                  <p className="read-more-text">{data.blogReadMore}</p>
                  <p className="blog-read-more">Read more...</p>
                </Link>

                <div className="d-flex justify-content-between mt-4">
                  <div className="d-flex">
                    <div className="date-div">
                      <p style={{ color: "gray" }} className="date">
                        {data.date}
                      </p>{" "}
                      <strong style={{ color: "gray" }} className="date-dot">
                        .
                      </strong>{" "}
                      <p style={{ color: "gray" }} className="date read-time">
                        10 min read
                      </p>
                      <strong className="blog-bottom-dot">.</strong>{" "}
                    </div>
                    <div className="blog-buttons">
                      <button className="soap-color-btn">
                        <small> Online Learning</small>
                      </button>{" "}
                      <button className="robin-egg-blue-btn ">
                        Traditional
                      </button>{" "}
                      <button className="champagne-color-btn">Classroom</button>
                    </div>
                  </div>
                  <div className="share-div">
                    <img
                      onClick={() => {
                        openModal();
                        setLink(data.facebookShare);
                      }}
                      src={share}
                      alt=""
                    />
                    <img src={save} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <SharingModal
        link={links}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></SharingModal>
    </div>
  );
};

export default Blogs;
