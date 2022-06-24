import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">

      <div className="footer__container__links">
        <div className="footer__container__links__izquierda">
        <p>Chauuuuuuua</p>
          <p>Chaisjdlakjdklad</p>
          <p>oasidjasjdlakjdlkajdklajdlkaj</p>
          <p>Chacuuuuuuu</p>
        </div>
        <div className="footer__container__links__centro">
          Chauuuuuuua
          
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
          <div className="footer__container__links__derecha__full__abajo">Hola</div>
        </div>
       
      </div>

      <div className="footer__container__derechos__reservados">
        {" "}
        <span>© 2022 Loose, Inc. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
