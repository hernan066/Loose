import "./step1.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import image from '../../../assets/images'

const SignupSchema = Yup.object().shape({
  nombre: Yup.string().required("Requerido"),
  apellido: Yup.string().required("Requerido"),
  provincia: Yup.string().required("Requerido"),
  ciudad: Yup.string().required("Requerido"),
  direccion: Yup.string().required("Requerido"),
  telefono: Yup.number().required("Requerido"),
});

export const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div className="login__main">
      <div className="order__container">
        <div className="order__form">
          <h2>Datos de envio</h2>

          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              provincia: "",
              ciudad: "",
              direccion: "",
              telefono: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              //const { email, password } = values;
              //dispatch(starLogin(values));
              //login( dispatch, {email, password} );

              //resetForm();
              console.log(values);
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

          <div className="order__producto">
            <div className="order__img">
              <img src={image.remeraNegra} alt="remera" />
            </div>
            <div className="order__title">
              <h4>Remera negra</h4>
              <div className="order__price">
                <p>Cant: 1 </p>
                <p>$2000</p>
              </div>
            </div>
          </div>

          {/*------------------ crear componente------------------- */}

          <div className="order__total">
            <h4>Total</h4>
            <h4>total</h4>
          </div>

          <button
            className="order__seguir_comprando"
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i> Volver al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
