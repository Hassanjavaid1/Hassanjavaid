import React, { Suspense, useEffect, useRef } from "react";
import "./App.css";
import Preloader from "./components/javascript/Preloader";
import CircularProgress from "./components/javascript/CircularProgress";
import { BrowserRouter } from "react-router-dom";
import Aos from "aos";
import LocomotiveScroll from "locomotive-scroll";

const Navbar = React.lazy(() => import("./components/javascript/Navbar"));
const HeroSection = React.lazy(() =>
  import("./components/javascript/HeroSection")
);
const Mywork = React.lazy(() => import("./components/javascript/Mywork"));
const MySkills = React.lazy(() => import("./components/javascript/MySkills"));
const Certification = React.lazy(() =>
  import("./components/javascript/Certification")
);
const Contact = React.lazy(() => import("./components/javascript/Contact"));
const Footer = React.lazy(() => import("./components/javascript/Footer"));

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-sine",
      once: true,
      offset: 15,
    });
    Aos.refresh();

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current, // Required: Your scroll container
      smooth: true, // Enable smooth scrolling for desktop
      smoothMobile: true, // Enable smooth scrolling for mobile
      inertia: 0.75, // Adjust scroll inertia
      //   getSpeed: true, // Track scroll speed (optional)
      getDirection: true, // Track scroll direction (optional)
      gestureDirection: "vertical", // Vertical scrolling
      scrollFromAnywhere: true, // Allow scrolling from anywhere
      resetNativeScroll: true, // Prevent native scroll issues
      reloadOnContextChange: true, // Reload scroll on DOM changes
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <BrowserRouter basename="/Hassanjavaid">
          <div className="hero_background" ref={scrollContainerRef}>
            <Navbar />
            <HeroSection data-scroll />
          </div>
          <div className="mywork" data-scroll>
            <Mywork />
          </div>
          <div className="myskills" data-scroll>
            <MySkills />
          </div>
          <div className="certificates" data-scroll>
            <Certification />
          </div>
          <div className="contact" data-scroll>
            <Contact />
          </div>
          <div className="bg-[#0f0715]" data-scroll>
            <Footer />
          </div>
        </BrowserRouter>
      </Suspense>
      <CircularProgress />
    </>
  );
}

export default App;
