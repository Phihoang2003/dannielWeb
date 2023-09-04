import "./charmJewellery.scss"
import Frame from "../frame/framePage";
import Banner from "../../component/banner/Banner";
import banner from "../../img/jewellery/charm/banner.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data  from "../../datasource/product/feature1";
import Cart from "../../component/cart/Cart";
const CharmJewellery=()=>{
    return(
        <Frame>
            <Banner img={banner}/>
            <div className="title-pro">
                <div className="l-title">
                HEART CHARMS
                </div>
                <div className="r-title">
                    <div><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> </div>
                    <div><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></div>
                    
                </div>
                
            </div>

            <div className="charm-pro">
                <div className="list-pro">
                    {data.map(item=>
                        <Cart item={item} key={item.id}/>
                    )}
                </div>
            </div>

            <div className="title-pro">
                <div className="l-title">
                LETTERS AND NUMBERS
                </div>
                <div className="r-title">
                    <div><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> </div>
                    <div><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></div>
                    
                </div>
                
            </div>

            <div className="charm-pro">
                <div className="list-pro">
                    {data.map(item=>
                        <Cart item={item} key={item.id}/>
                    )}
                </div>
            </div>

            <div className="title-pro">
                <div className="l-title">
                ORBS
                </div>
                <div className="r-title">
                    <div><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> </div>
                    <div><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></div>
                    
                </div>
                
            </div>

            <div className="charm-pro">
                <div className="list-pro">
                    {data.map(item=>
                        <Cart item={item} key={item.id}/>
                    )}
                </div>
            </div>


        </Frame>
    )
}

export default CharmJewellery;