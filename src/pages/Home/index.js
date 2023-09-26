import { Component } from "react";
import "./home.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default Home;
