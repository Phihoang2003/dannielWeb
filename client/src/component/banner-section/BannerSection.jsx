import "./BannerSection.scss"
import img1 from "../../img/img-section/img-section1.webp"
import img2 from "../../img/img-section/img-section2.webp"

import { underSection } from "../../datasource/product/feature1"
const BannerSection=()=>{
    return (
        <div className="bannerSection">
            <div className="img-section">
                <div className="item-section">
                    <div className="image" style={{backgroundImage:`url(${img1})`}}>

                    </div>
                    <div className="text">Look for him</div>
                </div>

                <div className="item-section">
                    <div className="image" style={{backgroundImage:`url(${img2})`}}></div>
                    <div className="text">Looks for her</div>
                </div>
                
            </div>

            <div className="under-section">
                <div className="title">
                    <div>#Dannielwellington</div>
                    <div>Get inspired by our community</div>
                </div>

                <div className="wrapper-under">
                    {underSection.map(item=>
                        <div className="image" style={{backgroundImage:`url(${item.img})`}}></div>
                    )}
                        
                    
                </div>
            </div>
        </div>
    )
}

export default BannerSection

