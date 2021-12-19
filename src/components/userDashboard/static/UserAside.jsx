import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CommonPopup from "../../common/CommonPopup";
import RegisterForm from "../../profile_dashboard/hotel_register/RegisterForm";
function UserAside() {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <CommonPopup open={open} closeModal={closeModal}>
        <RegisterForm />
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
            <p>
              <div className="" onClick={() => setOpen(true)}>
                <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  Register Your Hotel
                  <span className="ml-2">+</span>
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAside;
