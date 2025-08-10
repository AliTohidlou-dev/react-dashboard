import { ErrorMessage, FastField, Form, Formik } from "formik";
import { Link, useParams } from "react-router-dom";
import * as yup from "yup";
import ErrorHandler from "../utils/errorHandler";
import AddModal from "../utils/AddModal";
const initialValues = {
  email: "",
  username: "",
  mobile: "",
  profileImage: null,
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = yup.object({
  email: yup.string().email('email is invalid').required("required"),
  username: yup.string().required("required").min(3, "at least 3 words"),
  mobile: yup
    .string()
    .required("required")
    .matches(/^(=?09)(=?[0-9]){2}(=?[0-9]){7}$/, "invalid mobile number"),
  profileImage: yup
    .mixed()
    .required("image is required")
    .test("imageType", "only png, jpeg", (value) => {
      if (!value) return false;
      return ["image/jpeg", "image/png"].includes(value.type);
    })
    .test("imageSize", "300kb", (value) => {
      if (!value) return false;
      return value.size <= 300 * 1024;
    }),
});
function AddUser() {
  const {id}=useParams();
  return (
    <AddModal>
      <div className="add-category">
        <div className="add-category-header">
          <h1>{id?'Edit User':'Add User'}</h1>
          <Link to={"/users"}>
            <i className="fa-solid fa-xmark" ></i>
          </Link>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validate}
        >
          {(formik) => {
            console.log(formik.errors);
            return (
              <Form className="add-category-form">
                <div className="input-section">
                  <div className="input">
                    <label htmlFor="email">Email</label>
                    <FastField
                      type="text"
                      name="email"
                      id="email"
                      placeholder="email"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component={ErrorHandler}
                  />
                </div>
                <div className="input-section">
                  <div className="input">
                    <label htmlFor="username">username</label>
                    <FastField
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"
                    />
                  </div>
                  <ErrorMessage name="username" component={ErrorHandler} />
                </div>
                <div className="input-section">
                  <div className="input">
                    <label htmlFor="mobile">Mobile</label>
                    <FastField
                      type="number"
                      name="mobile"
                      id="mobile"
                      placeholder="mobile"
                    />
                  </div>
                  <ErrorMessage name="mobile" component={ErrorHandler} />
                </div>
                <div className="input-section">
                  <div className="input">
                    <label htmlFor="profileImage">Profile Image</label>
                    <input
                      type="file"
                      name="profileImage"
                      id="profileImage"
                      onChange={(e) =>
                        formik.setFieldValue("profileImage", e.target.files[0])
                      }
                    />
                    <span>{formik.values.profileImage?.name || "add image"}</span>
                  </div>
                  {formik.errors.profileImage ? (
                    <p className="errorMsg">
                      <i className="fas fa-exclamation"></i>
                      {formik.errors.profileImage}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="submitBtn">
                  <button
                    type="submit"
                    disabled={
                      !(formik.dirty && formik.isValid) || formik.isSubmitting
                        ? true
                        : false
                    }
                  >
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </AddModal>
  );
}
export default AddUser;
