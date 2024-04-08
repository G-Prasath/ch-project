import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from "./components/NavScrollTop";

const Home = lazy(() => import("./pages/new/Home"));
const About = lazy(() => import("./pages/new/About"));
const Service = lazy(() => import("./pages/new/Services"));
const Project = lazy(() => import("./pages/new/OurProjects"));
const Contact = lazy(() => import("./pages/new/ContactUs"));

// const Work = lazy(() => import("./pages/Work"));
// const WorkDetails = lazy(() => import("./pages/WorkDetails"));
// const BlogGrid = lazy(() => import("./pages/BlogGrid"));
// const BlogClassic = lazy(() => import("./pages/BlogClassic"));
// const BlogDetails = lazy(() => import("./pages/BlogDetails"));
// const BlogCategories = lazy(() => import("./pages/BlogCategories"));
// const BlogTag = lazy(() => import("./pages/BlogTag"));

// const Loading = lazy(() => import("./components/loading/loading.js"));

function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: "ease",
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <NavScrollTop>
        <Suspense fallback={<div />}>
          <Routes>
            <Route
              path={`${process.env.PUBLIC_URL + "/"}`}
              element={<Home />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/about"}`}
              element={<About />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/services/*"}`}
              element={<Service />}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/project"}`}
              element={<Project />}
            />

            {/* <Route path={`${process.env.PUBLIC_URL + "/work"}`} element={<Work/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/work-details/:id"}`} element={<WorkDetails/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} element={<BlogGrid/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-classic"}`} element={<BlogClassic/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} element={<BlogTag/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} element={<BlogCategories/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}element={<BlogDetails/>} /> */}
            <Route
              path={`${process.env.PUBLIC_URL + "/contact"}`}
              element={<Contact />}
            />
          </Routes>
        </Suspense>
      </NavScrollTop>
    </Router>
  );
}

export default App;
