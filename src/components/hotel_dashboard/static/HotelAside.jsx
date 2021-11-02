import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "./hotelRoute";
function Aside() {
  const [activeRoute, setActiveRoute] = useState("");
  const [activeIndex, setActiveIndex] = useState("");
  const handleDropdown = (ind) => {
    if (activeIndex === ind) {
      setActiveIndex("");
    } else {
      setActiveIndex(ind);
    }
  };
  useEffect(() => {
    let nav = window.location.pathname.split("/")[2];
    if (nav === undefined) {
      setActiveRoute("/dashboard");
    } else {
      setActiveRoute(`/${nav}`);
    }
    return () => {};
  }, []);
  return (
    <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <Link
          to="/dashboard"
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        >
          BISRRAM
        </Link>
        <ul className="mt-6">
          {routes.map((route, index) => {
            const { name, url, logo, subMenu } = route;
            return (
              <li className="relative px-6 py-3" key={index}>
                {activeRoute === url && (
                  <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                )}
                {subMenu ? (
                  <div className="flex flex-col">
                    <div
                      className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100 
                      cursor-pointer relative"
                      onClick={() => handleDropdown(index)}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={logo}
                        />
                      </svg>
                      <span className="ml-4">{name}</span>
                      <span
                        className={`absolute top-0.5 right-0 transform transition-all duration-300 ease-in-out ${
                          activeIndex === index ? "-rotate-180" : "rotate-0"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                    <ul
                      className={`${
                        activeIndex === index ? "p-2" : ""
                      }  mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer`}
                      style={{
                        height: `${
                          activeIndex === index
                            ? `${subMenu.length * 42}px`
                            : "0"
                        }`,
                      }}
                    >
                      {subMenu.map((sub) => {
                        const { name, url } = sub;
                        return (
                          <li
                            key={url}
                            className={`px-2 py-1 transition-colors duration-150  cursor-pointer 
                             dark:hover:text-gray-200  dark:text-gray-200   rounded-md
                             ${
                               activeRoute === url
                                 ? "bg-purple-500 text-white dark:bg-gray-800"
                                 : "hover:text-gray-800"
                             }
                             `}
                            style={{
                              height: "30px",
                            }}
                          >
                            <Link
                              to={url}
                              className="w-full"
                              onClick={() => setActiveRoute(url)}
                            >
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={url}
                    className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                    onClick={() => setActiveRoute(url)}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={logo}
                      />
                    </svg>
                    <span className="ml-4">{name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
