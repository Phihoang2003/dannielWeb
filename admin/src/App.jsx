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
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries/>}/>
          <Route path="blog-list" element={<BlogList/>}/>
          <Route path="blog-category-list" element={<Blogcatlist/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="list-color" element={<Colorlist/>}/>
          <Route path="list-category" element={<CategoryList/>}/>
          <Route path="list-brand" element={<BrandList/>}/>
          <Route path="list-product" element={<ProductList/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
