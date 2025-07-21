import React from 'react';

const projects=[
    {
      title: "Blog Website",
      description: "A full-stack blog platform where users can create, edit, and share posts. Includes user authentication, image uploads, and a responsive UI.",
      image: "/blog.webp"
    },
    {
      title: "Agriculture Technology",
      description: "An innovative web app designed to help farmers connect with customers, track crop seasons, and get real-time price recommendations based on seasonal trends.",
      image: "agr.jpg"
    },
    {
      title: "LPG Gas Detector",
      description: "An IoT-based system that detects LPG gas leaks and sends real-time alerts via SMS while displaying the leak location on a connected dashboard.",
      image: "lpg.jpg"
    }
  ]
  

export default function Projects() {
  return (
    <>
      
    <div className=" text-white py-10 px-5 pt-20" id='projects'>
    <hr  className="text-gray-500 w-[200vh] mx-10"/>
      <div className="text-center mb-10">
      <h2 className="text-4xl font-bold pt-10"  data-aos="zoom-in-up">My <span className='text-cyan-500'>PROJECTS</span></h2>
        <p className="text-sm text-gray-400 pt-2">some of my recent works</p>
        
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-00 rounded-lg overflow-hidden shadow-lg "  data-aos="zoom-in" data-aos-duration="1000">
            <img src={project.image} alt={project.title} className="w-full h-[50vh] object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
