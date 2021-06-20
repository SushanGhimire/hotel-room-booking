import React, { useState } from "react";
import Login from "./integrate/Login";
import Register from "./integrate/Register";
import hotel from "../../../assets/images/home/hotel.png";
function LoginRegister() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-primaryBlue">
      <div className="w-full max-w-4xl bg-lightWhite relative lg:flex justify-between">
        {/* login  */}
        <Login handleToggle={handleToggle} />
        {/* register  */}
        <Register handleToggle={handleToggle} />
        <div
          className={`absolute animation  lg:top-0 ${
            toggle ? "lg:left-96" : "lg:left-0"
          } w-full max-w-lg h-full bg-lightWhite `}
        >
          <img src={hotel} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
