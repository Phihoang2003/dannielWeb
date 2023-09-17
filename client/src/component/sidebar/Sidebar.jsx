import "./Sidebar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState,useContext, useEffect } from "react"
import { OpenSidebar } from "../navbar/Navbar"
import { Link } from 'react-router-dom';
import { sidebarData } from "../../datasource/sidebarData/sidebarData"
import SubMenu from "./SubNav"
const Sidebar=()=>{
    
    const {showSidebar,toggleSidebar,sidebarValue}=useContext(OpenSidebar)
    
    
    
    // useEffect(()=>{
    //     setOpen(showSidebar)
        
    // },[showSidebar])
    // console.log(open );
    
    
    
    return (
        <div className="wrapper">
            
            <div className= {showSidebar&&sidebarValue?'sidebar ':'sidebar close'}  >
                <div className="header mt-[44px]">
                    <div className="content-header">
                        <div>Main menu</div>
                        <div ><FontAwesomeIcon icon={faXmark} onClick={toggleSidebar} /></div>
                    </div>
                </div>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-list">
                            
                                {sidebarData.map((item,index)=>{
                                    return(
                                        <li className="item-menu flex flex-col h-5 justify-between flex-1 ">
                                            <SubMenu item={item} key={index}/>
                                        </li>
                                    )
                                })}
                                {/* <div className="item">Offers</div>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div> */}
                           
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar