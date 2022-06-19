import './step1.css'

export const Step1 = () => {
  return (
    <div className="order__form">
    <h2>Completa los datos de envio</h2>

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
  )
}
