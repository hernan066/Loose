import "./mobileMenu.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeHambugerMenu } from "../../redux/uiSlice";

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
    <div className="navbar__mobile_menu_container">
      <div className="navbar__mobile_menu_overlay "></div>
      <div className="navbar__mobile_menu_main">
        <div className="navbar__mobile_menu_close" onClick={handleClick}>
          <i class="fa-solid fa-x"></i>
        </div>

        <ul className="navbar__mobile_menu_links">
          <li>
            <Link to={"/productos"} onClick={handleClick}>
              Productos
            </Link>
          </li>
          <li>
            <Link to={"/productos"} onClick={handleClick}>
              Talles
            </Link>
          </li>
          <li>
            <Link to={"/productos"} onClick={handleClick}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to={"/productos"} onClick={handleClick}>
              QR
            </Link>
          </li>
          <li>
            <Link to={"/productos"} onClick={handleClick}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
