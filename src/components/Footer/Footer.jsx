import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

let divbody = {
  "margin-top": "5rem",
  width: "100%",
  height: "50rem",
  "background-color": "#0F382C",
  display: "flex",
};

let img = {
  width: "5rem",
};

let footercontainer = {
  display: "flex",
  "padding-left": "4rem",
  color: "white",
};

let divmain = {
  display: "flex",
  "margin-top": "8rem",
  "margin-left": "5rem",
};

let lihe = {
  "list-style": "none",
  "padding-bottom": "3rem",
};
let ullihe = {
  padding: "0px",
};
let footersection = {
  "padding-right": "4rem",
};
let hthree = {
  margin: "0px",
};
let icon = {
  "font-size": "2.3rem",
  "padding-right": "1.6rem",
  "padding-top": "1rem",
};
let appdownload = {
  width: "13rem",
  height: "4rem",
  "background-color": "white",
  "border-radius": "0.5rem",
  'margin-bottom':'1rem'
};
let app = {
  "font-size": "3rem",
  "padding-left": "1rem",
  "padding-top": "0.3rem",
};

let appdiv = {
  display: "flex",
};
let apptext = {
  color: "black",
  "padding-top": "1rem",
  "padding-left": "1rem",
};
let downtext = {
  "font-size": "0.7rem",
  margin: "0px",
};
let apptype = {
  "font-size": "1.3rem",
  'font-weight':'bold',
  margin: "0px",
};
const Footer = () => {
  return (
    <div style={divbody}>
      <div style={divmain}>
        <div>
          <img
            src="https://www.starbucks.in/assets/icon/logo.png"
            style={img}
          ></img>
        </div>

        <div style={footercontainer}>
          <div style={footersection}>
            <h3 style={hthree}>About Us</h3>
            <ul style={ullihe}>
              <li style={lihe}>Our Heritage</li>
              <li style={lihe}>Coffee House</li>
              <li style={lihe}>Our Company</li>
            </ul>
          </div>

          <div style={footersection}>
            <h3 style={hthree}>Responsibility</h3>
            <ul style={ullihe}>
              <li style={lihe}>Diversity</li>
              <li style={lihe}>Community</li>
              <li style={lihe}>Ethical Sourcing</li>
              <li style={lihe}>Learn More</li>
            </ul>
          </div>

          <div style={footersection}>
            <h3 style={hthree}>Quick Links</h3>
            <ul style={ullihe}>
              <li style={lihe}>Privacy Policy</li>
              <li style={lihe}>FAQs</li>
              <li style={lihe}>Customer Service</li>
              <li style={lihe}>Delivery</li>
              <li style={lihe}>Loyalty Program Terms and Conditions</li>
              <li style={lihe}>Beverage Subscription</li>
              <li style={lihe}>Starbucks India Mobile App Terms of Use</li>
              <li style={lihe}>Special Discount 25% Off Offer</li>
            </ul>
          </div>

          <div style={footersection}>
            <h3 style={hthree}>SOCIAL MEDIA</h3>
            <FontAwesomeIcon icon={faInstagram} style={icon} />
            <FontAwesomeIcon icon={faFacebookF} style={icon} />
            <FontAwesomeIcon icon={faXTwitter} style={icon} />
          </div>

          <div>
            <div style={appdownload}>
              <div style={appdiv}>
                <div style={app}>
                  <FontAwesomeIcon
                    icon={faApple}
                    style={{ color: "#0c0d0d" }}
                  />
                </div>

                <div style={apptext}>
                  <p style={downtext}>DOWNLOAD ON THE</p>
                  <p style={apptype}>App Store</p>
                </div>
              </div>
            </div>

            <div style={appdownload}>
              <div style={appdiv}>
                <div style={app}>
                  <FontAwesomeIcon
                    icon={faAndroid}
                    style={{ color: "#0c0d0d" }}
                  />
                </div>

                <div style={apptext}>
                  <p style={downtext}>GET IT ON</p>
                  <p style={apptype}>Play Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
