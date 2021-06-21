import React from "react";
import pin from "../../../../../assets/images/icons/pin.svg";
import hotel from "../../../../../assets/images/icons/hotel.svg";
import restaurant from "../../../../../assets/images/icons/restaurant.svg";

import SearchCard from "./SearchCard";
function FlightHotel() {
  return (
    <div className="mt-5 md:mt-16 flex flex-col relative xl:w-9/12 flex-wrap mx-auto lg:mx-0">
      <div className="flex md:absolute -top-9 left-0 mb-1 md:mb-0">
        {/* flight  */}
        <div className="flex bg-lightWhite text-xs md:text-sm text-gray-600 items-center py-2 px-4 md:py-3 md:px-8 md:rounded-tl-lg">
          <span>
            <img src={pin} className="w-4 h-4 mr-1" alt="" />
          </span>
          <span>Room</span>
        </div>
        {/* Hotel  */}
        <div className="flex bg-buttonBlue text-lightWhite items-center py-2 px-4 md:py-3 md:px-8 text-sm ml-1 md:ml-0">
          <span>
            <img src={hotel} className="w-4 h-4 mr-1" alt="" />
          </span>
          <span>Hotel</span>
        </div>
        {/* Roadways  */}
        <div className="flex bg-buttonBlue text-lightWhite items-center py-2 px-4 md:py-3 md:px-8 text-sm ml-1">
          <span>
            <img src={restaurant} className="w-4 h-4 mr-1" alt="" />
          </span>
          <span>Restuarant</span>
        </div>
      </div>
      <SearchCard />
    </div>
  );
}

export default FlightHotel;
