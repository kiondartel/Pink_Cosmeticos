// router.js
import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
