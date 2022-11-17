import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RecentBlog from "../RecentBlog/RecentBlog";
import { tagBloglogData } from "../TagRelatedBlogData/Data";
import "./DynamicBlogTag.css";

const DynamicBlogTag = () => {
  const id = useParams();

  const [blogs, setBlogs] = useState([]);
  const blog = blogs.filter((data) => data.tags === id.tagName);

  useEffect(() => {
    setBlogs(tagBloglogData);
    const Name = blog.slice(0, 1).map((data) => data.tagHeading);
    console.log(Name);
    document.title = Name;
  }, []);

  return (
    <>
      <section>
        <div className="blog-tag-header">
          <div className="tag-blog-header-bg d-flex align-items-center justify-content-center">
            {blog.slice(0, 1).map((data) => (
              <h2 className="tag-heading-text">{data.tagHeading}</h2>
            ))}
          </div>
        </div>
      </section>
      <section className="blog-bg">
        <div className="blog-container ">
          <div className="container">
            <div className="row">
              <div className="col-md-9 my-5">
                {blog.map((data) => (
                  <div className="row text-white blogs-margin-top">
                    <div className="col-md-4 d-flex align-items-center">
                      <Link to={data.link} style={{ textDecoration: "none" }}>
                        <div className="blog-card-img-overflow">
                          <img
                            className="blog-card-img"
                            src={data.img}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-8 d-flex align-items-center ">
                      <div className="blog-card-text">
                        <p id={`colors-${data.id}`} className="Blog">
                          BLOG
                        </p>

                        <Link to={data.link} style={{ textDecoration: "none" }}>
                          <h4 className="blog-title-text">{data.title}</h4>{" "}
                          <p className="read-more-texts">
                            {data.readMore}{" "}
                            <span className="blog-read-more">Read more...</span>
                          </p>
                        </Link>

                        <p className="blog-by">
                          By{" "}
                          <strong className="posted-by">{data.postedBy}</strong>
                          ,<span className="px-1"> {data.date}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{ position: "sticky", top: "0px" }}
                className="col-md-3 my-5"
              >
                <RecentBlog />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicBlogTag;
