import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import image from "../assets/shop.png";
import { mobile } from "../responsive";

const Footer = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <img src={image} alt="Logo" style={{ height: "40px", width: "90px" }} />
        <p style={{ margin: "20px 0px" }}>
          Chuyên bán các loại quần áo chất lượng được nhập từ Châu Âu với thái
          độ phục vụ khách hàng là thượng đế. Hãy tận hưởng tại shop của chúng
          tối
        </p>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              color: "white",
              backgroundColor: "#3B5999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
          >
            <Facebook />
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              color: "white",
              backgroundColor: "#E4405F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
          >
            <Instagram />
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              color: "white",
              backgroundColor: "#55ACEE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
          >
            <Twitter />
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              color: "white",
              backgroundColor: "#E60023",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
          >
            <Pinterest />
          </div>
        </div>
      </div>
      <div
        style={{
          flex: "1",
          padding: "20px",
          display: mobile({ display: "none" }),
        }}
      >
        <h3 style={{ marginBottom: "30px" }}>Useful Links</h3>
        <ul
          style={{
            margin: "0",
            padding: "0",
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <li style={{ width: "50%", marginBottom: "10px" }}>Home</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>Cart</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>Man Fashion</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>Woman Fashion</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>Accessories</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>My Account</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>Order Tracking</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>Wishlist</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>Wishlist</li>
          <li style={{ width: "50%", marginBottom: "10px" }}>Terms</li>
        </ul>
      </div>
      <div
        style={{
          flex: "1",
          padding: "20px",
          backgroundColor: mobile("#fff8f8"),
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Contact</h3>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Room style={{ marginRight: "10px" }} />
          No. 1, Vo Van Ngan Street, Thu Duc District, Ho Chi Minh city
        </div>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Phone style={{ marginRight: "10px" }} /> +84 869 154 692
        </div>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MailOutline style={{ marginRight: "10px" }} /> cong.dev.it@gmail.com
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="Payment"
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
};

export default Footer;
