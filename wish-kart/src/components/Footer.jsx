import google from "../images/google.png";
import Appstore from "../images/Appstore.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import yt from "../images/youtube.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import style from "../styles/footer1.module.css";

export default function Footer() {
  return (
    <div className={style.outerBox}>
      <div className={style.first}>
        <h1>Shop Non-Stop on Meesho</h1>
        <p>
          Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery
        </p>
        <div className={style.img_box1}>
          <div>
            <img src={google} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <img src={Appstore} />
          </div>
        </div>
      </div>
      <div className={style.second}>
        <div className={style.list}>
          <li>Careers</li>
          <li>Become a supplier</li>
          <li> Hall of Fame</li>
        </div>
        <div>
          <li>Legal and Policies</li>
          <li>WishKart Tech Blog</li>
          <li>Notices and Returns</li>
        </div>
      </div>

      <div className={style.third}>
        <h1>React out to us</h1>
        <div className={style.img_box2}>
          <img src={facebook} />
          <img src={instagram} />
          <img src={yt} />
          <img src={linkedin} />
          <img src={twitter} />
        </div>
      </div>
      <div className={style.fourth}>
        <h1>Contact Us</h1>
        <p>
          Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
          06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring
          Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
          E-mail address: query@meesho.com © 2015-2022 Meesho.com
        </p>
      </div>
    </div>
  );
}
