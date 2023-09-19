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
import { getUserProductWishList } from "../../features/user/userSlice";
const Home = () => {
  const dispatch=useDispatch();
  const productState=useSelector(state=>state.product.product)
 
 useEffect(()=>{
   getData();
 },[])
 const getData=async()=>{
  await dispatch(getAllProducts());
  await dispatch(getUserProductWishList());
}
  
  return (
    <Frame>
        
        <Banner img={banner}/>
        <Introduce />
        <Explore />
        <FeatureProduct product={productState}  />
        <PopularProduct />
        <BannerSection />
    </Frame>

    
  );
};

export default Home;
