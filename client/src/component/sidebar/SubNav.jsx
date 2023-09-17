import { useState } from "react"
import {Link} from "react-router-dom"

const SubMenu=({item})=>{
    const [subNav,setSubNav]=useState(false);
    const showSubNav=()=>setSubNav(!subNav);
    
    return(
        <>
            <Link onClick={item.subNav && showSubNav} >
            <div className="flex justify-between items-center w-[180px]">
                <div>{item.title}</div>
                <div className="text-[17px]">{item.subNav&&subNav?item.iconOpened:item.subNav?item.iconClosed:null}</div>
            </div>
           
            </Link>

            {subNav&&item.subNav.map((item,index)=>{
                return(
                    <div className="text-base mt-[30px] w-[160px] h-[20px] ">
                        <Link to={item.path} key={index}>
                            <div>{item.title}</div>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}
export default SubMenu;