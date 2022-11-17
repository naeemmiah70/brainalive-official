import React, { useEffect } from "react";
import Blog from "../../components/Blog/Blog";
import BlogHeader from "../../components/Blog/BlogHeader/BlogHeader";
import Sidebar from "../../components/Blog/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useRef } from "react";

const BlogPage = () => {
  useEffect(() => {
    document.title = "Braina Live Blog";
  }, []);
  const componentRef = useRef();


  return (
    <div id="blogHome">
      <Navbar />
      <div ref={componentRef}>
        <BlogHeader />
        <Blog></Blog>
        <Sidebar componentRef={componentRef} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
