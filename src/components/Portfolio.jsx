import React from 'react';
import Project from './Project';

const projects = [
  {
    title: "Cardhub",
    image: "/project-images/cardhub-preview.png",
    description: "A business card generator application that allows users to create, customize, and manage digital business cards.",
    deployedLink: "https://hannahliz0.github.io/bis-card-gen/",
    githubLink: "https://github.com/Hannahliz0/bis-card-gen"
  },
  {
    title: "Readme Gen",
    image: "/project-images/readme-gen-demo.png",
    description: "A command-line application that dynamically generates professional README files for software projects.",
    deployedLink: "https://drive.google.com/file/d/1nk4OMNxw6h-QttnoP2_uulGwCVJkZvlU/view",
    githubLink: "https://github.com/pamar123/RM-GEN-APP"
  },
  {
    title: "Vehicle Builder",
    image: "/project-images/vehicle-builder-demo.png",
    description: "An interactive application for customizing and building virtual vehicles.",
    deployedLink: "https://www.youtube.com/watch?v=SVIulAzNmSM",
    githubLink: "https://github.com/pamar123/VehicleBuilder"
  }
];

function Portfolio() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Project 
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;