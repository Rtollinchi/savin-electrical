import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formsubmit.co/YOUR_EMAIL", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setResponseMessage("Message sent successfully!");
      e.target.reset();
    } else {
      setResponseMessage("Error sending message. Please try again.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-primary text-textDark p-6 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-accent">Savin Electrical Corp.</h1>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="#home" className="hover:text-accent transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-accent transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition">
                About
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-accent transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg text-white text-center">
          <h1 className="text-5xl font-bold">
            Powering Your Home with Excellence
          </h1>
          <p className="mt-4 text-lg">
            Residential & Commercial Electrical Services
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-accent text-primary font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-textDark mb-6">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 container mx-auto px-6">
          {[
            {
              title: "Landscape Lighting",
              img: "/projects/landscape.jpg",
              desc: "Enhance your outdoor space with lighting.",
            },
            {
              title: "Service Upgrades",
              img: "/projects/upgrades.jpg",
              desc: "Upgrade your electrical panel for safety.",
            },
            {
              title: "Chandelier Installations",
              img: "/projects/chandelier.jpg",
              desc: "Elegant chandelier installations.",
            },
            {
              title: "Panel Replacements",
              img: "/projects/panel.jpg",
              desc: "Modernize your home's power system.",
            },
            {
              title: "General Electrical Work",
              img: "/projects/general.jpg",
              desc: "From wiring to troubleshooting.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="py-20 bg-primary text-textLight text-center"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold">About Savin Electrical Corp.</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            We are a trusted residential electrical company, providing expert
            services and high-quality installations.
          </p>
        </div>
      </section>

      <section id="careers" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-textDark mb-6">Join Our Team</h2>
        <div className="container mx-auto px-6">
          <p className="max-w-2xl mx-auto text-gray-700">
            Looking for a rewarding career in electrical work? We’re hiring
            skilled electricians and apprentices.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary">Open Positions</h3>
            <ul className="mt-4 space-y-4">
              <li className="bg-gray-100 p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold">Licensed Electrician</h4>
                <p className="text-gray-600">Full-time • Competitive Pay</p>
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold">Electrical Apprentice</h4>
                <p className="text-gray-600">Full-time • Hands-on Training</p>
              </li>
            </ul>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-block bg-accent text-primary font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            Apply Now
          </a>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold text-textDark mb-6">Contact Us</h2>
        <div className="container mx-auto px-6">
          <form
            id="contactForm"
            className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border p-2 mb-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border p-2 mb-4"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (Optional)"
              className="w-full border p-2 mb-4"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full border p-2 mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-accent text-primary font-bold px-6 py-3 rounded-lg w-full hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
          <p id="responseMessage" className="mt-4 text-green-600 hidden">
            Message sent successfully!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-textLight text-center p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Savin Electrical Corp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/savinelectrical"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/facebook.png"
                alt="Facebook"
                className="h-6 w-6 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.instagram.com/savin_electrical_corp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/instagram.png"
                alt="Instagram"
                className="h-6 w-6 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
        <div className="text-sm mt-4">
          <a
            href="https://www.flaticon.com/free-icons/facebook"
            title="facebook icons"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <span className="mx-2"></span>
          <a
            href="https://www.flaticon.com/free-icons/instagram-logo"
            title="instagram logo icons"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </footer>
    </div>
  );
}
