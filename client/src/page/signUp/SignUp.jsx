import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/user/userSlice";
const signUpSchema = yup.object({
  firstname: yup.string().required("Firtname is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup.string().required("Email should valid"),
  mobile: yup.string().required("Mobile is required"),
  password: yup.string().required("Password is Required"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      
      
      dispatch(registerUser(values))
    },
  });

  return (
    <section class="home show">
      <div class="form_container">
        <div class="form login_form">
          <form onSubmit={formik.handleSubmit}>
            <h2>Sign up</h2>

            <div class="input_box">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={formik.handleChange("firstname")}
                onBlur={formik.handleBlur("firstname")}
                value={formik.values.firstname}
                required
              />
              {formik.touched.firstname && formik.errors.firstname}
            </div>
            <div class="input_box">
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                onChange={formik.handleChange("lastname")}
                onBlur={formik.handleBlur("lastname")}
                value={formik.values.lastname}
                required
              />
              {formik.touched.lastname && formik.errors.lastname}
            </div>

            <div class="input_box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={formik.values.email}
                required
              />
              {formik.touched.email && formik.errors.email}
            </div>

            <div class="input_box">
              <input
                type="tel"
                placeholder="Mobile Phone"
                name="mobile"
                onChange={formik.handleChange("mobile")}
                onBlur={formik.handleBlur("mobile")}
                value={formik.values.mobile}
                required
              />
              {formik.touched.mobile && formik.errors.mobile}
            </div>

            <div class="input_box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                value={formik.values.password}
                required
              />
              {formik.touched.password && formik.errors.password}
            </div>
            <div class="option_field">
              <span class="checkbox">
                <input type="checkbox" id="check" />
                <label for="check">Remember me</label>
              </span>
            </div>

            <button type="submit" class="button" >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default SignUp;
