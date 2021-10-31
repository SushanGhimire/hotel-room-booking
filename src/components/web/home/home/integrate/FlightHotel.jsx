import React from "react";
import pin from "../../../../../assets/images/icons/pin.svg";
import hotel from "../../../../../assets/images/icons/hotel.svg";
import restaurant from "../../../../../assets/images/icons/restaurant.svg";

import SearchCard from "./SearchCard";
function FlightHotel({ lang }) {
  return (
    <div className="mt-5 md:mt-16 flex flex-col relative  xl:w-9/12 2xl:w-3/5 flex-wrap mx-auto lg:mx-0">
      <div className="flex  mb-1 md:mb-0">
        {/* flight  */}
        <div className="flex bg-white text-xs md:text-sm text-gray-600 items-center py-2 px-4 md:py-3 md:px-8 md:rounded-tl-2xl">
          <span>
            <img src={pin} className="w-4 h-4 mr-1" alt="" />
          </span>
          <span>{lang === "EN" ? "Room" : "कोठा"}</span>
        </div>
        {/* Hotel  */}
        <div className="flex bg-black text-white items-center py-2 px-4 md:py-3 md:px-8 text-sm ml-1 md:ml-0 bg-opacity-80">
          <span>
            <img src={hotel} className="w-4 h-4 mr-1" alt="" />
          </span>
          <span>{lang === "EN" ? "Hotel" : "कोहोटलठा"}</span>
        </div>
        {/* Roadways  */}
        <div className="flex bg-black text-lightWhite items-center py-2 px-4 md:py-3 md:px-8 text-sm bg-opacity-80">
          <span>
            <img src={restaurant} className="w-4 h-4 mr-1" alt="" />
          </span>
          <span>{lang === "EN" ? "Restaurant" : "रेस्टुरेन्ट"}</span>
        </div>
      </div>
      <SearchCard lang={lang} />
    </div>
  );
}

export default FlightHotel;
