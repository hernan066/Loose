import "./seccion2.css";
import images from "../../../assets/images";

const Seccion2 = () => {
  return (
    <div className="container__slider">
      <div className="container">
        <input type="radio" name="slider" id="item-1" checked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <div class="cards">
         {/*  <div className="slider__squat"></div> */}
          
          <label className="card" for="item-1" id="selector-1">
           
              <img
                src={images.remera1}
                alt="remera1"
              />
            
          </label>
          <label className="card" for="item-2" id="selector-2">
           
              <img
               src={images.remera2}
                alt="remera2"
              />
           
          </label>

          <label className="card" for="item-3" id="selector-3">
            
              <img
               src={images.remera3}
                alt="remera3"
              />
           
          </label>
        </div>
      </div>
    </div>
  );
};

export default Seccion2;
