import "./seccion2.css";
import images from "../../../assets/images";

const Seccion2 = () => {
  return (
    <>
      <h2 className="seccion2__title">I'm LOOSE</h2>
      <div className="container__slider">
        <div className="container">
          <input type="radio" name="slider" id="item-1" defaultChecked />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" />
          <div className="cards">
            {/*  <div className="slider__squat"></div> */}

            <label className="card" htmlFor="item-1" id="selector-1">
              <img src={images.remera1} alt="remera1" />
              <img src={images.logo} alt="logo" id="image-logo" />
            </label>
            <label className="card" htmlFor="item-2" id="selector-2">
              <img src={images.remera2} alt="remera2" />
              <img src={images.logo} alt="logo" id="image-logo" />
            </label>

            <label className="card" htmlFor="item-3" id="selector-3">
              <img src={images.remera3} alt="remera3" />
              <img src={images.logo} alt="logo" id="image-logo" />
            </label>
          </div>
        </div>

        <div className="container__img-smart-screen">
          <div className="container__img-smart-screen-card">
            <img src={images.remera1} alt="remera1" />
          </div>
          <div className="container__img-smart-screen-card">
            <img src={images.remera2} alt="remera2" />
          </div>
          <div className="container__img-smart-screen-card">
            <img src={images.remera3} alt="remera3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Seccion2;
