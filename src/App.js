import "./App.css";
import "tw-elements";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
