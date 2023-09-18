import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
const personSchema = yup.object({
  firstame: yup.string().defined(),
  lastnname: yup.string().default('').nullable(),
  email: yup.string().nullable().email(),
 
});
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section class="home show">
    <div class="form_container">
      <i class="uil uil-times form_close"></i>
      <div class="form login_form">
        <form action="#" onSubmit={formik.handleSubmit}>
          <h2>Sign up</h2>

          <div class="input_box">
            <input type="text" name="firstname" placeholder="First Name" required />
            <i class="uil uil-envelope-alt email"></i>
          </div>
          <div class="input_box">
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              required
            />
            <i class="uil uil-lock password"></i>
            <i class="uil uil-eye-slash pw_hide"></i>
          </div>

          <div class="input_box">
            <input type="email" placeholder="Email" required />
            <i class="uil uil-envelope-alt email"></i>
          </div>

          <div class="input_box">
            <input type="text" placeholder="Mobile Phone" required />
            <i class="uil uil-envelope-alt email"></i>
          </div>

          <div class="input_box">
            <input type="password" placeholder="Password" required />
            <i class="uil uil-envelope-alt email"></i>
          </div>
          <div class="option_field">
            <span class="checkbox">
              <input type="checkbox" id="check" />
              <label for="check">Remember me</label>
            </span>
            
          </div>

          <button class="button">Sign Up</button>

          <div class="login_signup">
            Don't have an account?{" "}
            <a href="#" id="signup" >
              Login Now
            </a>
          </div>
        </form>
      </div>

      
    </div>
  </section>
  );
};

export default SignUp;
