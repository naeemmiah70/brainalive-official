import { React, useEffect } from "react";
import VideoManage from "../../components/Blogs/VideoManage/VideoManage";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const VideoManaging = () => {
  useEffect(() => {
    document.title =
      "Is your educational video effectively managing the cognitive load of your viewers? | Braina Live Blog";
  }, []);
  return (
    <>
      <Navbar />
      <VideoManage />
      <Footer />
    </>
  );
};

export default VideoManaging;
