import "./cart.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/cartSlider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, quantity, total } = useSelector((state) => state.cart);

  const handlerDelete = (id_pro, cantidad, subTotal) => {
    dispatch(
      deleteProduct({
        id_pro,
        cantidad,
        subTotal,
      })
    );
  };

  return (
    <motion.main
      className="cart__container"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="card__nav" style={{ textAlign: "left" }}>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Mi carrito {">"}{" "}
        </span>
        <span style={{ color: "#aaa" }}>Datos de envio {">"} </span>
        <span style={{ color: "#aaa" }}>Resumen compra {">"} </span>
        <span style={{ color: "#aaa" }}>Finaliza compra</span>
      </div>

      <h1>MI Carrito</h1>

      {products.length === 0 ? (
        <div className="cart__vacio">
          <h2>Tu carrito se encuentra vacio</h2>
          <Link to={"/productos"}>
            <i class="fa-solid fa-arrow-left-long"></i> Volver a productos
          </Link>
        </div>
      ) : (
        <section className="car__products__container">
          <div className="cart__products">
            {products.map((producto) => {
              return (
                <div className="cart__product" key={producto.id}>
                  <div className="cart__img_container">
                    <img src={producto.imagen} alt="remera" />
                  </div>
                  <div className="cart__info_product">
                    <div className="cart__info_nombre">
                      <h3>Producto</h3>
                      <p>
                        {/* {producto.categoria} */} {producto.nombre} -{" "}
                        {producto.talle}
                      </p>
                    </div>
                    <div className="cart__info_precio">
                      <h3>Precio</h3>
                      <p>${producto.precio}</p>
                    </div>
                    <div className="cart__info_cantidad">
                      <h3>Cant.</h3>
                      <p>{producto.cantidad}</p>
                    </div>
                    <div className="cart__info_borrar">
                      <h3>Borrar</h3>
                      <p
                        onClick={() =>
                          handlerDelete(
                            producto.id_pro,
                            producto.cantidad,
                            producto.subTotal
                          )
                        }
                      >
                        <i class="fa-solid fa-x"></i>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order__detalle card">
            <h3>Resumen de compra</h3>

            <div className="order__producto card">
              <h5>Subtotal</h5>
              <h5>${total}</h5>
            </div>
            {/* <div className="order__producto card">
              <h4>Envio</h4>
              <h4>$800.00</h4>
            </div> */}
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
    </motion.main>
  );
};
