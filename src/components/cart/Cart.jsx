import images from "../../assets/images";
import "./cart.css";

export const Cart = () => {
  return (
    
      <main className="cart__container">
        <h1>MI Carrito</h1>
        
        <section className="car__products__container">

        <div className="cart__products">
          <div className="cart__product">
            <div className="cart__img_container">
              <img src={images.remeraNegra} alt="remera" />
            </div>
            <div className="cart__info_product">
              <div className="cart__info_nombre">
                <h3>Producto</h3>
                <p>Remera Oversize One Black</p>
              </div>
              <div className="cart__info_precio">
                <h3>Precio</h3>
                <p>$5,000.00</p>
              </div>
              <div className="cart__info_cantidad">
                <h3>Cantidad</h3>
                <p>1</p>
              </div>
              <div className="cart__info_borrar">
                <h3>Borrar</h3>
                <p>
                  <i class="fa-solid fa-x"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="cart__product">
            <div className="cart__img_container">
              <img src={images.remeraNegra} alt="remera" />
            </div>
            <div className="cart__info_product">
              <div className="cart__info_nombre">
                <h3>Producto</h3>
                <p>Remera Oversize One Black</p>
              </div>
              <div className="cart__info_precio">
                <h3>Precio</h3>
                <p>$5,000.00</p>
              </div>
              <div className="cart__info_cantidad">
                <h3>Cantidad</h3>
                <p>1</p>
              </div>
              <div className="cart__info_borrar">
                <h3>Borrar</h3>
                <p>
                  <i class="fa-solid fa-x"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="cart__product">
            <div className="cart__img_container">
              <img src={images.remeraNegra} alt="remera" />
            </div>
            <div className="cart__info_product">
              <div className="cart__info_nombre">
                <h3>Producto</h3>
                <p>Remera Oversize One Black</p>
              </div>
              <div className="cart__info_precio">
                <h3>Precio</h3>
                <p>$5,000.00</p>
              </div>
              <div className="cart__info_cantidad">
                <h3>Cantidad</h3>
                <p>1</p>
              </div>
              <div className="cart__info_borrar">
                <h3>Borrar</h3>
                <p>
                  <i class="fa-solid fa-x"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="order__detalle card">
          <h3>Resumen de compra</h3>

          <div className="order__producto card">
            <h4>Subtotal</h4>
            <h4>$5,000.00</h4>
          </div>
          <div className="order__producto card">
            <h4>Envio</h4>
            <h4>$800.00</h4>
          </div>
          <div className="order__producto card total">
            <h4>Total</h4>
            <h4>$5,800.00</h4>
          </div>

          <button className="order__seguir_comprando card">Comprar</button>
        </div>

        </section>
        
       
      
      
      
      </main>
   
  );
};
