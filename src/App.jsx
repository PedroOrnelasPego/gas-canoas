import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Products from "./components/Products";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Features></Features>
      <Products></Products>
      <Location></Location>
      <Footer></Footer>
    </>
  );
}

export default App;
