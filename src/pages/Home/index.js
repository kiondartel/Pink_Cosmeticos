import { Component } from "react";
import "./home.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Header />
        <Footer />
      </>
    );
  }
}

export default Home;
