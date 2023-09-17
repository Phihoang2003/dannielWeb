import "./Explore.scss"
import img from "../../img/explore/explore.webp"
const Explore=()=>{
    return(
        <div className="explore mt-8">
            <div className="img-explore">
                <img src={img} alt="" />

            </div>
            <div className="content-explore">
                <div>Summer deals</div>
                <div>Free extra strap</div>
                <div>When you buy</div>
                <div>A watch</div>
                <div>Explore</div>


            </div>
        </div>
    )
}
export default Explore;