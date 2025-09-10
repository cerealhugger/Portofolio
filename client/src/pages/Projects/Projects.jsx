import React, { useState } from "react";
import "./Projects.css";
import projects from "../../assets/projects";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  const [page, setPage] = useState(0);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = page * projectsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center relative"
    >

      {/* Gallery wrapper (fixed width, relative for arrows) */}
      <div className="relative top-[20px] w-full max-w-6xl mx-auto">
        {/* Grid stays centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-[80%]">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>

        {/* Left Arrow */}
        {totalPages > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-[-150px] top-1/2 -translate-y-1/2 
                       text-gray-300 hover:text-gray-600 
                       transition-colors text-6xl leading-none"
          >
            {"<"}
          </button>
        )}

        {/* Right Arrow */}
        {totalPages > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-[-150px] top-1/2 -translate-y-1/2 
                       text-gray-300 hover:text-gray-600 
                       transition-colors text-6xl leading-none"
          >
            {">"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
