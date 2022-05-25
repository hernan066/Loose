import "./seccion4.css";
import images from "../../../assets/images";

const Seccion4 = () => {
  return (
    <section className="seccion4__container">
      <h2>productos</h2>

      <div className="seccion4__card-container">
        
        <div className="seccion4__card">
          <div className="seccion4__card-image">
            <img src={images.blanca} alt="logo" />
          </div>
        </div>
        <div className="seccion4__card">
          <div className="seccion4__card-image">
            <img src={images.negra} alt="logo" />
          </div>
        </div>
        <div className="seccion4__card">
          <div className="seccion4__card-image">
            <img src="http://vision.centroculturadigital.mx/media/done/1550616316563-QR-GlosarioCCD-cont.png" alt="logo" />
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default Seccion4;
