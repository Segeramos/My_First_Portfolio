import { useState } from "react";


function About() {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  return (
    <section id="about" className="bg-cyan-900 py-20 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mr-8">
          <img 
            src="src/assets/photos/3d23937a-de78-4791-a0a0-f5423c8169be.jpeg" 
            alt="Profile" 
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl text-cyan-300 font-bold mb-4">About Segera Amos</h2>
          <p className="text-cyan-200 mb-4">
          I'm a talented front-end developer with a knack for creating visually appealing and user-friendly websites. Specializing in HTML, CSS, JavaScript, and frameworks like React and Angular, Amos blends design and functionality to craft seamless digital experiences. 
          With a focus on responsiveness, accessibility, and performance, he ensures every project delivers smooth usability across all devices. Constantly learning and staying up-to-date with the latest trends, I i'm dedicated to pushing the boundaries of web development. 
          For anyone seeking both creativity and technical expertise, Amos is a standout in the field.
          </p>
          <a 
            href="#contact" 
            className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition"
          >
            Contact Me
          </a>
         
        </div>
      </div>

      {/* Floating Certificates Section */}
      {isVisible && (
        <div className="absolute top-20 right-10 bg-white shadow-lg rounded-lg p-4 z-50">
          <Certificates />
        </div>
      )}
    </section>
  );
}

export default About;
