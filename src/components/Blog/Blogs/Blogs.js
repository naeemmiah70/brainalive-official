import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../BlogData/BlogData";
import "./Blogs.css";
import share from "../../../resource/icon/share (1).png";
import SharingModal from "../SharingModal/SharingModal";

const customStyles = {
  content: {
    top: "50%",
    left: "66%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: 0,
  },
  overlay: {
    backgroundColor: "none",
  },
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [links, setLink] = useState({
    facebookShare: "",
    twitterShare: "",
    linkedInShare: "",
    copyLink: "",
  });

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
                      {data.buttons.map((data) => (
                        <Link to={`/blog/tag/${data.link}`}>
                          {data.link && (
                            <button className={`tag-btn-${data.id}`}>
                              <small>{data.title}</small>
                            </button>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="share-div">
                    <img
                      onClick={() => {
                        openModal();
                        setLink(data);
                      }}
                      src={share}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <SharingModal
      customStyles={customStyles}
        links={links}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></SharingModal>
    </div>
  );
};

export default Blogs;
