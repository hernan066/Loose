import "./navbar.css";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openHambugerMenu } from "../../redux/uiSlice";
import { MobileMenu } from "../mobileMenu/MobileMenu";

const Navbar = () => {
  const { hambugerMenu } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(openHambugerMenu());
  };

  return (
    <nav className="nav">
      <AnimatePresence exitBeforeEnter>
        {hambugerMenu ? <MobileMenu /> : null}
      </AnimatePresence>

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
            <Link to={"/contacto"}>Contacto</Link>
          </li>
          <li>
            <a href="#">Sobre Losse</a>
          </li>
          <li>
          <Link to={"/qr"}>QR</Link>
          </li>
        </motion.ul>
        <div className="hamburger" onClick={handlerClick}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
