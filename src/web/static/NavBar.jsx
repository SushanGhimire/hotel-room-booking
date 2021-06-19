import { React, useState, useEffect, useRef } from "react";
import menu from "../../assets/images/icons/menu.svg";
import close from "../../assets/images/icons/close.svg";
import { Link } from "react-router-dom";
function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [loginToggle, setLoginToggle] = useState(false);
  const handleLoginToggle = () => {
    setLoginToggle(!loginToggle);
  };
  const mobileSidebar = useRef();
  const coverAll = useRef();
  const navlist = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Rooms",
      to: "/rooms",
    },
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "About Us",
      to: "/about-us",
    },
    {
      name: "Contact Us",
      to: "/contct-us",
    },
  ];
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
  const scrollToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    // handleScroll();
    window.addEventListener("resize", handleWidth);
    // window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleWidth);
      // window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`w-full bg-buttonBlue text-white flex justify-between px-5 md:px-10 lg:px-20 font-header items-center py-5 lg:py-0 sticky top-0 z-50`}
    >
      {/* logo */}
      <div>
        <span className="text-xl">Logo</span>
      </div>
      {width > 1023 && (
        <>
          <div className="flex justify-center space-x-4 items-center">
            {navlist.map((list, index) => {
              const { name, to } = list;
              return (
                <Link className={``} to={to} onClick={scrollToTop} key={index}>
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="flex  justify-center space-x-4 items-center group">
            <div>Register</div>
            <div
              className="w-16 h-16 relative cursor-pointer"
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
              <div className="w-full h-full absolute top-0 right-0 flex justify-center items-center z-20">
                Login
              </div>
            </div>
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
              <div>Register</div>
              <div className="">Login</div>
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
  );
}

export default NavBar;
