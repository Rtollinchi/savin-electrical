import { useState } from "react";
import ImageCarousel from "./components/ImageCarousel";

const projectImages = {
  "Landscape Lighting": [
    `/projects/landscape/IMG_5476.jpg`,
    `/projects/landscape/IMG_5479.JPG`
  ],
  "Chandelier Installations": Array.from({ length: 4 }, (_, i) => `/projects/chandelier/chandelier${i + 1}.jpeg`),
  "EV Charging Stations": [
    `/projects/ev-chargers/FullSizeRender.jpeg`
  ],
  "General Electrical Work": [
    `/projects/general/IMG_1522.jpg`,
    `/projects/general/IMG_1523.jpeg`,
    `/projects/general/IMG_0655.jpeg`,
    `/projects/general/IMG_0657.jpeg`
  ],
};

const services = [
  {
    icon: "💡",
    title: "Landscape & Outdoor Lighting",
    description: "Professional outdoor lighting design including holiday displays and architectural lighting"
  },
  {
    icon: "💎",
    title: "Custom Chandeliers & Fixtures",
    description: "Designer lighting installations including pendant clusters and statement pieces"
  },
  {
    icon: "🚗",
    title: "EV Charging Stations",
    description: "Electric vehicle charging station installation for residential properties"
  },
  {
    icon: "⚡",
    title: "General Electrical Work",
    description: "Complete electrical installations, repairs, panel upgrades and custom electrical solutions"
  },
  {
    icon: "🏠",
    title: "Residential Wiring",
    description: "Complete home electrical installations and rewiring services for safety and efficiency"
  },
  {
    icon: "🚨",
    title: "Emergency Service",
    description: "24/7 emergency electrical repairs and troubleshooting with professional equipment"
  }
];

export default function App() {
  const [responseMessage, setResponseMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);

    // Add hidden fields for FormSubmit configuration
    formData.append('_next', window.location.href + '#contact');
    formData.append('_subject', 'New Electrical Service Inquiry');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch("https://formsubmit.co/SavinElectrical@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully! We'll get back to you within 24 hours.");
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setResponseMessage("Error sending message. Please call us directly at (516) 737-4630.");
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm text-white p-4 shadow-2xl z-50 border-b border-yellow-400/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">⚡</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Savin Electrical Corp.
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            {['Home', 'Services', 'Projects', 'About', 'Careers', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-yellow-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="pt-4 space-y-2">
            {['Home', 'Services', 'Projects', 'About', 'Careers', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-300 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden scroll-offset"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/hero-image.jpg')"
        }}
      >
        <div className="bg-black/40 backdrop-blur-sm p-6 md:p-12 rounded-2xl text-white text-center max-w-4xl mx-4 border border-yellow-400/20">
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-xs md:text-sm font-medium border border-yellow-400/20">
              Licensed & Insured Electricians
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
            Powering Your World
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-300">
            Expert Electrical Solutions for Homes & Businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 text-center"
            >
              Get Free Quote
            </a>
            <a
              href="tel:5167374630"
              className="border-2 border-yellow-400 text-yellow-400 font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-center"
            >
              📞 Call Now: (516) 737-4630
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-offset">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple repairs to complex installations, we deliver reliable electrical solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-400/30 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 text-white scroll-offset">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See our craftsmanship in action through our recent electrical installations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Object.entries(projectImages).slice(0, 3).map(([title, images], index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400/50"
              >
                <div className="relative overflow-hidden">
                  <ImageCarousel images={images} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 mt-2">Professional installation with quality materials</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - centered */}
          <div className="flex justify-center mt-6 md:mt-8">
            {Object.entries(projectImages).slice(3).map(([title, images], index) => (
              <div
                key={index + 3}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400/50 max-w-md w-full"
              >
                <div className="relative overflow-hidden">
                  <ImageCarousel images={images} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 mt-2">Professional installation with quality materials</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-yellow-50 to-white scroll-offset">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                Why Choose Savin Electrical?
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed electricians with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">Available around the clock for electrical emergencies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">★</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600">All work backed by our satisfaction guarantee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-2xl text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Award-Winning Service</h3>
                <div className="mb-6">
                  <img
                    src="/projects/awards/longisland-choice-award.jpeg"
                    alt="Long Island Choice Awards Winner"
                    className="w-90 h-100 mx-auto rounded-lg mb-4 object-contain"
                  />
                  <p className="text-lg font-semibold">Long Island Choice Awards Winner</p>
                  <p className="text-sm">Best Electrical Company</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-gray-100 scroll-offset">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12">
            Looking for a rewarding career in electrical work? We offer competitive pay,
            comprehensive benefits, and opportunities for growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Licensed Electrician</h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>💼 Full-time Position</p>
                <p>📈 Growth Opportunities</p>
              </div>
              <ul className="text-left text-gray-600 space-y-1 text-sm">
                <li>• 3+ years experience required</li>
                <li>• Valid electrical license</li>
                <li>• Residential & commercial work</li>
              </ul>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Electrical Apprentice</h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>💼 Full-time Position</p>
                <p>🎓 Paid Training Program</p>
                <p>📚 Educational Support</p>
              </div>
              <ul className="text-left text-gray-600 space-y-1 text-sm">
                <li>• Entry level welcome</li>
                <li>• Eager to learn</li>
                <li>• Physical demanding work</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
            >
              Apply via Contact Form
            </a>
            <a
              href="mailto:savinelectrical@gmail.com?subject=Job Application - [Position Name]&body=Hello, I am interested in applying for a position at Savin Electrical. Please find my qualifications below:%0D%0A%0D%0APosition of Interest:%0D%0AExperience:%0D%0APhone:%0D%0AAvailability:%0D%0A%0D%0AThank you for your consideration."
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 text-center"
            >
              📧 Email Application
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white scroll-offset">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your electrical project? Contact us for a free consultation and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold">📞</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Call Us</h3>
                  <a href="tel:5167374630" className="text-yellow-400 text-lg md:text-xl hover:underline">
                    (516) 737-4630
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold">📧</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Email Us</h3>
                  <a href="mailto:savinelectrical@gmail.com" className="text-yellow-400 text-lg md:text-xl hover:underline break-all">
                    savinelectrical@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold">📍</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Service Areas</h3>
                  <p className="text-gray-300">Woodmere, New York & surrounding areas</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (Optional)"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    required
                  >
                    <option value="">Select Service Needed</option>
                    <option value="residential">Residential Wiring</option>
                    <option value="commercial">Commercial Electric</option>
                    <option value="panel">Panel Upgrade</option>
                    <option value="lighting">Lighting Design</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="smart-home">Smart Home Tech</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows="4"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full font-bold px-6 py-4 rounded-lg transition-all duration-300 ${
                    formStatus === 'sending'
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:scale-105 shadow-lg'
                  }`}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {responseMessage && (
                <div className={`mt-4 p-4 rounded-lg ${
                  formStatus === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                }`}>
                  {responseMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">⚡</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  Savin Electrical Corp.
                </h3>
              </div>
              <p className="text-gray-400">
                Your trusted electrical contractor for residential and commercial projects.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
                <li><a href="#careers" className="hover:text-yellow-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 (516) 737-4630</p>
                <p>📧 savinelectrical@gmail.com</p>
                <p>📍 Woodmere, NY</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Savin Electrical Corp. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/savinelectrical"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 p-2"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://www.instagram.com/savin_electrical_corp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 p-2"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
