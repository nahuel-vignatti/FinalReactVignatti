import "./footer.css";
import social from "../../assets/social.png";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <footer className="d-flex flex-row justify-content-between p-3 mt-2">
            <NavLink to={"/"}><img src={logo} alt="Logo Vivero" className="logoViveroSmall" /></NavLink>
            <a href="#"><img src={social} alt="Social Media" className="socialLogos" /></a>
        </footer>
    )
}
export default Footer;