import "./producto.css";
import images from "../../assets/images";

const Producto = () => {
  return (
    <section className="producto__container">
      <div className="producto__imagen">
        <div className="producto__imagen_img">
          <img src={images.remeraBlanca} alt="remera-blanca" />
        </div>
        <div className="producto__imagen_img_minis">
          <div className="producto__imagen_img_minis-img">
            <img src={images.talles} alt="talles" />
          </div>
          <div className="producto__imagen_img_minis-img">
            <img src={images.mini_blanca1} alt="remera-blanca" />
          </div>
          <div className="producto__imagen_img_minis-img">
            <img src={images.mini_blanca2} alt="remera-blanca" />
          </div>
        </div>
      </div>

      <div className="producto__detalle">
      <h1>REMERA OVERSIZED</h1>
      <h2>one white</h2>
      <h3>$5,000.00</h3>
      <p>CONFECCIÓN: Corte y diseño OVERSIZED personalizado, y de nuestra propia marca, esta camiseta provee el ajuste extra holgado en las mangas, hombros y pecho del usuario, aportando un aspecto relajado y sutil urbano.</p>
      <p>DISEÑO: Diseño minimalista, urbano y de gran tamaño, color de tela blanco perla</p>
      <p>CONSIDERACIONES: Esta prenda está elaborada en su mayoría por algodón genuino y sedoso, y naturalmente, se producirá cierta contracción después del primer lavado. Para evitar este efecto, lave con agua fría y aplique el menor calor posible a la prenda.</p>
      <div className="producto__talle">
        <p>ELIJA SU TALLE</p>
        <div className="producto__talle_letra">S</div>
        <div className="producto__talle_letra">M</div>
        <div className="producto__talle_letra">L</div>
        <div className="producto__talle_letra">XL</div>
      </div>
      <div className="producto__comprar">
          <div className="producto__cantidad">
            <div className="producto__cantidad_squat">-</div>
            <div className="producto__cantidad_squat">1</div>
            <div className="producto__cantidad_squat">+</div>
          </div>
          <button className="producto__comprar_btn">Comprar</button>

      </div>


      </div>
    </section>
  );
};

export default Producto;
