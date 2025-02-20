function Projects() {
    const projectsData = [
        {
          title: "Project 1",
          description: "Description for Project 1",
          technologies: ["React", "JavaScript", "CSS"],
          link: "#"
        },
        {
          title: "Project 2",
          description: "Description for Project 2",
          technologies: ["Node.js", "Express", "MongoDB"],
          link: "#"
        },
        // Add more projects as needed
      ];


    return (
      <section id="projects" className="py-20 bg-cyan-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Projects;