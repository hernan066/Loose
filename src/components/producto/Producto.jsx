import { useState } from "react";
import { productos } from "../../db/productos";
import "./producto.css";
import { ProductSlideshow } from "./slider/ProductSlideshow";

const Producto = () => {
  const [seletSize, setSeletSize] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [error, setError] = useState(false);
  
  
  const agregar = ()=>{
    setCantidad(cantidad+1)
  }
  const quitar = ()=>{
    if(cantidad > 1){
      setCantidad(cantidad-1)
    }
  }
  const comprar = ()=>{
    if(!seletSize){
      setError(true)
    }else{
      setError(false)
    }
  }
  return (
    <section className="producto__container">
      <ProductSlideshow />

      <div className="producto__detalle">
        <h1>{productos.categoria}</h1>
        <h2>one white</h2>
        <h3>$5,000.00</h3>
        <p>
          CONFECCIÓN: Corte y diseño OVERSIZED personalizado, y de nuestra
          propia marca, esta camiseta provee el ajuste extra holgado en las
          mangas, hombros y pecho del usuario, aportando un aspecto relajado y
          sutil urbano.
        </p>
        <p>
          DISEÑO: Diseño minimalista, urbano y de gran tamaño, color de tela
          blanco perla
        </p>
        <p>
          CONSIDERACIONES: Esta prenda está elaborada en su mayoría por algodón
          genuino y sedoso, y naturalmente, se producirá cierta contracción
          después del primer lavado. Para evitar este efecto, lave con agua fría
          y aplique el menor calor posible a la prenda.
        </p>
        <div className="producto__talle">
          <p>ELIJA SU TALLE</p>
          <div className="producto__talle_letras">
            <div
              className={`producto__talle_letra cursor ${
                seletSize === "S" ? "seleccion" : ""
              }`}
              onClick={() => setSeletSize("S")}
            >
              S
            </div>
            <div
              className={`producto__talle_letra cursor ${
                seletSize === "M" ? "seleccion" : ""
              }`}
              onClick={() => setSeletSize("M")}
            >
              M
            </div>
            <div
              className={`producto__talle_letra cursor ${
                seletSize === "L" ? "seleccion" : ""
              }`}
              onClick={() => setSeletSize("L")}
            >
              L
            </div>
            <div
              className={`producto__talle_letra cursor ${
                seletSize === "XL" ? "seleccion" : ""
              }`}
              onClick={() => setSeletSize("XL")}
            >
              XL
            </div>
          </div>
        </div>
        <div className="producto__comprar">
          <div className="producto__cantidad">
            <div className="producto__cantidad_squat cursor" onClick={quitar}>-</div>
            <div className="producto__cantidad_squat">{cantidad}</div>
            <div className="producto__cantidad_squat cursor " onClick={agregar}>+</div>
          </div>
          <button className="producto__comprar_btn" onClick={comprar}>Comprar</button>
          {
            error &&  <p className="error">Error: Debe seleccionar un talle</p>
          }
          
          
         
        </div>
      </div>
    </section>
  );
};

export default Producto;
