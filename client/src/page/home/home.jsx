import "./home.scss";
import Introduce from "../../component/introduce/Introduce";
import Explore from "../../component/explore/Explore";
import FeatureProduct from "../../component/featureProduct/FeatureProduct";
import Frame from "../frame/framePage";
import PopularProduct from "../../component/popularProduct/PopularProduct";
import Banner from "../../component/banner/Banner";
import BannerSection from "../../component/banner-section/BannerSection";
import banner from "../../img/banner/banner-2.webp";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/products/productSlice";
import { useEffect } from "react";
const Home = () => {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.product.product)
 
  useEffect(()=>{
    getProducts();
  },[])
  const getProducts=()=>{
    dispatch(getAllProducts());
  }
  return (
    <Frame>
        
        <Banner img={banner}/>
        <Introduce />
        <Explore />
        <FeatureProduct products={products} />
        <PopularProduct />
        <BannerSection />
    </Frame>

    
  );
};

export default Home;
