import React from "react";
import logo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-nav-color py-20 px-20 gap-y-20 flex flex-col items-center justify-center">
      <div className="flex gap-20 items-center text-gray-200 justify-center tracking-wider">
        <img src={logo} alt="footer" className="w-[80px] h-[115px]" />
        <div className="flex flex-col gap-2 font-semibold">
          <p>ABOUT MARVEL</p>
          <p>HElP/FAQS</p>
          <p>CAREERS</p>
          <p>INTERNSHIPS</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>ADVERTISING</p>
          <p>DISNEY+</p>
          <p>MARVELHQ.COM</p>
          <p>REDEED DIGITAL COMICS</p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="flex-col flex gap-y-16">
            <img
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"
              alt="footer img 1"
              className="w-[55px] h-[24px]"
            />
            <img
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png"
              alt="footer img 2"
              className="w-[55px] h-[24px]"
            />
          </div>
          <div className="flex-col gap-8 flex">
            <div>
              <h1>MARVEL INSIDER</h1>
              <p className="text-[#767676] text-sm">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
            <div>
              <h1>MARVEL UNLIMITED</h1>
              <p className="text-[#767676] text-sm">
                Access Over 30,000+ Digital Comics
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="mb-4 font-semibold">FOLLOW MARVEL</h1>
          <div className="grid grid-cols-4 gap-4 text-[24px] gap-x-8 text-[#767676]">
            <i class="bx bxl-facebook-square"></i>
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-tumblr"></i>
            <i class="bx bxl-youtube"></i>
            <i class="bx bxl-snapchat"></i>
            <i class="bx bxl-pinterest"></i>
          </div>
        </div>
      </div>
      <div className=" text-[#767676] text-xs flex flex-wrap w-[1100px] gap-x-8 justify-center items-center gap-y-4 tracking-wider">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Your California Privacy Rights</p>
        <p>Do Not Sell My Personal Informaion</p>
        <p>Children's Online Privacy Policy</p>
        <p>License Agreement</p>
        <p>Interest-Based Ads</p>
        <p>Marvel Insider Terms</p>
        <p>@2022 MARVEL</p>
      </div>
    </footer>
  );
};

export default Footer;
