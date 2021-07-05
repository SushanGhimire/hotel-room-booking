import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import footerbg from "../../../assets/images/home/footerbg.jpg";
function Footer() {
  const date = new Date();
  return (
    <>
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 wp py-16 md:py-24  text-white bg-cover bg-center relative font-subHeader"
        style={{
          backgroundImage: `url(${footerbg})`,
        }}
      >
        <div className="w-full h-full top-0 bg-black absolute z-10 bg-opacity-70"></div>
        <div className="flex flex-col z-20">
          <div className="text-3xl font-semibold mx-auto">LOGO</div>
          {/* social links */}
          <div className="flex mx-auto ">
            <div className="transform hover:scale-110 animation cursor-pointer hover:bg-black rounded p-1">
              <FacebookIcon />
            </div>
            <div className="transform hover:scale-110 animation cursor-pointer hover:bg-black rounded p-1">
              <InstagramIcon className="social" />
            </div>
            <div className="transform hover:scale-110 animation cursor-pointer hover:bg-black rounded p-1">
              <TwitterIcon className="social" />
            </div>
          </div>
        </div>
        <div className="flex flex-col z-20 ">
          <div className="text-xl font-semibold mx-auto">QUICK LINKS</div>
          <div className="mx-auto">
            <ul className="text-center text-lg mt-2">
              <li>Home</li>
              <li>Rooms</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col z-20 ">
          <div className="text-xl font-semibold mx-auto">CUSTOMER CARE</div>
          <div>
            <ul className="text-center text-lg mt-2">
              <li>Tel: 9876854778</li>
              <li>Email: hrms@hrms.com</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col z-20">
          <div className="text-xl font-semibold mx-auto">OUR LOCATION</div>
          <div>
            <ul className="text-center text-lg mt-2">
              <li>Bharatpur-10, Chitwan Nepal</li>
              <li className="relative mt-1">
                <input
                  type="text"
                  className="bg-lightWhite text-black px-4 w-full py-2.5 focus:outline-none focus:border-buttonBlue border text-sm"
                  placeholder="Email Address"
                />
                <div className="absolute top-2 right-2 text-gray-400 text-xs">
                  <SendIcon />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" col-span-1 sm:col-span-2 md:col-span-4 bg-black py-4 text-white text-center  z-20">
        <span className="">
          Copyright &copy; {date.getFullYear()} All rights reserved
        </span>
      </div>
    </>
  );
}

export default Footer;
