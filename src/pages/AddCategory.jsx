import { ErrorMessage, FastField, Form, Formik } from "formik";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import ErrorHandler from "../utils/errorHandler";
const initialValues = {
  parentCategory: "",
  title: "",
  caption: "",
  image: null,
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = yup.object({
  parentCategory: yup.string().required("required").min(3, "at least 3 words"),
  title: yup.string().required("required").min(3, "at least 3 words"),
  caption: yup
    .string()
    .required("required")
    .matches(/^[\p{L}\p{N} ]+$/u, "only word and number"),
  image: yup
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
function AddCategory({ onClose }) {
  return createPortal(
    <div className="add-category">
      <div className="add-category-header">
        <h1>Add Category</h1>
        <Link to={"/categories"}>
          <i className="fa-solid fa-xmark" onClick={onClose}></i>
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
                  <label htmlFor="parentCategory">Parent Category</label>
                  <FastField
                    type="text"
                    name="parentCategory"
                    id="parentCategory"
                    placeholder="parent category"
                  />
                </div>
                <ErrorMessage name="parentCategory" component={ErrorHandler} />
              </div>
              <div className="input-section">
                <div className="input">
                  <label htmlFor="title">Title</label>
                  <FastField
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                  />
                </div>
                <ErrorMessage name="title" component={ErrorHandler} />
              </div>
              <div className="input-section">
                <div className="input">
                  <label htmlFor="caption">Caption</label>
                  <FastField
                    as="textarea"
                    name="caption"
                    id="caption"
                    placeholder="caption"
                  />
                </div>
                <ErrorMessage name="caption" component={ErrorHandler} />
              </div>
              <div className="input-section">
                <div className="input">
                  <label htmlFor="image">image</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) =>
                      formik.setFieldValue("image", e.target.files[0])
                    }
                  />
                  <span>{formik.values.image?.name || "add image"}</span>
                </div>
                {formik.errors.image ? (
                  <p className="errorMsg">
                    <i className="fas fa-exclamation"></i>
                    {formik.errors.image}
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
    </div>,
    document.body
  );
}
export default AddCategory;
