import "./Cart.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"


const Cart =({item})=>{
    return(
        <div className="cart">
            
            <div className="image-cart">
                <img src={item.img} alt="img-error" />


                <div className="background-img">
                    <img src={item.background||item.img} alt="background-error" />
                </div>
            </div>
            

           <div className="wrapper-cart">
               <div className="icon-cart"> <FontAwesomeIcon icon="fa-regular fa-heart" /></div>
               <div className="new-cart" >New</div>
               <div className="title-cart">{item.title}</div>
               <div className="color">
                <div className="item1 flex ">
                    {item.color.map(i=>{
                        return <img src={i} alt="color error"/>
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