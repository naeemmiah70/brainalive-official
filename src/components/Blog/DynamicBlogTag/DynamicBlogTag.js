import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { tagBloglogData } from "../TagRelatedBlogData/Data";
import "./DynamicBlogTag.css";
import share from "../../../resource/icon/share (1).png";
import "../Blogs/Blogs.css";
import SharingModal from "../SharingModal/SharingModal";

const customStyles = {
  content: {
    top: "40%",
    left: "90%",
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

const DynamicBlogTag = () => {
  const id = useParams();

  const [blogs, setBlogs] = useState([]);
  const blog = blogs.filter((data) => data.tags === id.tagName);
  console.log(blog);

  useEffect(() => {
    setBlogs(tagBloglogData);
    const Name = blog.slice(0, 1).map((data) => data.tagHeading);

    document.title = Name;
  }, []);

  const [links, setLink] = useState({
    facebookShare: "",
    twitterShare: "",
    linkedInShare: "",
    copyLink: "",
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <section style={{ position: "relative" }} className="blog-bg">
        <div className="tag-blog-container">
          <div className="row">
            <div className="search-for-heading">
              {blog.slice(0, 1).map((data) => (
                <p>
                  {" "}
                  <span className="search-result">
                    Search results for:{" "}
                  </span>{" "}
                  <span id="tag-title">{data.tagHeading}</span>
                </p>
              ))}
            </div>
            <div className="my-5">
              {blog.map((data) => (
                <div className="row blogs-margin-top dynamic-tag blogs-div">
                  <div className="col-md-3 col-sm-12 d-flex align-items-center">
                    <Link to={data.link} style={{ textDecoration: "none" }}>
                      <div className="blog-card-img-overflow">
                        <img className="blog-card-img" src={data.img} alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-9 col-sm-12  ">
                    <div className="">
                      <Link to={data.link} style={{ textDecoration: "none" }}>
                        <h4 className="blog-title-text">{data.title}</h4>{" "}
                        <p className="read-more-text">{data.readMore}...</p>
                        <p className="blog-read-more">Read more...</p>
                      </Link>

                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <div className="d-flex date-div">
                            <p style={{ color: "gray" }} className="date">
                              {data.date}
                            </p>{" "}
                            <strong
                              style={{ color: "gray" }}
                              className="popular-dot"
                            >
                              .
                            </strong>{" "}
                            <p style={{ color: "gray" }} className="date">
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
                  <div>
                    <SharingModal
                    customStyles={customStyles}
                      links={links}
                      modalIsOpen={modalIsOpen}
                      closeModal={closeModal}
                    ></SharingModal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicBlogTag;
