import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../BlogData/BlogData";

const RecentReleases = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    
      <div className="recent-releases ">
        <div>
          <div>
            <p className="text-white">Trending Topics</p>
            <div>
              <button className="soap-color-btn">
                <small> Online Learning</small>
              </button>{" "}
              <button className="robin-egg-blue-btn mx-2">Traditional</button>{" "}
              <button className="champagne-color-btn">Classroom</button>
              <button className="soap-color-btn">
                <small> Online Learning</small>
              </button>{" "}
              <button className="robin-egg-blue-btn mx-2">Traditional</button>{" "}
              <button className="champagne-color-btn">Classroom</button>
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
