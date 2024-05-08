import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border rounded-full py-5 px-6 m-5">
      <img src={logo} alt="Logo" className="ml-10" />
      <div className="flex gap-3 text-lg">
        <Link to="/registration">
          <button className="btn-1">Get Projects</button>
        </Link>
        <button className="btn-2">Onboard Talent</button>
      </div>
    </nav>
  );
};

export default Navbar;
