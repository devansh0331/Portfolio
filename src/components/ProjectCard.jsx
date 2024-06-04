import React from "react";
import project from "../assets/projects/project.png";

function ProjectCard() {
  return (
    <div className="w-full h-full overflow-hidden bg-darkBg  rounded-lg">
      <img
        src={project}
        alt=""
        className="hover:scale-105 transition-all duration-500 w-full object-cover object-center filter grayscale hover:grayscale-0"
      />
    </div>
  );
}

export default ProjectCard;
