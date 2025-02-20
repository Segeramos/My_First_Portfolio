import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/contact';
import Certificates from './Components/Certificates';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaBars } from 'react-icons/fa';  // Use FaBars for hamburger
import { useState } from 'react';

function App() {
  // State to handle the visibility of the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div className="min-h-screen bg-gray">
      <nav className="bg-cyan-700 text-white shadow-md py-4 fixed w-full top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>

          {/* Hamburger Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              <FaBars /> {/* Use FaBars for the hamburger icon */}
            </button>
          </div>

          {/* Desktop Navbar Links */}
          <div className="space-x-4 hidden md:flex">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar Links (Hamburger Menu) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}  fixed top-16 left-0 right-0 bg-cyan-900 text-center text-white shadow-md z-50`} id="hamburger-menu">
        <a href="#about" className="block px-4 py-2 hover:bg-cyan-700" onClick={closeMenu}>About</a>
        <a href="#projects" className="block px-4 py-2 hover:bg-cyan-700" onClick={closeMenu}>Projects</a>
        <a href="#skills" className="block px-4 py-2 hover:bg-cyan-700" onClick={closeMenu}>Skills</a>
        <a href="#contact" className="block px-4 py-2 hover:bg-cyan-700" onClick={closeMenu}>Contact</a>
      </div>

      <main className="pt-16">
        <About />
        <Projects />
        <Skills />
        <Contact />
        
      </main>

      <footer className="bg-black text-white py-4 text-center">
        <p>© 2024 S</p>
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-blue-500 hover:text-blue-600" />
            </a>
            <a href="https://github.com/Segeramos" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="text-white-800 hover:text-gray-900" />
            </a>
            <a href="https://www.linkedin.com/in/amos-segera-57a13a25b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-blue-700 hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="text-pink-500 hover:text-pink-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

