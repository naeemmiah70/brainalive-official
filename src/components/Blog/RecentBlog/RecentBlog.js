import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../BlogData/BlogData";
import Subscribe from "../Subscribe/Subscribe";
import "./RecentBlog.css";

const RecentBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <div style={{ position: "sticky", top: "80px" }}>
      <div>
        <p className="recent-post-heading blogs-margin-top">Recent Posts</p>
        {blogs.map((data) => (
          <div className="row text-white recent-blog-div py-3">
            <div className="col-md-7 col-7">
              <Link to={data.link} style={{ textDecoration: "none" }}>
                {" "}
                <p className="recent-blog-title">{data.title}</p>
              </Link>
              <p className="recent-gray-text">{data.postedBy}</p>
              <p className="recent-gray-text">{data.fullDate}</p>
            </div>
            <div className="col-md-5 col-5">
              <Link to={data.link} style={{ textDecoration: "none" }}>
                <img className="recent-img-blog" src={data.img} alt="" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default RecentBlog;
