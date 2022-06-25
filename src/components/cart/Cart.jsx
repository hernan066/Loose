import images from "../../assets/images";
import "./cart.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/cartSlider";
import { Link } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, quantity, total } = useSelector((state) => state.cart);

  const handlerDelete = (id) => {
    dispatch(
      deleteProduct({
        id: id,
        cantidad: quantity,
        total: total,
      })
    );
  };

  return (
    <main className="cart__container">
      <h1>MI Carrito</h1>

      {quantity === 0 ? (
        <div className="cart__vacio">
          <h2>Tu carrito se encuentra vacio</h2>
          <Link to={"/productos"}>
            <i class="fa-solid fa-arrow-left-long"></i> Volver a productos
          </Link>
        </div>
      ) : (
        <section className="car__products__container">
          {products.map((producto) => {
            return (
              <div className="cart__products" key={producto.id}>
                <div className="cart__product">
                  <div className="cart__img_container">
                    <img src={producto.imagen} alt="remera" />
                  </div>
                  <div className="cart__info_product">
                    <div className="cart__info_nombre">
                      <h3>Producto</h3>
                      <p>
                        {producto.categoria} {producto.nombre}
                      </p>
                    </div>
                    <div className="cart__info_precio">
                      <h3>Precio</h3>
                      <p>${producto.precio}</p>
                    </div>
                    <div className="cart__info_cantidad">
                      <h3>Cantidad</h3>
                      <p>{producto.cantidad}</p>
                    </div>
                    <div className="cart__info_borrar">
                      <h3>Borrar</h3>
                      <p onClick={() => handlerDelete(producto.id)}>
                        <i class="fa-solid fa-x"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="order__detalle card">
            <h3>Resumen de compra</h3>

            <div className="order__producto card">
              <h4>Subtotal</h4>
              <h4>${total}</h4>
            </div>
            <div className="order__producto card">
              <h4>Envio</h4>
              <h4>$800.00</h4>
            </div>
            <div className="order__producto card total">
              <h4>Total</h4>
              <h4>${total}</h4>
            </div>

            <button
              className="order__seguir_comprando card"
              onClick={() => navigate("/checkout/datos-envio")}
            >
              Comprar
            </button>
          </div>
        </section>
      )}
    </main>
  );
};
