import React from "react";
import Blogs from "./Blogs/Blogs";
import "./Blog.css";
import RecentBlog from "./RecentBlog/RecentBlog";

const Blog = () => {
  return (
    <section className="blog-bg">
      <div className="blog-container ">
        <div className="container">
          <div className="row">
            <div className="col-md-9 my-5">
              <Blogs></Blogs>
            </div>
            <div className="col-md-3 my-5">
              <RecentBlog />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
