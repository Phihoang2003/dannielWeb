import "./allwatch.scss"
import Frame from "../frame/framePage"
import Banner from "../../component/banner/Banner"
import banner from "../../img/allwatch/banner/banner.webp"
import AllwatchProduct from "../../component/allwatchProduct/AllwatchProduct"
const AllWatch=()=>{
    return (
        <Frame>
            <Banner img={banner}/>
            <AllwatchProduct/>
        </Frame>
    )
}

export default AllWatch