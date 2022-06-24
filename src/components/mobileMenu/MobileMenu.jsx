import "./mobileMenu.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeHambugerMenu } from "../../redux/uiSlice";
import { motion, AnimatePresence } from "framer-motion";

const menuAnimate = {
  initial: { opacity: 0, x: 150 },
  animate: {
    opacity: 1,
    x: 0,
    
  },
};
const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7, transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0 } },
  };

export const MobileMenu = () => {
  const dispatch = useDispatch();
  

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(closeHambugerMenu());
  };

  return (
    <>
      <motion.div 
      className="navbar__mobile_menu_overlay "
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      ></motion.div>
      
        <motion.div
          className="navbar__mobile_menu_container"
          
          initial={{ x: 500 }}
          animate={{ x: 0, transition:{duration: 0.5} }}
         exit={{x: 500}}
        >
          <div className="navbar__mobile_menu_main">
            <div className="navbar__mobile_menu_close" onClick={handleClick}>
              <i class="fa-solid fa-x"></i>
            </div>

            <motion.ul
              className="navbar__mobile_menu_links"
              initial={"initial"}
              animate={"animate"}
              transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
            >
              <motion.li variants={menuAnimate}>
                <Link to={"/productos"} onClick={handleClick}>
                  Productos
                </Link>
              </motion.li >
              
              <motion.li variants={menuAnimate}>
                <Link to={"/productos"} onClick={handleClick}>
                  Talles
                </Link>
              </motion.li>
              
              <motion.li variants={menuAnimate}>
                <Link to={"/productos"} onClick={handleClick}>
                  Nosotros
                </Link>
              </motion.li>
              
              <motion.li variants={menuAnimate}>
                <Link to={"/productos"} onClick={handleClick}>
                  QR
                </Link>
              </motion.li>
              
              <motion.li variants={menuAnimate}>
                <Link to={"/productos"} onClick={handleClick}>
                  Contacto
                </Link>
              </motion.li>

             
            
            </motion.ul>
          </div>
        </motion.div>
      
    </>
  );
};
