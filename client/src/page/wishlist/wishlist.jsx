import { useDispatch, useSelector } from "react-redux"
import Cart from "../../component/cart/Cart"
import Frame from "../frame/framePage"
import { getUserProductWishList } from "../../features/user/userSlice";
import { useEffect } from "react";


const WishList=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        getWishListFromDb();
    },[])
    const getWishListFromDb=async()=>{
        await dispatch(getUserProductWishList())
    }

    const wishListState=useSelector((state)=>state.auth.wishlist?.wishlist)
   
    return(
       <Frame>
            <div className="">
                <h1 className="w-full flex items-center justify-center mt-[200px] text-[25px] opacity-70 tracking-widest leading-4">WISH LIST</h1>
                {wishListState?.length===0 && <div className="w-full flex items-center justify-center font-semibold text-[30px] mt-[30px]">No Data</div>}
                <div className="list-pro ">
                    {wishListState&&wishListState.map((item,index)=>{
                        
                        return(
                            <Cart item={item} key={item._id} />
                        )
                    })}
                </div>
            </div>
       </Frame>
    )
}

export default WishList