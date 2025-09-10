// src/assets/projects.js
const base = import.meta.env.BASE_URL;
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A web app for analyzing DNA sequences.",
    image: `${base}projects/project1.png`
  },
  {
    id: 2,
    title: "Project Two",
    description: "Mobile app for organizing study notes.",
    image: `${base}projects/project2.png`
  },
  {
    id: 3,
    title: "Project Three",
    description: "AI-powered chatbot for health tracking.",
    image: `${base}projects/project3.png`
  },
  {
    id: 4,
    title: "Project Four",
    description: "Visualization tool for protein structures.",
    image: `${base}projects/project4.png`
  },
  {
    id: 5,
    title: "Project Five",
    description: "Interactive learning platform for CS students.",
    image: `${base}projects/project5.png`
  },
  {
    id: 6,
    title: "Project Six",
    description: "Automation pipeline for bioinformatics workflows.",
    image: `${base}projects/project6.png`
  },
  {
    id: 7,
    title: "Project Seven",
    description: "Cloud-based solution for data storage and sharing.",
    image: `${base}projects/project7.png`
  }
]

export default projects
