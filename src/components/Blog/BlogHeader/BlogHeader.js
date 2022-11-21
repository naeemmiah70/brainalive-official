import React from "react";
import "./BlogHeader.css";

const BlogHeader = () => {
  return (
    <div className="blog-header d-flex justify-content-center align-items-center">
      <div className="">
        <div className="text-center">
          <h1 className="blog-header-title">Blog</h1>
          <p className="by-brainalive">By BrainAlive</p>
        </div>

        <div className="news-letter">
          <h5 className=""> Subscribe to our newsletter</h5>
          <form action="" className="d-flex mt-3">
            <div>
              <input className="news-letter-input" type="email" placeholder="johndoe@example.com" />
            </div>
            <div>
              <button className="news-letter-btn">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
