import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Aside() {
  let routes = [
    {
      name: "Dashboard",
      logo: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      url: "/dashboard",
    },
    {
      name: "Room",
      logo: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      subMenu: [
        {
          name: "Add Rooms",
          url: "/dashboard/add-room",
        },
        {
          name: "Rooms List",
          url: "/dashboard/rooms-list",
        },
      ],
    },
  ];
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
                      class={`${
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
                            key={index}
                            class={`px-2 py-1 transition-colors duration-150  cursor-pointer 
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
                              class="w-full"
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
        <div className="px-6 my-6">
          <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
