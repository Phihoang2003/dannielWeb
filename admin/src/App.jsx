import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./component/MainLayout";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css"
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import Blogcatlist from "./pages/BlogcatList";
import Orders from "./pages/Order";
import Customers from "./pages/Customer";
import Colorlist from "./pages/Colorlist";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/brandList";
import ProductList from "./pages/ProductList"
import AddBlog from "./pages/AddBlog"
import AddblogCat from "./pages/AddBlogCat";
import AddColor from "./pages/AddColor";
import AddCat from "./pages/AddCat";
import AddBrand from "./pages/AddBrand"
import AddProduct from "./pages/AddProduct";
import Couponlist from "./pages/Couponlist";
import ViewOrder from "./pages/ViewOrder";
import AddCoupon from "./pages/AddCoupon";
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<AddProduct/>}/>
          <Route path="product/:id" element={<AddProduct/>}/>

          <Route path="enquiries" element={<Enquiries/>}/>
          <Route path="blog-list" element={<BlogList/>}/>

          <Route path="blog-category-list" element={<Blogcatlist/>}/>
          <Route path="blog-category" element={<AddblogCat/>}/>
          <Route path="blog-category/:id" element={<AddblogCat/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="order/:id" element={<ViewOrder/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="list-color" element={<Colorlist/>}/>
          <Route path="list-category" element={<CategoryList/>}/>
          <Route path="category" element={<AddCat/>}/>
          <Route path="category/:id" element={<AddCat />} />
          <Route path="list-brand" element={<BrandList/>}/>
          <Route path="brand" element={<AddBrand/>}/>
          <Route path="brand/:id" element={<AddBrand />} />
          <Route path="list-product" element={<ProductList/>}/>
          

          <Route path="blog" element={<AddBlog/>}/>
          <Route path="blog/:id" element={<AddBlog/>}/>
          <Route path="color" element={<AddColor/>}/>
          <Route path="color/:id" element={<AddColor/>}/>
          <Route path="coupon-list" element={<Couponlist/>}/>
          <Route path="coupon" element={<AddCoupon/>}/>
          <Route path="coupon/:id" element={<AddCoupon/>}/>

          
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
