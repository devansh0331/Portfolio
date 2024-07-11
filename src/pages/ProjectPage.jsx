import React from "react";
import ProjectCard from "../components/ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectPage() {
  return (
    <div className="w-full h-screen flex flex-col  items-center justify-center md:justify-evenly text-darkText">
      <div className="text-darkYellow">
        <h1 className="text-3xl text-darkYellow font-semibold text-center">
          My Recent Projects
        </h1>
        <p className="text-xl text-center text-white">
          Here are a few projects I've worked on
        </p>
      </div>

      <div className="w-4/5 grid md:grid-cols-3 items-center gap-5 ">
        <a href="">
          <ProjectCard />
        </a>
        <a href="">
          <ProjectCard />
        </a>
        <a href="">
          <ProjectCard />
        </a>
        <a href="">
          <ProjectCard />
        </a>
        <a href="">
          <ProjectCard />
        </a>
        <a href="">
          <ProjectCard />
        </a>
      </div>
    </div>
  );
}

export default ProjectPage;
