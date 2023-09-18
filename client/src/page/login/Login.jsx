import "./style.css"
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const loginSchema = yup.object({
  email: yup.string().required("Email should valid"),
  password: yup.string().required("Password is Required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      
      dispatch(loginUser(values))
    },
  });
  
  return (
    <section class="home show">
      <div class="form_container">
        <i class="uil uil-times form_close"></i>
        <div class="form login_form">
          <form onSubmit={formik.handleSubmit}>
            <h2>Login</h2>

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
              <a href="#" class="forgot_pw">
                Forgot password?
              </a>
            </div>

            <button class="button" type="submit">Login</button>

            <div class="login_signup">
              Don't have an account?{" "}
              <a href="#" id="signup" >
                Signup
              </a>
            </div>
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

export default Login;
