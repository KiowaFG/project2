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
          <li className="navbarLi">All games </li>
        </Link>
        <Link to="/favorites">
          <li className="navbarLi">Favorites</li>
        </Link>
        <Link to="/addgame">
          <li className="navbarLi">Add game</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;