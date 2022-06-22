import './productSlideshow.css'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import images from '../../../assets/images';

export const ProductSlideshow = () => {
  const images1 = [images.remeraNegra, images.remeraBlanca];

  return (
    
    <div style={{  maxWidth: '650px'}}>


    <Slide easing="ease" duration={7000} indicators>
      {images1.map((image) => {
        
        return (
          <div className="each-slide" key={image}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
    </div>
  );
};
