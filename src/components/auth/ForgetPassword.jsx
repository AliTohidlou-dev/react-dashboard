import { Field, Form, Formik } from "formik";
import * as yup from "yup";
const initialValues = {
  email: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = yup.object({
  email: yup.string().email("invalid email!"),
});
const ForgotPassword = () => {
  return (
    <div className="forget-container">
      <div className="auth-content">
        <h1>No Worries.!!</h1>
        <p>Take me back.!</p>
      </div>
      <div className="auth-form">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(formik) => {
            console.log(formik);
            return (
              <Form>
                <h2>Rest</h2>
                <p>enter you’re email</p>
                <div className="input-group">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@test.com"
                    required
                  />
                  <div className="input-icons">
                    {formik.errors.email ? (
                      <i className="fa fa-exclamation error">
                        <p className="error-msg">{formik.errors.email}</p>
                      </i>
                    ) : null}
                  </div>
                </div>

                <button type="submit" className="forget-btn">Rest Password</button>
              </Form>
            );
          }}
        </Formik>
        <small>
          Don't have an account? <a href="/signup">Signup here</a>
        </small>
      </div>
    </div>
  );
};

export default ForgotPassword;
