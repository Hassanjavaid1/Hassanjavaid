import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import "./AppMedia.css";
import Preloader from "./Components/JavaScript/Preloader";
import CircularProgress from "./Components/JavaScript/CircularProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";

const Navbar = React.lazy(() => import("./Components/JavaScript/Navbar"));
const Hero_Section = React.lazy(() =>
  import("./Components/JavaScript/Hero_Section")
);
const Services = React.lazy(() => import("./Components/JavaScript/Services"));
const Mywork = React.lazy(() => import("./Components/JavaScript/Mywork"));
const Resume = React.lazy(() => import("./Components/JavaScript/Resume"));
const MySkills = React.lazy(() => import("./Components/JavaScript/MySkills"));
const Contact = React.lazy(() => import("./Components/JavaScript/Contact"));
const Footer = React.lazy(() => import("./Components/JavaScript/Footer"));

function App() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-sine",
      once: true,
      offset: 15,
    });
  }, []);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <BrowserRouter basename="/Hassanjavaid">
          <div className="container">
            <Navbar />
            <Hero_Section />
            <div className="mywork">
              <Mywork />
            </div>
            <div className="mywork myskills">
              <MySkills />
            </div>
            <div className="contact">
              <Contact />
            </div>
            <div className="footer">
              <Footer />
            </div>

          </div>
        </BrowserRouter>
      </Suspense>
      <CircularProgress />
    </>
  );
}

export default App;
