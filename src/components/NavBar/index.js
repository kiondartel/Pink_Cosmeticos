import React, { Component } from "react";
import "./index.css";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

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
      {["Início", "Produtos", "Sobre Nós"].map((text) => (
        <ListItem
          button
          key={text}
          component={Link}
          to={`/${text.toLowerCase()}`}
        >
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  render() {
    return (
      <nav className="navbar">
        <div className="brand" onClick={() => {}} style={{ cursor: "pointer" }}>
          <h1>Pink Cosmeticos</h1>
        </div>
        <ul className="menu-itens">
          <Link to="/">Início</Link>
          <Link to="/category">Produtos</Link>
          <Link to="/about">Sobre Nós</Link>
        </ul>
        <div className="search-and-cart">
          <SearchBar />
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
