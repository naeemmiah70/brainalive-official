import React from "react";
import Blog from "../../components/Blog/Blog";
import BlogHeader from "../../components/Blog/BlogHeader/BlogHeader";
import Sidebar from "../../components/Blog/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <Blog></Blog>
      <Sidebar/>
      <Footer></Footer>
    </>
  );
};

export default BlogPage;
