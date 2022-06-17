import "./banner.css";
import images from "../../../assets/images";

export const Banner = () => {
  return (
    <>
      <section className="seccion1__container">
        <div className="seccion1__left">
          <span className="seccion1__text sentite">SENTITE</span>
          <span className="seccion1__text en">EN</span>
          <span className="seccion1__text libertad">LIBERTAD</span>

          <div className="seccion1__img1_contanier">
            <img src={images.banner1} alt="banner" />
          </div>
        </div>
        <div className="seccion1__right">
          <div className="seccion1__img2_contanier">
          <span className="seccion1__text2 iam">I{"`"}m</span>
          <span className="seccion1__text2 loose">Loose</span>
            <img src={images.banner2} alt="banner" />
          </div>
        </div>
      </section>
    </>
  );
};
