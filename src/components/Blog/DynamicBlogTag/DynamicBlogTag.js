import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RecentBlog from "../RecentBlog/RecentBlog";
import { tagBloglogData } from "../TagRelatedBlogData/Data";
import "./DynamicBlogTag.css";
import share from "../../../resource/icon/share (1).png";
import save from "../../../resource/icon/save.png";
import '../Blogs/Blogs.css'

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
      <section className="blog-bg">
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
                           <strong style={{ color: "gray" }} className="popular-dot">
                             .
                           </strong>{" "}
                           <p style={{ color: "gray" }} className="date">
                             10 min read
                           </p>
                           <strong className="blog-bottom-dot">.</strong>{" "}
                         </div>
                         <div className="blog-buttons">
                           <button className="soap-color-btn">
                             <small> Online Learning</small>
                           </button>{" "}
                           <button className="robin-egg-blue-btn mx-2">
                             Traditional
                           </button>{" "}
                           <button className="champagne-color-btn">Classroom</button>
                         </div>
                       </div>
                       <div className="share-div">
                         <img
                          //  onClick={() => {
                          //    openModal();
                          //    setLink(data.facebookShare);
                          //  }}
                           src={share}
                           alt=""
                         />
                       </div>
                     </div>
                   </div>
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
