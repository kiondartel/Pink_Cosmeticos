import { Component } from "react";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h1>Confira nosso cosmeticos Ivone</h1>
            <p>nossos produtos sao de qualidade</p>
          </div>
          <div className="img-content" />
        </div>
      </div>
    );
  }
}

export default Header;
