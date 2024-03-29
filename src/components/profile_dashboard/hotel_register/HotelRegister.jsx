import React from "react";
import RegisterForm from "./RegisterForm";

function HotelRegister() {
  return (
    <div className="dark:text-gray-200 p-10  flex w-full h-screen overflow-hidden justify-center">
      <div className="max-w-2xl mx-auto w-full h-full overflow-auto p-5 bg-white dark:bg-gray-800 shadow-md rounded-md scrollable-element">
        <RegisterForm />
      </div>
    </div>
  );
}

export default HotelRegister;
