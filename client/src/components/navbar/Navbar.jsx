import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header.png";

const Navbar = () => {
  const user = window.localStorage.getItem("user");
  const handleLogout = () => {
    window.localStorage.removeItem("user");
  };
  return (
    <nav className="">
      <div className="bg-nav-color flex justify-center h-[52px] gap-[21.6rem] border-b border-[#393939] font-bold text-xs items-center">
        <div className="text-gray-200 py-[15px] border-x border-[#393939] px-5 tracking-widest flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 65.6 66.7"
            className="fill-white mr-2"
            width="20"
            height="20"
          >
            <path
              fill-rule="evenodd"
              d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"
            ></path>
          </svg>
          {user ? (
            <Link to={"/login"} onClick={handleLogout}>
              <p className="hover:text-gray-500 cursor-pointer">LOG OUT</p>
            </Link>
          ) : (
            <>
              <Link to={"/login"}>
                <p className="hover:text-gray-500 cursor-pointer">SIGN IN</p>
              </Link>

              <span className="mx-[6px]">|</span>
              <Link to={"/"}>
                <p className="hover:text-gray-500 cursor-pointer">JOIN</p>
              </Link>
            </>
          )}
        </div>
        <img src={logo} alt="logo" className="w-[auto] h-[52px]" />
        <div className="text-gray-200  flex gap-3 items-center justify-center text-center  tracking-widest border-x border-[#393939]">
          <img
            src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
            alt="img"
            className="w-5 h-[26px] ml-3"
          />
          <div className="  hover:text-gray-500 cursor-pointer">
            <p>MARVEL UNLIMITED</p>
            <p className="text-[10px]">SUBSCRIBE</p>
          </div>
          <div className="bg-gray-700 w-[.5px] py-[1.6rem]"></div>
          <svg
            className=" fill-white mr-3 hover:fill-gray-500 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
      </div>
      <div className="bg-nav-color h-10 text-gray-200 flex justify-center  gap-6 items-center font-semibold tracking-wider text-xs">
        <p>NEWS</p>
        <p>COMICS</p>
        <p>CHARACTERS</p>
        <p>MOVIES</p>
        <p>TV SHOWS</p>
        <p>GAMES</p>
        <p>VIDEOS</p>
        <p>MORE</p>
      </div>
    </nav>
  );
};

export default Navbar;
