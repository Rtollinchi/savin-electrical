import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-primary text-textDark p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-accent">Savin Electrical Corp.</h1>
          <ul className="flex space-x-6 text-lg">
            <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link to="/projects" className="hover:text-accent transition">Projects</Link></li>
            <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6 flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-primary text-textLight text-center p-4">
        © {new Date().getFullYear()} Savin Electrical. All rights reserved.
      </footer>
    </div>
  );
}
