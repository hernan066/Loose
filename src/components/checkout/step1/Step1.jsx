import "./step1.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import * as Yup from "yup";
import { addAddress } from "../../../redux/cartSlider";
import { motion } from "framer-motion";

const SignupSchema = Yup.object().shape({
  nombre: Yup.string().required("Requerido"),
  apellido: Yup.string().required("Requerido"),
  email: Yup.string().email("Email invalido").required("Requerido"),
  provincia: Yup.string().required("Requerido"),
  ciudad: Yup.string().required("Requerido"),
  direccion: Yup.string().required("Requerido"),
  telefono: Yup.number().required("Requerido"),
  codigoPostal: Yup.number().required("Requerido"),
});

export const Step1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, total, address } = useSelector((state) => state.cart);

  return (
    <motion.main 
    className="order__container"
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
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Datos de envio {">"}{" "}
        </span>
        <span style={{ color: "#aaa" }}>Resumen compra {">"} </span>
        <span style={{ color: "#aaa" }}>Finaliza compra</span>
      </div>

      <h1>Datos de envio</h1>

      <div className="order__container__flex">
        <div className="order__form">
          {/*  <h2>Datos de envio</h2> */}

          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              email: "",
              provincia: "",
              ciudad: "",
              direccion: "",
              telefono: "",
              codigoPostal: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(addAddress(values));

              navigate("/checkout/confirma-datos-envio");
              //const { email, password } = values;
              //dispatch(starLogin(values));
              //login( dispatch, {email, password} );

              //resetForm();
              //console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="text" name="nombre" placeholder="Nombre" />
                <ErrorMessage
                  name="nombre"
                  component="p"
                  className="login__error"
                />

                <Field type="text" name="apellido" placeholder="Apellido" />

                <ErrorMessage
                  name="apellido"
                  component="p"
                  className="login__error"
                />
                <Field type="email" name="email" placeholder="Email" />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="login__error"
                />

                <Field type="number" name="telefono" placeholder="Telefono" />
                <ErrorMessage
                  name="telefono"
                  component="p"
                  className="login__error"
                />
                <Field type="text" name="direccion" placeholder="Direccion" />
                <ErrorMessage
                  name="direccion"
                  component="p"
                  className="login__error"
                />

                <Field type="text" name="provincia" placeholder="Provincia" />

                <ErrorMessage
                  name="provincia"
                  component="p"
                  className="login__error"
                />

                <Field type="text" name="ciudad" placeholder="Ciudad" />

                <ErrorMessage
                  name="ciudad"
                  component="p"
                  className="login__error"
                />
                <Field
                  type="text"
                  name="codigoPostal"
                  placeholder="Codigo postal"
                />

                <ErrorMessage
                  name="codigoPostal"
                  component="p"
                  className="login__error"
                />

                <button type="submit" disabled={isSubmitting}>
                  Siguiente
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="order__detalle">
          <h3>Resumen de compra</h3>
          {/*------------------ crear componente------------------- */}

          {products.map((producto) => {
            return (
              <div className="order__producto" key={producto.id}>
                <div className="order__img">
                  <img src={producto.imagen} alt="remera" />
                </div>
                <div className="order__title">
                  <h5>{producto.nombre}</h5>
                  <div className="order__price">
                    <p>Cant. {producto.cantidad} </p>
                    <p>${producto.precio}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/*------------------ crear componente------------------- */}

          <div className="order__total">
            <h4>Total</h4>
            <h4>${total}</h4>
          </div>
        </div>
      </div>
    </motion.main>
  );
};
