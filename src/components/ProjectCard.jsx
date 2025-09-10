import React from "react";
import projects from "../assets/projects";

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="w-[350px] h-[300px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col 
                    hover:shadow-2xl transition-shadow duration-300 cursor-pointer">

        {/* Image part (140px tall) */}
        <div className="h-[200px] w-full">
            <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            />
        </div>
        {/* Label part (100px tall) */}
        <div className="h-[100px] w-full p-4 bg-white flex flex-col items-center justify-center text-center">
                <h3 className="font-bold text-lg text-black">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>


        </div>
    );
};

export default ProjectCard;
