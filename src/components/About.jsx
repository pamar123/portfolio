import React from 'react';
import profileImage from '../IMG_3887.jpg'; 

function About() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={profileImage}
          alt="Amar"
          className="rounded-full w-64 h-64 object-cover"
        />
        <div>
          <p className="text-lg mb-4">
            Hello! I'm Amar, a passionate web developer with a focus on creating
            responsive, user-friendly applications. With expertise in React, Node.js,
            and modern web technologies, I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
          <p className="text-lg mb-4">
            My journey in web development started this year. Since then,
            I've worked on various projects, from e-commerce platforms to social media
            applications, always striving to write clean, maintainable code and create
            exceptional user experiences.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me playing sports. I'm always
            eager to learn new technologies and take on challenging projects that push
            my skills to the next level.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;