import React, { Component } from "react";
import "./index.css";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
class NavBar extends Component {
  static iconProsp = {
    color: "white",
    size: 24,
  };

  state = {
    showToogle: false,
  };

  showToogle = () => {
    this.setState(() => ({
      showToogle: true,
    }));
  };

  closeToogle = () => {
    this.setState(() => ({
      showToogle: false,
    }));
  };

  renderLinks = () => (
    <List>
      {["Início", "Produtos", "Sobre Nós", "Contato"].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  render() {
    return (
      <nav className="navbar">
        <div className="brand">
          <h1>Pink Cosmeticos</h1>
        </div>
        <ul className="menu-itens">
          <a href="/">Início</a>
          <a href="/">Produtos</a>
          <a href="/">Sobre Nós</a>
          <a href="/">Contato</a>
        </ul>
        <div className="search-and-cart">
          <input type="text" placeholder="Pesquisar produtos" />
          <button type="submit">Pesquisar</button>
          <div className="shopping-cart">
            <FaShoppingCart {...NavBar.iconProsp} />
          </div>
          <FaBars className="menu-toggle" onClick={this.showToogle} />
          <Drawer
            anchor="right"
            open={this.state.showToogle}
            onClose={this.showToogle}
          >
            <div className="drawer">
              <FaTimes onClick={this.closeToogle} {...NavBar.iconProsp} />
              {this.renderLinks()}
            </div>
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default NavBar;
