import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">

      <nav className="footer__container__links">
        <div className="footer__container__links__izquierda">
          <div><a target='blank' href="">Productos</a></div>
          <div><a target='blank' href="">Tabla de talles</a></div>
          <div><a target='blank' href="">Como usar el qr</a></div>
        </div>
        <div className="footer__container__links__centro">
          <div><a target='blank' href="">Contacto</a></div>
          <div><a target='blank' href="">Medios de pago</a></div>
          <div><a target='blank' href="">Sobre Loose</a></div>
        </div>
        <div className="footer__container__links__derecha">
          <div className="footer__container__links__derecha__full__arriba">
            <div className="footer__container__links__derecha__arriba__iconos">
              <a target="blank" href="http://www.twitter.com">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>

            <div className="footer__container__links__derecha__arriba__iconos">
              <a target="blank" href="http://www.facebook.com">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>

            <div className="footer__container__links__derecha__arriba__iconos">
              <a target="blank" href="http://www.telegram.com">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>

            <div className="footer__container__links__derecha__arriba__iconos">
              <a target="blank" href="http://www.tiktok.com">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>

            <div className="footer__container__links__derecha__arriba__iconos">
              <a target="blank" href="http://www.whatsapp.com">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>

            <div className="footer__container__links__derecha__arriba__iconos">
              <a target="blank" href="http://www.instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            <div className="footer__container__links__derecha__arriba__iconos">
              <a target="blank" href="http://www.youtube.com">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          {/* <div className="footer__container__links__derecha__full__abajo">
           <div><a target='blank' href=""></a></div>
          </div> */}
        </div>
      </nav>

      <div className="footer__container__derechos__reservados">
        <span>© 2022 Loose, Inc. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
