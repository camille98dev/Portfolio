import React, { useRef } from "react";
import Topbar from "../../components/Topbar";
import Hero from "../../components/Hero";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

const Home = () => {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar
        handleScrollToProjects={handleScrollToProjects}
        handleScrollToAboutMe={handleScrollToAboutMe}
      />
      <div className="flex-1">
        <Hero />
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
