import { Link } from "react-router-dom";
import "./step3.css";

export const Step3 = () => {
  return (
    <main className="finish__container">
      <div className="card__nav" style={{ textAlign: "left" }}>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Mi carrito {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Datos de envio {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Resumen compra {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Finaliza compra
        </span>
      </div>

      <div className="finish__container__flex">
        <h2>Felicidades por tu compra!!</h2>
        <p>
          En breve nos comunicaremos para coordinar el pago y el envio de tu
          compra.
        </p>
        <Link to="/">Volver a Home </Link>
      </div>
    </main>
  );
};
