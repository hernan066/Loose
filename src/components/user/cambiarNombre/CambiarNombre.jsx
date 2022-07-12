import "./cambiarNombre.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  nombre: Yup.string().required("Requerido"),
  apellido: Yup.string().min(2, "2 caracteres minimo").required("Requerido"),
});

export const CambiarNombre = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  let data = {};

  const handleSubmit = async (values) => {
    setIsLoading(true);
    console.log(values);
    const response = await addDirection(
      token,
      (data = {
        ...values,
        user: id,
      })
    );
    console.log(response);

    setIsLoading(false);
  };

  return (
    <div className="user__data__main__mis-datos">
      <h3>Cambiar nombre</h3>
      <div className="user__direction__main-container">
        <Formik
          initialValues={{
            nombre: "",
            apellido: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <div className="user__drirection__form">
                <div className="user__direccion__form__left">
                  <h4>Ingresa tus nuevos datos</h4>
                  <div className="user__direccion__form__field">
                    <Field
                      type="text"
                      name="nombre"
                      placeholder="Ingresa tu nombre"
                      value={values.nombre}
                    />

                    <ErrorMessage
                      name="nombre"
                      component="p"
                      className="login__error"
                    />
                  </div>

                  <div className="user__direccion__form__field">
                    <Field
                      type="text"
                      name="apellido"
                      placeholder="Ingresa tu apellido"
                      value={values.apellido}
                    />
                    <ErrorMessage
                      name="apellido"
                      component="p"
                      className="login__error"
                    />
                  </div>
                  <button
                    className={`btn-load direccion ${
                      isLoading ? "button--loading" : ""
                    }`}
                    type="submit"
                    disabled={isLoading}
                  >
                    <span className="button__text">Guardar</span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
