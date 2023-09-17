import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faXmark } from "@fortawesome/free-solid-svg-icons";
import {  useContext, useEffect } from "react";
import { OpenSidebar } from "../navbar/Navbar";

import { sidebarData } from "../../datasource/sidebarData/sidebarData";
import SubMenu from "./SubNav";
const Sidebar = () => {
  const { showSidebar, toggleSidebar, sidebarValue } = useContext(OpenSidebar);

  // useEffect(()=>{
  //     setOpen(showSidebar)

  // },[showSidebar])
  // console.log(open );

  return (
    <div className="wrapper">
      <div
        className={showSidebar && sidebarValue ? "sidebar " : "sidebar close"}
      >
        <div className="header mt-[44px]">
          <div className="content-header">
            <div>Main menu</div>
            <div>
              <FontAwesomeIcon icon={faXmark} onClick={toggleSidebar} />
            </div>
          </div>
        </div>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-list">
              {sidebarData.map((item, index) => {
                return (
                  <li className="item-menu flex flex-col h-5 justify-between flex-1 " key={index}>
                    <SubMenu item={item} key={index} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
