import { Component } from "react";
import "./home.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./home.css";
import ProductPreview from "./components/ProductPreview";
class Home extends Component {
  render() {
    return (
      <>
        <div>
          <NavBar />
          <Header />
          <ProductPreview />
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
