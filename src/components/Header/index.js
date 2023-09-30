import { Component } from "react";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h1>Pink Cosmeticos</h1>
            <h2>nossos produtos sao de qualidade</h2>
          </div>
          <div className="img-content" />
        </div>
      </div>
    );
  }
}

export default Header;
