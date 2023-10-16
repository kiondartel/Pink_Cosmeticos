// router.js
import React, { Component } from "react";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";

function ProductsWrapper() {
  const params = useParams();
  return <Category {...params} />;
}

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ProductsWrapper />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
