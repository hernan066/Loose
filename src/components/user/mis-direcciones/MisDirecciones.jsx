import "./misDirecciones.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { addDirection } from "../../../api/user";

const SignupSchema = Yup.object().shape({
  nombre: Yup.string().required("Requerido"),
  apellido: Yup.string().min(2, "2 caracteres minimo").required("Requerido"),
  telefono: Yup.string().min(5, "5 caracteres minimo").required("Requerido"),
  dni: Yup.number().min(6, "6 caracteres minimo").required("Requerido"),
  calle: Yup.string().min(2, "2 caracteres minimo").required("Requerido"),
  numero: Yup.string()
    .min(1, "1 caracteres minimo")
    .required("Requerido"),
  piso_dpto: Yup.string().min(1, "1 caracteres minimo"),
  entre_calles: Yup.string().min(1, "1 caracteres minimo"),
  ciudad: Yup.string().min(1, "1 caracteres minimo").required("Requerido"),
  provincia: Yup.string().min(1, "1 caracteres minimo").required("Requerido"),
  cp: Yup.string().min(1, "1 caracteres minimo").required("Requerido"),
});

export const MisDirecciones = ({token, id}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  let data = {}

  const handleSubmit = async (values) => {
    setIsLoading(true);
    console.log(values)
    const response = await addDirection(token, data={
        ...values,
        user: id
    });
    console.log(response);
    
    setIsLoading(false);
  };

  return (
    <article className="user__mis-direcciones__container">
      <div className="user__data__main">
        <div className="user__data__main__mis-datos">
          <h3>Mis direcciones</h3>
          <div className="user__direction__main-container">
            <Formik
              initialValues={{
                nombre: "",
                apellido: "",
                telefono: "",
                dni: "",
                calle: "",
                numero: "",
                piso_dpto: "",
                entre_calles: "",
                ciudad: "",
                provincia: "",
                cp: "",
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
                      <h4>Información de Contacto</h4>
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
                      <div className="user__direccion__form__field">
                        <Field
                          type="text"
                          name="telefono"
                          placeholder="Ingresa tu numero de telefono"
                        />
                        <ErrorMessage
                          name="telefono"
                          component="p"
                          className="login__error"
                        />
                      </div>
                      <div className="user__direccion__form__field">
                        <Field
                          type="number"
                          name="dni"
                          placeholder="Ingresa tu numero de DNI"
                        />
                        <ErrorMessage
                          name="dni"
                          component="p"
                          className="login__error"
                        />
                      </div>
                    </div>
                    <div className="user__direccion__form__right">
                      <h4>Dirección</h4>
                      <div className="user__direccion__form__field">
                        <Field type="text" name="calle" placeholder="Calle" />

                        <ErrorMessage
                          name="calle"
                          component="p"
                          className="login__error"
                        />
                      </div>

                      <div className="direccion-piso">
                        <div className="user__direccion__form__field">
                          <Field
                            type="number"
                            name="numero"
                            placeholder="Numero"
                          />

                          <ErrorMessage
                            name="numero"
                            component="p"
                            className="login__error"
                          />
                        </div>
                        <div className="user__direccion__form__field">
                          <Field
                            type="text"
                            name="piso_dpto"
                            placeholder="Piso/dpto"
                          />

                          <ErrorMessage
                            name="piso"
                            component="p"
                            className="login__error"
                          />
                        </div>
                      </div>
                      <div className="user__direccion__form__field">
                        <Field
                          type="text"
                          name="entre_calles"
                          placeholder="Entre Calles (Opcional)"
                        />

                        <ErrorMessage
                          name="entre_calles"
                          component="p"
                          className="login__error"
                        />
                      </div>
                      <div className="user__direccion__form__field">
                        <Field type="text" name="ciudad" placeholder="Ciudad" />

                        <ErrorMessage
                          name="ciudad"
                          component="p"
                          className="login__error"
                        />
                      </div>
                      <div className="user__direccion__form__field">
                        <Field
                          type="text"
                          name="provincia"
                          placeholder="Provincia"
                        />

                        <ErrorMessage
                          name="provincia"
                          component="p"
                          className="login__error"
                        />
                      </div>
                      <div className="user__direccion__form__field">
                        <Field
                          type="number"
                          name="cp"
                          placeholder="Codigo postal"
                        />

                        <ErrorMessage
                          name="cp"
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
      </div>
    </article>
  );
};
