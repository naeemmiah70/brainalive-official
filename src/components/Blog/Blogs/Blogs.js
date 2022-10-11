import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../BlogData/BlogData";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <div>
      <div>
        <div>
          {blogs.map((data) => (
            <div className="row text-white mt-5">
              <div className="col-md-4 d-flex align-items-center">
                <Link to={data.link} style={{ textDecoration: "none" }}>
                  <img className="blog-card-img" src={data.img} alt="" />
                </Link>
              </div>
              <div className="col-md-8 d-flex align-items-center ">
                <div className="blog-card-text">
                  <p id={`color-${data.id}`} className="Blog">
                    Blog
                  </p>
                  <h4 className="blog-title-text">{data.title}</h4>
                  <Link to={data.link} style={{ textDecoration: "none" }}>
                    {" "}
                    <p className="blog-read-more">Read more...</p>
                  </Link>

                  <p className="blog-by">
                    By <strong className="posted-by">{data.postedBy}</strong>,
                    <span className="px-1"> {data.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
