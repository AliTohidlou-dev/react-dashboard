import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = yup.object({
  username: yup.string().min(4,'min 4 letter'),
  email: yup.string().email("invalid email!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
      "use Strong password"
    ),
  confirmPassword: yup.
  string()
  .oneOf([yup.ref('password')],'Passwords must match')
  .required('required')
});
const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  const handleShowConfirmPass = () => {
    setShowConfirmPass((prev) => !prev);
  };
  return (
    <div className="signup-container">
      <div className="auth-content">
        <h1>Roll the Carpet.!</h1>
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
                <h2>Signup</h2>
                <p>Signup very easy.!</p>
                <div className="input-group">
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                  <div className="input-icons">
                    {formik.errors.username ? (
                      <i className="fa fa-exclamation error">
                        <p className="error-msg">{formik.errors.username}</p>
                      </i>
                    ) : null}
                  </div>
                </div>
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
                <div className="input-group">
                  <Field
                    type={showConfirmPass ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter your confirm password"
                    required
                  />
                  <div className="input-icons">
                    <i
                      className="fa fa-eye show-password"
                      onClick={handleShowConfirmPass}
                    ></i>
                    {formik.errors.confirmPassword ? (
                      <i className="fa fa-exclamation error">
                        <p className="error-msg">{formik.errors.confirmPassword}</p>
                      </i>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className="signup-btn">Signup</button>
              </Form>
            );
          }}
        </Formik>
        <br/>
        <br/>
        <small>
          Already Registered? <a href="/">Login here</a>
        </small>
      </div>
    </div>
  );
};

export default Signup;
