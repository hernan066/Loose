import "./navbar.css";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openHambugerMenu } from "../../redux/uiSlice";
import { MobileMenu } from "../mobileMenu/MobileMenu";

const Navbar = () => {
  const { hambugerMenu } = useSelector((state) => state.ui);
  const { products } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(openHambugerMenu());
  };
  const letter = currentUser?.username?.split(" ")[0]?.charAt(0);

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
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
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
          {currentUser === null ? (
            <li>
              <Link to={"/auth/login"}>
                <div className="user-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/usuario"}>
                <div className="user-icon text-user-icon">{letter}</div>
              </Link>
            </li>
          )}

          <li className="shopping__cart">
            {products.length !== 0 ? (
              <div className="shopping__cart-count">
                <p>{products.length}</p>
              </div>
            ) : null}

            <Link to={"/carrito"}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
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
