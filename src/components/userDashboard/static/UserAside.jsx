import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../authentication/axiosInstance";
import CommonPopup from "../../common/CommonPopup";
import RegisterForm from "../../profile_dashboard/hotel_register/RegisterForm";
import HotelSucess from "./HotelSucess";
function UserAside() {
  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState("");
  const [isHotelOpen, setIsHotelOpen] = useState(false);
  const [isHotel, setIsHotel] = useState(false);
  const [message, setMessage] = useState("");
  const closeModal = () => {
    setOpen(false);
    setIsHotelOpen(false);
  };
  const fetchHotelInfo = async () => {
    try {
      const res = await axiosInstance.get(`/hotel/`);
      console.log(res);
      setSlug(res.data[0].slug);
      if (res.data[0].verified_hotel === "AC") {
        setMessage("Your hotel is verified sucessfylly.");
        setIsHotelOpen(true);
        setIsHotel(true);
      } else if (res.data[0].verified_hotel === "PE") {
        setMessage("Your hotel is Currently under review.");
        setIsHotelOpen(true);
        setIsHotel(true);
      } else {
        setMessage("Your hotel is been rejected. Please try again.");
        setIsHotelOpen(true);
        setIsHotel(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchHotelInfo();
  }, []);
  return (
    <>
      <CommonPopup width="max-w-2xl" open={open} closeModal={closeModal}>
        <RegisterForm fetchHotelInfo={fetchHotelInfo} />
      </CommonPopup>
      <CommonPopup width="max-w-md" open={isHotelOpen} closeModal={closeModal}>
        <HotelSucess slug={slug} closeModal={closeModal} message={message} />
      </CommonPopup>
      <div className="w-72">
        <div className="flex flex-col gap-y-10 justify-center items-center m-auto border-b-2 p-4 border-green-200">
          <div className="font-bold text-xl text-primaryBlue">
            <h1>Settings</h1>
          </div>
          <div className="flex flex-col gap-y-3 text-primaryBlue">
            <p>
              <NavLink exact to="/user" activeClassName="text-buttonBlue">
                User Profile
              </NavLink>
            </p>
            <p>
              <NavLink
                exact
                to="/user/bookmarks"
                activeClassName="text-buttonBlue"
              >
                Bookmarks
              </NavLink>
            </p>
            <p>
              <NavLink
                exact
                to="/user/history"
                activeClassName="text-buttonBlue"
              >
                History
              </NavLink>
            </p>
            <p>
              <NavLink exact to="/user/faqs" activeClassName="text-buttonBlue">
                FAQ
              </NavLink>
            </p>
            <p>
              <NavLink
                exact
                to="/user/contact-us"
                activeClassName="text-buttonBlue"
              >
                Contact us
              </NavLink>
            </p>
            <div>
              {isHotel ? (
                <div className="" onClick={fetchHotelInfo}>
                  <button className="flex items-center justify-between w-full px-4  py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    Your hotel is under preview
                  </button>
                </div>
              ) : (
                <div className="" onClick={() => setOpen(true)}>
                  <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                    Register Your Hotel
                    <span className="ml-2">+</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAside;
