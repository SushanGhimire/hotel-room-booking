import { React, useState, useEffect, useRef } from "react";
import menu from "../../../assets/images/icons/menu.svg";
import close from "../../../assets/images/icons/close.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/action";
import { navlist } from "./navList";
function NavBar({ loggedIn, lang }) {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState(0);
  const [loginToggle, setLoginToggle] = useState(false);
  const handleLoginToggle = () => {
    setLoginToggle(!loginToggle);
  };
  const { role } = useSelector((state) => state.darkmode);
  const mobileSidebar = useRef();
  const coverAll = useRef();
  const toggleMobileSidebar = () => {
    const sidebar = mobileSidebar.current;
    const coverall = coverAll.current;
    if (sidebar.clientWidth > 0) {
      sidebar.style.width = "0";
      coverall.style.display = "none";
    } else {
      sidebar.style.width = "100%";
      coverall.style.display = "block";
    }
  };
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1023 && width < 1024) {
      setWidth(innerWidth);
    } else if (innerWidth < 1024 && width > 1023) {
      setWidth(innerWidth);
    }
  };
  const handleScroll = () => {
    if (window.pageYOffset > 0 && position === 0) {
      setPosition(1);
    } else if (window.pageYOffset === 0 && position > 0) {
      setPosition(0);
    }
  };
  const scrollToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleWidth);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="fixed z-30 w-full font-header">
      <div
        className={`w-full text-white flex justify-between px-5 md:px-10 lg:px-28 font-subHeader items-center py-5 lg:py-0 bg-opacity-40 animation ${
          position ? "bg-black 0" : ""
        } `}
      >
        {/* logo */}
        <div>
          <Link to="/" className="text-xl">
            Logo
          </Link>
        </div>
        {width > 1023 && (
          <>
            <div className="flex justify-center space-x-4 items-center">
              {navlist.map((list, index) => {
                const { name, to, np } = list;
                return (
                  <Link
                    to={to}
                    onClick={scrollToTop}
                    key={index}
                    className="border-b-2 border-transparent animation hover:border-white h-16 flex justify-center items-center hover"
                  >
                    {lang === "EN" ? name : np}
                  </Link>
                );
              })}
            </div>
            <div className="flex  justify-center space-x-4 items-center group">
              {/* <div>Register</div> */}
              <div
                className="w-20 h-16 relative cursor-pointer"
                onMouseEnter={handleLoginToggle}
                onMouseLeave={handleLoginToggle}
              >
                <div
                  className={`absolute w-full transition-all duration-300 ease-in-out ${
                    loginToggle ? "h-full" : "h-0"
                  } z-0 bg-alert top-0 right-0 flex justify-center items-center`}
                >
                  {/* {loginToggle ? "Login" : ""} */}
                  {/* Login */}
                </div>
                {loggedIn ? (
                  <>
                    {role === "SA" && (
                      <Link
                        to="/dashboard"
                        onClick={scrollToTop}
                        className="w-full h-full absolute top-0 right-0 flex justify-center items-center z-20"
                      >
                        Dashboard
                      </Link>
                    )}
                    {role === "USER" && (
                      <Link
                        to="/profile"
                        onClick={scrollToTop}
                        className="w-full h-full absolute top-0 right-0 flex justify-center items-center z-20"
                      >
                        Profile
                      </Link>
                    )}
                    {role === "H" && (
                      <Link
                        to="/h-dashboard"
                        onClick={scrollToTop}
                        className="w-full h-full absolute top-0 right-0 flex justify-center items-center z-20"
                      >
                        Dashboard
                      </Link>
                    )}
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={scrollToTop}
                    className="w-full h-full absolute top-0 right-0 flex justify-center items-center z-20"
                  >
                    Login
                  </Link>
                )}
              </div>
              <div className="flex space-x-1 items-center">
                {/* <span>En</span>
                <span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span> */}
                <select
                  name=""
                  id=""
                  className=" bg-transparent border-none focus:outline-none  
                  cursor-pointer"
                  onChange={(e) => dispatch(actions.toggleLang(e.target.value))}
                >
                  <option value="EN" className="text-black">
                    EN
                  </option>
                  <option value="NP" className="text-black">
                    NP
                  </option>
                </select>
              </div>
            </div>
          </>
        )}
        {width < 1024 && (
          <div className="flex">
            <img
              src={menu}
              alt=""
              className="w-6 h-6"
              onClick={toggleMobileSidebar}
            />
          </div>
        )}
        {/* for ipads and mobiles */}
        {width < 1024 && (
          <>
            <div
              className="h-screen w-screen fixed left-0 top-0 bg-black bg-opacity-50 hidden"
              ref={coverAll}
              onClick={toggleMobileSidebar}
            ></div>
            <div
              className="fixed top-0 left-0 h-screen w-0 z-20 bg-white text-black transition-all duration-300 overflow-hidden "
              ref={mobileSidebar}
            >
              <div className="flex justify-between p-5">
                <div>LOGO</div>
                {width < 1024 && (
                  <div className="flex">
                    <img
                      src={close}
                      alt=""
                      className="w-5 h-5"
                      onClick={toggleMobileSidebar}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col p-5 justify-center items-center space-y-6 text-xl font-semibold">
                {navlist.map((list, index) => {
                  const { name, to } = list;
                  return (
                    <Link
                      className={``}
                      to={to}
                      onClick={() => {
                        toggleMobileSidebar();
                        scrollToTop();
                      }}
                      key={index}
                    >
                      {name}
                    </Link>
                  );
                })}
                {loggedIn ? (
                  <>
                    {role === "SA" && (
                      <Link
                        to="/dashboard"
                        className=""
                        onClick={() => {
                          toggleMobileSidebar();
                          scrollToTop();
                        }}
                      >
                        Dashboard
                      </Link>
                    )}
                    {role === "USER" && (
                      <Link
                        to="/profile"
                        className=""
                        onClick={() => {
                          toggleMobileSidebar();
                          scrollToTop();
                        }}
                      >
                        Profile
                      </Link>
                    )}
                    {role === "H" && (
                      <Link
                        to="/h-dashboard"
                        className=""
                        onClick={() => {
                          toggleMobileSidebar();
                          scrollToTop();
                        }}
                      >
                        Dashboard
                      </Link>
                    )}
                  </>
                ) : (
                  <Link
                    to="/login"
                    className=""
                    onClick={() => {
                      toggleMobileSidebar();
                      scrollToTop();
                    }}
                  >
                    Login
                  </Link>
                )}
                <div className="flex space-x-1 items-center">
                  <span>En</span>
                  <span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
