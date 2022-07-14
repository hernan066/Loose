import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { registerApi } from "../../../api/user";
import { login } from "../../../redux/userSlice";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Requerido"),
  email: Yup.string().email("Email invalido").required("Requerido"),
  password: Yup.string().min(6, "6 caracteres minimo").required("Requerido"),
  rePassword: Yup.string()
    .min(6, "6 caracteres minimo")
    .required("Requerido")
    .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales"),
});

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true);

    const response = await registerApi(values);

    //console.log(response);

    if (response?.jwt) {
      dispatch(
        login({
          id: response.user.id,
          username: response.user.username,
          email: response.user.email,
          jwt: response.jwt,
        })
      );

      setError(false);
      //console.log("Registro exitoso");
      navigate("/");
    } else {
      setError(true);
      //console.log("Error en el registro");
    }

    setIsLoading(false);
  };

  return (
    <div className="login__main">
      <div className="login__container">
        <div className="login__form">
          <h2 className="title">Registrate</h2>
          {error && (
            <p className="login__error">
              Error en el registro, intentelo nuevamente
            </p>
          )}
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              rePassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="text"
                  name="username"
                  placeholder="Ingresa un nombre de usuario"
                />

                <ErrorMessage
                  name="username"
                  component="p"
                  className="login__error"
                />
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

                <Field
                  type="password"
                  name="rePassword"
                  placeholder="Repite tu contraseña"
                />
                <ErrorMessage
                  name="rePassword"
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
            <p>Ya tienes cuenta?</p> <Link to="/auth/login">Ingresa</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
