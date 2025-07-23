import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Projects = () => {
  const projects = [
    {
      title: "Wotic - Web Development Platform",
      description: "A website that showcases the tourist destinations of Wonosobo with a modern design and engaging user experience",
      images: [
        "/images/projects/wotic1.png",
        "/images/projects/wotic2.png",
        "/images/projects/wotic3.png"
      ],
      tags: ["Laravel", "UI/UX", "Web"],
      liveUrl: "web.wotic.id",
      githubUrl: "https://github.com/Aufabeem"
    },
    {
      title: "Premium Plus Laundry ",
      description: "We have created a professional website using Premium WordPress for Alton Laundry, a modern laundry business that prioritizes convenience and customer trust.",
      images: [
        "/images/projects/laundry1.jpeg",
        "/images/projects/laundry2.jpeg"
      ],
      tags: ["wordpress", "Responsive Design", "UI/UX"],
      liveUrl: "#",
      githubUrl: "https://github.com/Aufabeem"
    },
    {
      title: "Kepoint",
      description: "In the process of user interface (UI) and user experience (UX) design, I use Figma as the main tool because of the flexibility and real-time collaboration it offers.Elegant restaurant website featuring menu showcase...",
      images: [
        "/images/projects/kepoin1.jpeg",
        "/images/projects/kepoin2.jpeg",
        "/images/projects/kepoin3.jpeg"
      ],
      tags: ["UI/UX", "Figma", "Web Design"],
      liveUrl: "https://www.figma.com/design/vMvoNYVJPYXz3a4cN6O2Gb/Untitled?node-id=0-1&t=RQ5CmnM8S1b7ETYv-1",
      githubUrl: "https://github.com/Aufabeem"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                {project.images ? (
                  <ImageCarousel images={project.images} />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Aufabeem"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 font-medium"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
