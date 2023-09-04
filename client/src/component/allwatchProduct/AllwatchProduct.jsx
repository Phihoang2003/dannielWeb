import "./AllwatchProduct.scss"
import { allwatch } from "../../datasource/product/feature1"
import Cart from "../cart/Cart"
const AllwatchProduct=()=>{
    return(
        <div className="allwatch">
            <div className="list-pro">
                {allwatch.map(item=>
                    <Cart item={item} key={item.id}/>
                )}
            </div>
        </div>
    )
}

export default AllwatchProduct