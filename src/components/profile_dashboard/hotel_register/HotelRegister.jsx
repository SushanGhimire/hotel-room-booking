import React from "react";
import RegisterForm from "./RegisterForm";

function HotelRegister() {
  return (
    <div className="dark:text-gray-200 p-10 flex w-full h-full justify-center items-center">
      <div className="max-w-2xl mx-auto w-full p-5 bg-white dark:bg-gray-800 shadow-md rounded-md">
        <RegisterForm />
      </div>
    </div>
  );
}

export default HotelRegister;
