import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../BlogData/BlogData";
import "../RecentBlog/RecentBlog.css";

const RecentReleases = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <div className="recent-releases">
      <div>
        <div>
          <p className="text-white">Trending Topics</p>
          <div>
            <Link
              to="/blog/tag/learning-analytics"
              className="text-decoration-none"
            >
              <button className="soap-color-btn">
                <small> Learning Analytics</small>
              </button>{" "}
            </Link>
            <Link
              to="/blog/tag/content-engagement"
              className="text-decoration-none"
            >
              <button className="robin-egg-blue-btn mx-0 my-2">
                Content Engagement
              </button>{" "}
            </Link>
            <Link
              to="/blog/tag/learner-engagement"
              className="text-decoration-none"
            >
              <button className="champagne-color-btn my-1">
                Learner Engagement
              </button>
            </Link>
            <Link
              to="/blog/tag/online-teaching"
              className="text-decoration-none"
            >
              <button className="soap-color-btn">
                <small> Online Teaching</small>
              </button>{" "}
            </Link>
            <Link to="/blog/tag/new-normal" className="text-decoration-none">
              <button className="robin-egg-blue-btn my-2">New Normal</button>{" "}
            </Link>
            <Link
              to="/blog/tag/traditional-classroom"
              className="text-decoration-none"
            >
              <button className="champagne-color-btn">
                Traditional Classroom
              </button>
            </Link>
          </div>
        </div>
        <p className="mt-3 text-white">Recent Releases</p>
        <div className="">
          {blogs.map((data) => (
            <Link style={{ textDecoration: "none" }} to={data.link}>
              <div className="recent-blog-div p-2">
                <div>
                  <img className="img-fluid" src={data.img} alt="" />
                  <h6 className="recent-blog-title">{data.title}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentReleases;
