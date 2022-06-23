import './footer.css'

const Footer = () => {
  return (
    <footer className='footer__container'>
        
        <div id='derechos__reservados' > © 2022 Loose, Inc. Todos los derechos reservados. </div>
        <div id='sobre_nosotros' >'CHAU</div>
        <div id='iconos'> 
          
          <div className='footer__iconos__container'>
          <a target='blank' href='http://www.twitter.com'><i className="fa-brands fa-twitter"></i></a>
          </div>
          <div className='footer__iconos__container'>
          <a target='blank' href='http://www.facebook.com'><i className="fa-brands fa-facebook"></i></a>
          </div>
          <div className='footer__iconos__container'>
          <a target='blank' href='http://www.telegram.com'><i className="fa-brands fa-telegram"></i></a>
          </div>
          <div className='footer__iconos__container'>
          <a target='blank' href='http://www.whatsapp.com'><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          <div className='footer__iconos__container'>
          <a target='blank' href='http://www.instagram.com'><i className="fa-brands fa-instagram"></i></a>
          </div>
          <div className='footer__iconos__container'>
          <a target='blank' href='http://www.youtube.com'><i className="fa-brands fa-youtube"></i></a>
          </div>
          
          
        </div>


    </footer>
  )
}

export default Footer