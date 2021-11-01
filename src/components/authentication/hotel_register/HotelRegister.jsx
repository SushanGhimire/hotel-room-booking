import React, { useState } from "react";
import logreg from "../../../assets/images/home/logreg.jpg";
import reg from "../../../assets/images/home/reg.jpg";
import HRegister from "./integrate/HRegister";
function HotelRegister() {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-start relative  bg-cover bg-center pb-10"
      style={{
        backgroundImage: `url(${logreg})`,
      }}
    >
      <div className="w-full h-full top-0 bg-black absolute z-10 bg-opacity-70"></div>
      <div className="w-full max-w-4xl bg-lightWhite relative lg:flex justify-between items-center rounded-lg overflow-hidden shadow-lg z-20 mt-24 2xl:mt-44">
        <div className="w-96"></div>
        <HRegister />
        <div
          className={`hidden lg:block absolute animation z-20 lg:top-0 lg:left-0  w-96 h-full  bg-cover`}
          style={{
            backgroundImage: `url(${reg})`,
          }}
        >
          {/* <img src={hotel} alt="" className="mt-12" /> */}
        </div>
      </div>
    </div>
  );
}

export default HotelRegister;
