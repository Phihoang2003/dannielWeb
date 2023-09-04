import "./Sidebar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState,useContext, useEffect } from "react"
import { OpenSidebar } from "../navbar/Navbar"
const Sidebar=()=>{
    
    const {showSidebar,toggleSidebar,sidebarValue}=useContext(OpenSidebar)
    
    
    
    // useEffect(()=>{
    //     setOpen(showSidebar)
        
    // },[showSidebar])
    // console.log(open );
    
    
    
    return (
        <div className="wrapper">
            
            <div className= {showSidebar&&sidebarValue?'sidebar ':'sidebar close'}  >
                <div className="header">
                    <div className="content-header">
                        <div>Main menu</div>
                        <div ><FontAwesomeIcon icon={faXmark} onClick={toggleSidebar} /></div>
                    </div>
                </div>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-list">
                            <li className="item-menu">
                                <div className="item">Offers</div>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                            </li>
                            <li className="item-menu">
                                <div className="item">Shop gifts</div>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                            </li>
                            <li className="item-menu">
                                <div className="item">Watches</div>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                            </li>
                            <li className="item-menu">
                                <div className="item">Jewellery</div>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                            </li>
            
                            <li className="item-menu">
                                <div className="item">Smartwatch case</div>
            
                            </li>
                            <li className="item-menu">
                                <div className="item">Sunglasses</div>
                            </li>
                            <li className="item-menu">
                                <div className="item">Edit</div>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                            </li>
                            <li className="item-menu">
                                <div className="item">Discover</div>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar