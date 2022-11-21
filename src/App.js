import React from "react";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Loading from "./components/Loading/Loading";
 
import { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home/Home.js"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const Career = React.lazy(() => import("./pages/Career/Career"));
const MachineLearning = React.lazy(() =>
  import("./pages/MachineLearning/MachineLearning")
);
const EmbeddedFirmware = React.lazy(() =>
  import("./pages/EmbeddedFirmware/EmbeddedFirmware")
);
const HardwareEngineering = React.lazy(() =>
  import("./pages/HardwareEgineering/HardwareEngineering")
);
const Contact = React.lazy(() => import("./pages/Contact/Contact.js"));
const BA3E = React.lazy(() => import("./pages/BA3E/BA3E"));
const FOCII = React.lazy(() => import("./pages/FOCII/FOCII.js"));
const FOCIIce = React.lazy(() => import("./pages/FOCIIce/FOCIIce"));
const FOCIIwebinar = React.lazy(() =>
  import("./pages/FOCIIwebinar/FOCIIwebinar")
);
const FOCIIeducation = React.lazy(() =>
  import("./pages/FOCIIeducation/FOCIIeducation")
);
const FociiShopper = React.lazy(() =>
  import("./pages/FociiShopper/FociiShopper")
);
const Abha = React.lazy(() => import("./pages/Abha/Abha"));
const Science = React.lazy(() => import("./pages/Science/Science"));
const AbhaScience = React.lazy(() => import("./pages/AbhaScience/AbhaScience"));
const Neumar = React.lazy(() => import("./pages/Neumar/Neumar"));
const BlogPage = React.lazy(() => import("./pages/BlogPage/BlogPage"));
const LearnAnalytics = React.lazy(() =>
  import("./pages/BlogPosts/LearnAnalytics")
);
const VideoManaging = React.lazy(() =>
  import("./pages/BlogPosts/VideoManaging")
);
const OnlineTeachings = React.lazy(() =>
  import("./pages/BlogPosts/OnlineTeachings")
);
const OnlineLearning = React.lazy(() =>
  import("./pages/BlogPosts/OnlineLearning")
);
const DynamicTagBlogs = React.lazy(() =>
  import("./pages/DynamicTagBlogs/DynamicTagBlogs")
);

function App() {
  return (
    <HashRouter >
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route
            path="/career/applyjob/machine_learning"
            element={<MachineLearning />}
          />
          <Route
            path="/career/applyjob/embedded_firmware"
            element={<EmbeddedFirmware />}
          />
          <Route
            path="/career/applyjob/hardware_engineering"
            element={<HardwareEngineering />}
          />
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
          <Route path="/blog/tag/:tagName" element={<DynamicTagBlogs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </HashRouter >
  );
}

export default App;
