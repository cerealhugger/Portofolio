const base = import.meta.env.BASE_URL; // this will be "/Portofolio/" in prod, "/" locally

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description here",
    image: `${base}projects/project1.png`,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Another description",
    image: `${base}projects/project2.png`,
  },
  {
    id: 3,
    title: "Project 3",
    description: "Another description",
    image: `${base}projects/project3.png`,
  },
  // ... etc
];

export default projects;
