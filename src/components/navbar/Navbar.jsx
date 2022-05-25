import "./navbar.css";
//import logo from"../../../public/images/LooseB.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="nav">
      <div class="nav__container">
        <div className="nav__logo">
          <Link to={"/"}>
            <img src="https://i.ibb.co/WVxhtqL/LooseB.png" alt="logo" />
          </Link>
        </div>

        <ul>
          <li>
            <Link to={"/producto"}>Productos</Link>
          </li>
          <li>
            <a href="#">Tabla De Talles</a>
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
