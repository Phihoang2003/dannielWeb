import "./PopularProduct.scss"
import Cart from "../cart/Cart"
import { popularProduct } from "../../datasource/product/feature1"
import { useState } from "react"
const PopularProduct=()=>{
    
    return(
        <div className="popularProduct">
            <div className="title-popular">
                Most popular right now
            </div>
            <div className="list-pro">
                {popularProduct.map(item=>
                    <Cart item={item} key={item.id}/>
                )}
            </div>
        </div>
    )
}

export default PopularProduct