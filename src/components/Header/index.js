import { Component } from "react";
import "./header.css";
import homeImage from "../../assets/images/home.jpg";
class Header extends Component {
  render() {
    const { title, description, image } = this.props;
    return (
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h1>{title ? title : "Pink Cosmeticos"}</h1>
            <h2>
              {description ? description : "nossos produtos sao de qualidade"}
            </h2>
          </div>
          <div className="img-content">
            <img src={image ? image : homeImage} alt="Principal" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
