import "./FeatureProduct.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faArrowLeft, faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"


import featureData2 from "../../datasource/product/feature2"
import bg from "../../img/product/feature2/bg.webp"
import Cart from "../cart/Cart"
const FeatureProduct =({product})=>{
    
    return (
        <div className="product">
            <div className="title-pro">
                <div className="l-title">
                    New in
                </div>
                <div className="r-title">
                    <div><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div><FontAwesomeIcon icon={faArrowRight} /></div>
                    
                </div>
                
            </div>
            <div className="list-pro">
                {/* {product?.map(item=>
                    <Cart item={item} key={item.id}/>
                )} */}


                {product&&product.map((item)=>{

                    return(
                        <Cart item={item} key={item._id}/>
                    )
                })}
            </div>

            <div className="list-pro2">
                <div className="img-pro2"><img src={bg} alt="" /></div>
               <div className="right-pro2">
                    {featureData2.map(item=><Cart item={item} key={item.id}/>)}
               </div>
            </div>
            
        </div>
    )
}
export default FeatureProduct;