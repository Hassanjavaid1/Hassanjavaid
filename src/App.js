import React, { Suspense, useEffect } from "react";
import "./App.css";
import Preloader from "./Components/JavaScript/Preloader";
import CircularProgress from "./Components/JavaScript/CircularProgress";
import { BrowserRouter } from "react-router-dom";
import Aos from "aos";

const Navbar = React.lazy(() => import("./Components/JavaScript/Navbar"));
const HeroSection = React.lazy(() =>
  import("./Components/JavaScript/HeroSection")
);
const Mywork = React.lazy(() => import("./Components/JavaScript/Mywork"));
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
          <div className="hero_background">
            <Navbar />
            <HeroSection />
          </div>
          <div className="mywork">
            <Mywork />
          </div>
          <div className="myskills">
            <MySkills />
          </div>
          <div className="contact">
            <Contact />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </BrowserRouter>
      </Suspense>
      <CircularProgress />
    </>
  );
}

export default App;
