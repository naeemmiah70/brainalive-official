import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Loading from "./components/Loading/Loading";

import { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home/Home.js"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const Career = React.lazy(() => import("./pages/Career/Career"));
const Contact = React.lazy(() => import("./pages/Contact/Contact.js"));
const BA3E = React.lazy(() => import("./pages/BA3E/BA3E"));
const FOCII = React.lazy(() => import("./pages/FOCII/FOCII.js"));
const FOCIIce = React.lazy(() => import("./pages/FOCIIce/FOCIIce"));
const FOCIIwebinar = React.lazy(() => import("./pages/FOCIIwebinar/FOCIIwebinar"));
const FOCIIeducation = React.lazy(() => import("./pages/FOCIIeducation/FOCIIeducation"));
const FociiShopper = React.lazy(() => import("./pages/FociiShopper/FociiShopper"));
const Abha = React.lazy(() => import("./pages/Abha/Abha"));
const Science = React.lazy(() => import("./pages/Science/Science"));
const AbhaScience = React.lazy(() => import("./pages/AbhaScience/AbhaScience"));
const Neumar = React.lazy(() => import("./pages/Neumar/Neumar"));
const BlogPage = React.lazy(() => import("./pages/BlogPage/BlogPage"));
const LearnAnalytics = React.lazy(() => import("./pages/BlogPosts/LearnAnalytics"));
const VideoManaging = React.lazy(() => import("./pages/BlogPosts/VideoManaging"));
const OnlineTeachings = React.lazy(() => import("./pages/BlogPosts/OnlineTeachings"));
const OnlineLearning = React.lazy(() => import("./pages/BlogPosts/OnlineLearning"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ba3e" element={<BA3E />} />
          <Route path="/focii" element={<FOCII />} />
          <Route path="/focii_ce" element={<FOCIIce />} />
          <Route path="/focii_webinar" element={<FOCIIwebinar />} />
          <Route path="/focii_education" element={<FOCIIeducation />} />
          <Route path="/focii_shopper" element={<FociiShopper />} />
          <Route path="/neumar" element={<Neumar />} />
          <Route path="/abha" element={<Abha />} />
          <Route path="/science" element={<Science />} />
          <Route path="/abha_science" element={<AbhaScience />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/learn_analytics" element={<LearnAnalytics />} />
          <Route path="/blog/video_managing" element={<VideoManaging />} />
          <Route path="/blog/online_teaching" element={<OnlineTeachings />} />
          <Route path="/blog/online_learning" element={<OnlineLearning />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
