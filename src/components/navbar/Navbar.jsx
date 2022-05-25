import "./navbar.css";
//import logo from"../../../public/images/LooseB.png"

const Navbar = () => {
  return (
    <nav class="nav">
      <div class="nav__container">
        <div className="nav__logo">
          <img src="https://i.ibb.co/WVxhtqL/LooseB.png" alt="logo" />
        </div>

        <ul>
          <li>
            <a href="#" class="current">
              Inicio
            </a>
          </li>
          <li>
            <a href="#">Tienda</a>
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
