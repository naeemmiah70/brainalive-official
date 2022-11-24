import React, { useEffect, useState } from "react";
import "./PopularArticles.css";
import { blogData } from "../BlogData/BlogData";
import "./PopularArticles.css";
import { Link } from "react-router-dom";

const PopularArticles = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <div className="popular-article-bg d-flex justify-content-center ">
      <div className="popular-article-container">
        <p className="popular-articles-heading">Popular Articles</p>
        <div className="row d-flex justify-content-center flex-wrap">
          {blogs.map((data, index) => (
            <>
              <div className="popular-article-div text-white mt-5">
                <div className="card-number text-center">
                  <p>{index + 1}</p>
                </div>
                <div className="d-flex align-content-between flex-wrap popular-card-content">
                  <div>
                    <h4 className="popular-article-card-titile">
                      {data.title}
                    </h4>
                    <p className="popular-read-more-text">{data.readMore}</p>
                    <Link className="text-decoration-none" to={`${data.link}`}><p className="popular-read-more">Read more...</p></Link>
                  </div>
                  <div className="">
                    <div className="d-flex date-div">
                      <p className="date">{data.date}</p> <strong className="popular-dot">.</strong> <p className="date">10 min read</p>
                    </div>
                    <div>
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
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;
