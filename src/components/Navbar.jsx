import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/GameQuest.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        
        <img className="logo" src={Logo} alt="" />
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