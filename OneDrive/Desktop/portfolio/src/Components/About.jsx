import { useState } from "react";
import Certificates from "./Certificates"; // Import Certificates component

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
          <h2 className="text-4xl text-white font-bold mb-4">About Segera Amos</h2>
          <p className="text-white mb-4">
            I'm a passionate web developer with expertise in modern web technologies. 
            I love creating responsive and user-friendly web applications.
          </p>
          <a 
            href="#contact" 
            className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-900 transition"
          >
            Contact Me
          </a>
          <button
            onClick={() => setIsVisible(!isVisible)} // Toggle visibility
            className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-900 transition ml-4"
          >
            {isVisible ? "Hide Certificates" : " My Certificates"}
          </button>
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
