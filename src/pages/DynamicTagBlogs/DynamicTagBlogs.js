import React from "react";
import DynamicBlogTag from "../../components/Blog/DynamicBlogTag/DynamicBlogTag";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const DynamicTagBlogs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DynamicBlogTag></DynamicBlogTag>
      <Footer></Footer>
    </div>
  );
};

export default DynamicTagBlogs;
