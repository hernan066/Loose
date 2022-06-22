import "./navbar.css";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  
  const [hamburgerIcon, setHamburgerIcon] = useState(false);
  
  
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <Link to={"/"}>
            <motion.img
              src={images.logo}
              alt="logo"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 1.2 },
              }}
              exit={{ opacity: 0 }}
            />
          </Link>
        </div>

        <motion.ul
        className="nav__list"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 1.2 },
          }}
          exit={{ opacity: 0 }}
        >
          <li>
            <Link to={"/productos"}>Productos</Link>
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
        </motion.ul>
        <div
              className={`hamburger ${hamburgerIcon ? "is-active" : ""}`}
              id="hamburger-1"
              onClick={() => setHamburgerIcon(!hamburgerIcon)}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
