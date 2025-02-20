import { useState } from "react";

function Certificates() {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  const certificatesData = [
    {
      title: "Full Stack Web Development Certification",
      description: "A certificate earned after completing a full-stack web development course, covering HTML, CSS, JavaScript, React, Node.js, and more.",
      imageUrl: "https://link-to-certificate-image.com/certificate1.jpg", // Replace with the actual URL of your certificate image
      link: "https://your-certificate-link.com/certificate1", // Optionally, you can link to the certificate verification page
    },
    {
      title: "JavaScript Mastery Certification",
      description: "A certification that verifies deep knowledge in JavaScript and modern JavaScript frameworks.",
      imageUrl: "https://link-to-certificate-image.com/certificate2.jpg", // Replace with the actual URL of your certificate image
      link: "https://your-certificate-link.com/certificate2", // Optionally, you can link to the certificate verification page
    },
    // Add more certificates as needed
  ];

  return (
    <div>
      {/* Button to toggle visibility */}
      <button
        onClick={() => setIsVisible(!isVisible)} // Toggle visibility
        className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition mb-4 mx-auto"
      >
        {isVisible ? "Close" : "View My Certificates"}
      </button>

      {/* Conditional rendering of certificates section */}
      {isVisible && (
        <section id="certificates" className="py-20 bg-cyan-700">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Certificates</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certificatesData.map((certificate, index) => (
                <div
                  key={index}
                  className="bg-gray-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-semibold mb-3">{certificate.title}</h3>
                  <p className="text-black mb-4">{certificate.description}</p>
                  <div className="mb-4">
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <a
                    href={certificate.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Certificates;
