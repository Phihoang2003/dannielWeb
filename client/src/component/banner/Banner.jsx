import "./Banner.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClock,
  faTowerObservation,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
const Banner = ({ img }) => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  
  
    let content;
    let style;
    switch (location.pathname.split("/")[2]) {
      
      case "allwatch":
        content = <div>Watches</div>;
        style = 'text-allwatch';
        break;
      case "charm":
        content=<><div>SAY HELLO TO THE</div> <div>CHARMS COLLECTION</div></>
        style='jewellery-charm';

        break;
      default:
        content = (
          <>
            <div>Up to</div>
            <div>30% off</div>
            <div>On select items</div>
            <div className=" hover:!bg-blue-300 hover:!text-white cursor-pointer">Explore</div>
          </>
        );
        style = 'content-banner';
        break;
    }
  
  return (
    <div className="banner">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className={style}>
        
        {content}
        
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
      {location.pathname.split("/")[1] === "allwatch" ? (
        <div className="filter">
          <div className="left">
            <FontAwesomeIcon icon="fa-solid fa-filter" />
            <div>Filter</div>
          </div>
          <div className="right">
            <div>Default</div>
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-arrow-up" />

              <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
            </div>
          </div>
        </div>
      ):null}
    </div>
  );
};
export default Banner;
