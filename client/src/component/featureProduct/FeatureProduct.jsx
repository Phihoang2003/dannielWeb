import "./FeatureProduct.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faArrowLeft, faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"

import featureData1 from "../../datasource/product/feature1"
import featureData2 from "../../datasource/product/feature2"
import bg from "../../img/product/feature2/bg.webp"
import Cart from "../cart/Cart"
const FeatureProduct =({products})=>{
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
                {featureData1.map(item=>
                    <Cart item={item} key={item.id}/>
                )}
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