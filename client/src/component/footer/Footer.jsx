import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div class="find-more-wrapper">
        <div class="find-more-content">
          <p class="text-find">FIND MORE...</p>
          <div class="pro-find-more">
            <p>JEWELLERY</p>
            <p>WATCHES</p>
            <p>GIFTS</p>
          </div>
        </div>
      </div>

      <div class="subcribe">
        <div class="info-subcribe mt-30">
          <p>JOIN THE DW MOVEMENT AND ENJOY 10% OFF YOUR FIRST ORDER</p>
          <p>
            Be the first to hear about exclusive offers, special editions, and
            new launches from the Daniel Wellington community. Sign up today,
            and you'll receive 10% off your first order.
          </p>
          <div className="input1">
            <div className="input-group">
              <input type="text" required  />
              <label for="">Email</label>
            </div>
            <div className="btn-subcribe">Subcribe</div>
          </div>
          <div class="text-subcribe">
            <span class="text">
              By signing up, I confirm that I’m 16 years or older, that I want
              to receive personalised marketing by email and that I have read
              and understood Daniel Wellington’s Privacy Policy.
            </span>
          </div>
        </div>
      </div>
      <footer>
        <div class="wrapper-footer">
          <div class="item">
            <p>SHOP</p>
            <p>Shop Instagram</p>
            <p>Watches</p>
            <p>Jewellery</p>
            <p>Watch Straps</p>
            <p>Stores</p>
            <p>Accessories</p>
            <p>Inspiration</p>
          </div>

          <div class="item">
            <p>SUPPORT</p>
            <p>Help</p>
            <p>Contact us</p>
            <p>Size Information</p>
            <p>How to change your strap</p>
            <p>How to adjust your mesh strap</p>
            <p>How to measure your ring size</p>
            <p>How to assemble the smartwatch case</p>
          </div>

          <div class="item">
            <p>INFORMATION</p>
            <p>Students</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Return Policy</p>
            <p>Warranties</p>
            <p>Product Safety</p>
            <p>Owners Guide</p>
          </div>

          <div class="item">
            <p>ABOUT US</p>
            <p>Our Story</p>
            <p>Authenticity</p>
            <p>Accessibility</p>
            <p>Sustainability</p>
            <p>Career</p>
            <p>Become a Brandbassador</p>
          </div>
        </div>
        <div class="nation">
        <FontAwesomeIcon icon="fa-solid fa-globe" />
          <div>Viet Nam</div>
        </div>

        <div class="social-network">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-pinterest" />
            <FontAwesomeIcon icon="fa-brands fa-snapchat" />
        </div>
      </footer>
    </div>
  );
};
export default Footer;
