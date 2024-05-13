import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo-img" />
      </Link>
      <ul className="navbarUl">
        <Link to="/all-games">
          <li>All games </li>
        </Link>
        <Link to="/favorites">
          <li>Favorites</li>
        </Link>
        <Link to="/about-me">
          <li>About me</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;