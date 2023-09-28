import { Component } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css";

class Footer extends Component {
  static iconProsp = {
    color: "white",
    size: 24,
  };

  render() {
    return (
      <div className="footer">
        <a href="/" className="about">
          <FaFacebook {...Footer.iconProsp} />
        </a>
        <a href="/" className="contact">
          <FaInstagram {...Footer.iconProsp} />
        </a>
        <a href="/" className="social-media">
          <FaTwitter {...Footer.iconProsp} />
        </a>
      </div>
    );
  }
}

export default Footer;
