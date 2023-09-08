import CustomInput from "../component/CustomInput"
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../feature/auth/authSlice"
import { useEffect } from "react";
let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
const Login=()=>{
  const dispatch=useDispatch();
  const nativigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
    validationSchema: schema,
    onSubmit: values => {
      
      dispatch(login(values))
      
    },
  });
    const authState=useSelector((state)=>state.auth);
    const {user,isLoading,isError,isSuccess,message}=authState;
    console.log(user);
    useEffect(()=>{
      if(isSuccess){
        nativigate("/admin")
      }else{
        nativigate("");
      }
    },[user,isError,isLoading,isSuccess])
    return (
        <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className="error text-center">
          {message.message == "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form action=""  onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            val={formik.values.email}
            onCh={formik.handleChange("email")}
           
          />
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          
          <CustomInput
            type="password"
            label="Password"
            id="pass"
            name="password"
            
            val={formik.values.password}
            onCh={formik.handleChange("password")}
          />
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <button 
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    )
}

export default Login