import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faMagnifyingGlass,
  faBars,
  faMessage,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar/Sidebar";
import { createContext, useEffect, useState } from "react";

export const OpenSidebar = createContext();

const Navbar = ({ open, sidebar, sidebarValue }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    open(showSidebar);
    sidebar(showSidebar);
  }, [showSidebar]);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const [showline,setShowline]=useState(true)
  const navbar=document.querySelector('.navbar')
 
  
  return (
    <OpenSidebar.Provider value={{ showSidebar, toggleSidebar, sidebarValue }}>
      <>
        <div className="line-navbar"></div>
        <div className="navbar">
          <div className="l-navbar">
            <div className="menu-icon">
              <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
            </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <div className="center-navbar">
            <div className="title-navbar">Daniel wellington</div>
            <div className="item-navbar">
              <div>Shop gifts</div>
              <div>Watches</div>
              <div>Jewellery</div>
              <div>Smartwatch case</div>
              <div>Sunglasses</div>
            </div>
          </div>

          <div className="r-navbar">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>

          <Sidebar sidebarValue={sidebarValue} />
        </div>
      </>
    </OpenSidebar.Provider>
  );
};

export default Navbar;
