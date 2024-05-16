import { Link } from "react-router-dom";
import "./Footer.css"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import gmail from "../assets/correo-electronico.png"
import github from "../assets/social.png"
import Logo from "../assets/GameQuest.jpg"

function Footer() {

    return (
      <>
        <div className="footer">
        <Link to={"/"}>
        
        <img className="logo logoFooter" src={Logo} alt="" />
      </Link>
            <div className="footerBtn">
                <a href="https://www.linkedin.com/in/kiowa-fiala-62bb1a235/"> 
                <img className="socialBtn" src={linkedin} alt="" />
                </a>
                <a href="https://www.instagram.com/">   
                <img className="socialBtn" src={instagram} alt="" />
                </a>
                <a href="https://github.com/">
                <img className="socialBtn" src={github} alt="" />
                </a>
                <img className="socialBtn" src={gmail} alt="" />
            </div>
            <p className="footer-paragraph">&copy; Created by: <br /> KFGGaming</p>
        </div>
      </>
    )
  }
  
  export default Footer
  