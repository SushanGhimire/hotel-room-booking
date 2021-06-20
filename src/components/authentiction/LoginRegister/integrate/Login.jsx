import React from "react";
import facebook from "../../../../assets/images/icons/facebook.svg";
import search from "../../../../assets/images/icons/search.svg";
function Login({ handleToggle }) {
  return (
    <div className="sm:w-96 flex flex-col p-10 bg-gray mx-auto">
      <div className="mx-auto text-xl font-semibold tracking-wider">LOGIN</div>
      <form className="flex flex-col w-full">
        {/* username  */}
        <div className="mt-5">
          <input
            type="text"
            className="px-4 py-3 bg-gray-200 text-sm rounded placeholder-gray-500 focus:outline-none focus:border- w-full font-medium"
            placeholder="USERNAME"
          />
        </div>
        {/* username  */}
        <div className="mt-5">
          <input
            type="password"
            className="px-4 py-3 bg-gray-200 text-sm rounded placeholder-gray-500 focus:outline-none focus:border- w-full font-semint-medium"
            placeholder="PASSWORD"
          />
        </div>
        {/* login with  */}
        <div className="flex space-x-2 mt-2">
          {/* facebook  */}
          <div
            className=" shadow-md w-24 flex justify-center py-2 rounded-md cursor-pointer"
            style={{
              backgroundColor: "#1976D2",
            }}
          >
            <img src={facebook} className="w-5 h-5" alt="" />
          </div>
          {/* google  */}
          <div className="bg-white w-24 flex justify-center py-2 rounded-md cursor-pointer  shadow-md">
            <img src={search} className="w-5 h-5" alt="" />
          </div>
        </div>
        {/* signin button  */}
        <div className="w-full h-40 flex justify-center items-center">
          <div className="border-2 p-4 rounded-xl cursor-pointer animation transform hover:scale-110 hover:border-gray-300 group">
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-gray-600 animation"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </form>
      {/* cant signin  */}
      <div className="mx-auto text-xs font-semibold text-gray-400 cursor-pointer animation hover:text-gray-600">
        CAN'T SIGN IN?
      </div>
      <div
        className="mx-auto text-xs font-semibold text-gray-400 mt-2 cursor-pointer animation hover:text-gray-600"
        onClick={handleToggle}
      >
        CREATE ACCOUNT
      </div>
    </div>
  );
}

export default Login;
