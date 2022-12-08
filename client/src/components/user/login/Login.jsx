import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-header.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", {
        email: email,
        password: pass,
      });
      if (res.status === 200) {
        window.location.replace("/main");
        window.localStorage.setItem("user", "true");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[600px] w-[100%] flex justify-center items-center">
      <form className="flex flex-col gap-5 justify-center items-center  bg-nav-color w-[450px] h-[550px] text-gray-200 shadow shadow-black tracking-wider">
        <img src={logo} alt="marvel logo" className="h-16 mb-4" />
        <h1 className="text-[#e62429] font-black text-lg">LOG IN</h1>

        <input
          type="email"
          required
          placeholder="Email"
          className="w-[300px] p-2 tracking-wide text-gray-600"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="w-[300px] p-2 tracking-wide text-gray-600"
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          type="submit"
          className=" bg-[#e62429] w-[300px] py-2 tracking-wide font-bold text-md"
          onClick={handleSubmit}
        >
          SIGN IN
        </button>
        <p>
          Don't Have an Account?{" "}
          <Link to={"/"}>
            <span className="text-[#e62429] font-black">SIGN UP</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
