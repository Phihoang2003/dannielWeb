import "./Cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../features/products/productSlice";
import { getUserProductWishList } from "../../features/user/userSlice";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
const Cart = ({ item }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const dispatch = useDispatch();
  const addToWishlist = async (proId) => {
    alert(proId);

    await dispatch(addToWishList(proId));
  };

  const removeFromWishLish = async (id) => {
    await dispatch(addToWishList(id));
    toast.info("Delete WishList Product SuccessFull")
    setTimeout(() => {
      dispatch(getUserProductWishList());
    }, 100);
  };

  return (
    <div className="cart">
      <div className="image-cart">
        {item?.images && <img src={item?.images[0]?.url} alt="img-error" />}

        {/* <div className="background-img">
                    <img src={item.background||item.img} alt="background-error" />
                </div> */}
      </div>

      <div className="wrapper-cart">
        <div className="icon-cart">
          {path === "wishlist" ? (
            <AiFillDelete onClick={() => removeFromWishLish(item._id)} />
          ) : (
            <AiOutlineHeart onClick={() => addToWishlist(item?._id)} />
          )}
        </div>
        <div className="new-cart">New</div>
        <div className="title-cart">{item.title}</div>
        <div className="color">
          <div className="item1 flex ">
            {item.color.map((i, index) => {
              return <img src={i} key={index} alt="color error" />;
            })}
          </div>
        </div>
        <div className="price-cart">{item.price}</div>
      </div>
    </div>
  );
};

export default Cart;
