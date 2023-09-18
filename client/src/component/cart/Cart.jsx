import "./Cart.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux"
import {addToWishList} from "../../features/products/productSlice"
const Cart =({item})=>{ 
   const dispatch=useDispatch();
   const addToWishlist=(proId)=>{
    
    dispatch(addToWishList(proId))
   }
    return(
        <div className="cart">
            
            <div className="image-cart">
               {item?.images&& <img src={item?.images[0]?.url} alt="img-error" />}


                {/* <div className="background-img">
                    <img src={item.background||item.img} alt="background-error" />
                </div> */}
            </div>
            

           <div className="wrapper-cart">
               <div className="icon-cart" > <FontAwesomeIcon onClick={()=>addToWishlist(item?._id)} icon="fa-regular fa-heart" /></div>
               <div className="new-cart" >New</div>
               <div className="title-cart">{item.title}</div>
               <div className="color">
                <div className="item1 flex ">
                    {item.color.map((i,index)=>{
                        return <img src={i} key={index} alt="color error"/>
                    })}
                </div>
               
               </div>
               <div className="price-cart">
                {item.price}
               </div>
           </div>

        </div>
        
    )
}

export default Cart