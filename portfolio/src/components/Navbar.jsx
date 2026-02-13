import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur text-white flex justify-between px-10 py-4 z-50">
      <div className="font-bold text-xl">AK</div>

      <div className="flex gap-8 text-sm">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;


