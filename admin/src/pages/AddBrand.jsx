import CustomInput from "../component/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createBrand,
  updateABrand,
  getABrand,
  resetState,
} from "../feature/brand/brandSlice";
import * as yup from "yup";
import { useEffect } from "react";
import { useFormik } from "formik";

import {toast } from "react-toastify"
let schema = yup.object().shape({
  title: yup.string().required("Brand Name is required"),
});
const AddBrand = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getBrandId = location.pathname.split("/")[3];
  const navigate=useNavigate();
  console.log(getBrandId);
  const newBrand = useSelector((state) => state.brand);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    updatedBrand,
    brandName,
  } = newBrand;

  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getABrand(getBrandId));
    } else {
      dispatch(resetState());
    }
  }, [getBrandId]);

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfullly!");
    }
    if (isSuccess && updatedBrand) {
      toast.success("Brand Updated Successfullly!");
      navigate("/admin/list-brand");
    }

    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBrandId !== undefined) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateABrand(data));
        dispatch(resetState());
      } else {
        dispatch(createBrand(values));
        formik.resetForm();
        setTimeout(() => {
          resetState();
        }, 300);
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {getABrand !== undefined ? "Edit" : "Add"} Brand
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            label="Enter Brand"
            id="brand"
          />

          <div className="error">
            {formik.touched.error && formik.errors.title}
          </div>

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getBrandId !== undefined ? "Edit" : "Add"} Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
