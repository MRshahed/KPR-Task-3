import "./App.css";
import "tw-elements";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";
import Register from "./components/user/register/Register";
import Login from "./components/user/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={<Slider />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
