import "./Banner.scss"
import banner from "../../img/banner/banner-2.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faClock, faTowerObservation, faTruck } from "@fortawesome/free-solid-svg-icons"
const Banner=()=>{
    return(
        <div className="banner">
            <div className="image">
                <img src={banner} alt="" />
            </div>
            <div className="content-banner">
                <div>Up to</div>
                <div>30% off</div>
                <div>On select items</div>
                <div>Explore</div>


            </div>
            <div className="endow">
                <div className="item1-endow">
                    <FontAwesomeIcon icon={faTruck} />
                    <div>Free shipping</div>
                </div>
                <div className="item2-endow">
                    <FontAwesomeIcon icon={faTowerObservation} />
                    <div>Free Returns</div>
                </div>
                <div className="item3-endow">
                    <FontAwesomeIcon icon={faClock} />
                    <div>Two Year Warranty</div>
                </div>
                

            </div>
        </div>
        
        
    )
}
export default Banner 