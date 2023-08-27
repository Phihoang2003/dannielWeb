import Navbar from "../../component/navbar/Navbar";
import Banner from "../../component/banner/Banner";
import Introduce from "../../component/introduce/Introduce";
import Explore from "../../component/explore/Explore";
import FeatureProduct from "../../component/featureProduct/FeatureProduct";
import "./home.scss";
import { useState, useEffect, useContext } from "react";

import PopularProduct from "../../component/popularProduct/PopularProduct";

import BannerSection from "../../component/banner-section/BannerSection";
import Footer from "../../component/footer/Footer";
const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  
  const handleSidebar = (value) => {
    setSidebar(value);
  };
  const handleOpen = (value) => {
    setOpen(value);
  };

  const handleClick = () => {
    
    
      setOpen(false);
      setSidebar(false)

    
  };

  const [isCursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    const handleMouseMove = (e) => {
      const w = e.clientWidth;
      const h = e.clientHeight;

      setCursorPosition({ x: e.clientX - 15, y: e.clientY - 15 });
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    display: isCursorVisible ? "block" : "none",
    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
  };

  return (
    <div className={open ? "home open " : "home"}>
      {open && (
        <div className="cursor" style={cursorStyle} onClick={handleClick}>
          <div className="pointer"></div>
          <div className="pointer"></div>
        </div>
      )}
      <Navbar open={handleOpen} sidebar={handleSidebar} sidebarValue={sidebar} />
      <Banner />
      <Introduce />
      <Explore />
      <FeatureProduct />
      <PopularProduct/>
      <BannerSection/>
      <Footer/>
    </div>
  );
};

export default Home;
