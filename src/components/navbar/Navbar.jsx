import "./navbar.css";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div
          className="nav__logo"
         
        >
          <Link to={"/"}>
            <motion.img 
            src={images.logo} 
            alt="logo" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
            exit={{ opacity: 0 }}
            
            
            />
          </Link>
        </div>

        <ul>
          <li>
            <Link to={"/producto"}>Productos</Link>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Sobre Losse</a>
          </li>
          <li>
            <a href="#">QR</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
