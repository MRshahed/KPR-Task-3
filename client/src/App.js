import "./App.css";
import "tw-elements";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";
import Register from "./components/user/register/Register";
import Login from "./components/user/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = window.localStorage.getItem("user");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={user ? <Slider /> : <Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
