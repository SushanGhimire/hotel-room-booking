import React, { useState } from "react";
import Login from "./integrate/Login";
import Register from "./integrate/Register";
// import hotel from "../../../assets/images/home/hotel.png";
// import kathmandu from "../../../assets/images/icons/kathmandu.png";
import logreg from "../../../assets/images/home/logreg.jpg";
import reg from "../../../assets/images/home/reg.jpg";
function LoginRegister() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className="w-full min-h-screen flex justify-center items-start relative  bg-cover bg-center pb-10"
      style={{
        backgroundImage: `url(${logreg})`,
      }}
    >
      <div className="w-full h-full top-0 bg-black absolute z-10 bg-opacity-70"></div>
      <div className="w-full max-w-4xl bg-lightWhite relative lg:flex justify-between items-center rounded-lg overflow-hidden shadow-lg z-20 mt-24 2xl:mt-44">
        {/* login  */}
        <Login handleToggle={handleToggle} />
        {/* register  */}
        <Register handleToggle={handleToggle} />
        <div
          className={`hidden lg:block absolute animation z-20 lg:top-0 ${
            toggle ? "lg:left-96" : "lg:left-0"
          } w-full max-w-lg h-full  bg-cover bg-center`}
          style={{
            backgroundImage: `url(${reg})`,
          }}
        >
          {/* <img src={hotel} alt="" className="mt-12" /> */}
        </div>
      </div>
      {/* <div className="w-full mt-5 bottom-3 absolute right-0">
        <img src={kathmandu} className="w-full " alt="" />
      </div> */}
    </div>
  );
}

export default LoginRegister;
