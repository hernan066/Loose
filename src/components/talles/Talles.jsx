import images from "../../assets/images";
import "./talles.css";

export const Talles = () => {
  return (
    <main className="talles__container">
      <div className="talles_talles_container_img">
        <section className="talle_langer">
          <img src={images.talles_langer} alt="" />
        </section>

        <section className="talle_small">
          <img src={images.talles_small} alt="" />
        </section>
      </div>

      <div className="talles_banner_container_derecha">
       {/*  banner arriba **************************************************************/}

        <div className="talles_banner_top">

          <section className="talles_banner_container_img1">
            <img src={images.remera3} alt="" />
          </section>

          <div className="talles_banner_titulo1">
            <h4>Langer</h4>
          </div>
        </div>

        <div className="talles_banner_bottom">

          <div className="talles_banner_titulo2">
            <h4>Small</h4>
          </div>

          <section className="talles_banner_container_img2">
            <img src={images.remera3} alt="" />
          </section>
        </div>
<div className="talles_banner_rectangulo">

</div>
      
      </div>
    </main>
  );
};
