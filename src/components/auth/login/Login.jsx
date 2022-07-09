import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginApi } from "../../../api/user";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Requerido"),
  password: Yup.string()
    .min(6, "6 caracteres minimo")

    .required("Requerido"),
});

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true);

    const response = await loginApi(values);

    console.log(response);

    if (response?.jwt) {
      setError(false);
      console.log("Login exitoso");
      navigate("/");
    } else {
      setError(true);
      console.log("Error en el login");
    }

    setIsLoading(false);
  };

  return (
    <div className="login__main">
      <div className="login__container">
        <div className="login__form">
          <h2 className="title">Login</h2>
          {error && (
            <p className="login__error">Email o contraseña incorrecta</p>
          )}

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              /* const { email, password } = values; */
              //dispatch(starLogin(values));
              /* login(dispatch, { identifier, password }) */

              handleSubmit(values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="login__error"
                />

                <Field
                  type="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="login__error"
                />

                <button
                  className={`btn-load ${isLoading ? "button--loading" : ""}`}
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="button__text">Enviar</span>
                </button>
              </Form>
            )}
          </Formik>

          <div className="login__register">
            <p>No tienes cuenta?</p> <Link to="/auth/register">Registrate</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
