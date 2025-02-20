function Skills() {
    const skills = [
      "JavaScript", "React", "TypeScript", 
      "Tailwind CSS", "Node.js","Digital Marketing"
    ];
  
    return (
      <section id="skills" className="bg-cyan-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white font-bold text-center mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Skills;