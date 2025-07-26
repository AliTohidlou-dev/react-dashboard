import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = yup.object({
  email: yup.string().email("invalid email!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
      "use Strong password"
    ),
});
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  return (
    <div className="login-container">
      <div className="auth-content">
        <h1>Welcome Back .!</h1>
        <p>skip the lag ?</p>
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
                <h2>Login</h2>
                <p>Glad you're back .!</p>
                <div className="input-group">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
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
                <div className="input-group">
                  <Field
                    type={showPass ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                  <div className="input-icons">
                    <i
                      className="fa fa-eye show-password"
                      onClick={handleShowPass}
                    ></i>
                    {formik.errors.password ? (
                      <i className="fa fa-exclamation error">
                        <p className="error-msg">{formik.errors.password}</p>
                      </i>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className="login-btn">Login</button>
              </Form>
            );
          }}
        </Formik>
        <p>
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        <small>
          Don't have an account? <a href="/signup">Signup here</a>
        </small>
      </div>
    </div>
  );
};

export default Login;
