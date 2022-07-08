import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { registerApi } from "../../../api/user";

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
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit= async (values)=>{
    setIsLoading(true);
    
    const response = await registerApi(values);
    
    console.log(response);
    
    if (response?.jwt){
        console.log("Registro exitoso")
    }else{
        console.log("Error en el registro")
    }
    
    setIsLoading(false);
  }
  
  return (
    <div className="login__main">
      <div className="login__container">
        <div className="login__form">
          <h2 className="title">Registrate</h2>

          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              rePassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit=  {(values, { resetForm }) =>  {
              handleSubmit(values)

              /*  const { username, email, password } = values;
              //dispatch(register(username,  email, password));
              register(dispatch, { username, email, password });

              resetForm(); */
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

                <button className={`btn-load ${isLoading? 'button--loading':''}`} type="submit" disabled={isLoading}>
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
