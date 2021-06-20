import React from "react";
import plane from "../../../assets/images/icons/plane.svg";
import hotel from "../../../assets/images/icons/hotel.svg";
import car from "../../../assets/images/icons/car.svg";
import dropdown from "../../../assets/images/icons/dropdown.svg";
import next from "../../../assets/images/icons/next.svg";
function FlightHotel() {
  return (
    <div className="mt-16 flex flex-col relative">
      <div className="flex md:absolute -top-9 left-0 mb-1 md:mb-0">
        {/* flight  */}
        <div className="flex bg-lightWhite text-xs md:text-sm text-gray-600 items-center py-2 px-4 md:py-3 md:px-8 md:rounded-tl-lg">
          <span>
            <img src={plane} className="w-5 h-5 mr-1" alt="" />
          </span>
          <span>Flight</span>
        </div>
        {/* Hotel  */}
        <div className="flex bg-buttonBlue text-lightWhite items-center py-2 px-4 md:py-3 md:px-8 text-sm">
          <span>
            <img src={hotel} className="w-4 h-4 mr-1" alt="" />
          </span>
          <span>Hotel</span>
        </div>
        {/* Roadways  */}
        <div className="flex bg-buttonBlue text-lightWhite items-center py-2 px-4 md:py-3 md:px-8 text-sm ml-1">
          <span>
            <img src={car} className="w-4 h-4 mr-1" alt="" />
          </span>
          <span>Roadways</span>
        </div>
      </div>
      <div className="bg-lightWhite text-gray-600 flex flex-col px-8 py-5 rounded-lg">
        {/* header bar  */}
        <div className="md:flex md:space-x-4 space-y-2 md:space-y-0 md:space-x-4 md:items-center mt-4">
          <div className="md:flex md:space-x-4 space-y-2 md:space-y-0 md:items-center">
            {/* first class */}
            <div className="flex items-center text-sm">
              <span>First Class Travel</span>
              <span>
                <img src={dropdown} className="w-3 h-3 ml-1" alt="" />
              </span>
            </div>
            {/* Number of passenger */}
            <div className="flex items-center text-sm">
              <span>Number of passenger</span>
              <span>
                <img src={dropdown} className="w-3 h-3 ml-1" alt="" />
              </span>
            </div>
          </div>
          {/* Special offerings */}
          <div className="flex items-center text-sm">
            <span>Special Offering</span>
            <span>
              <img src={dropdown} className="w-3 h-3 ml-1" alt="" />
            </span>
          </div>
        </div>
        {/* input date bars  */}
        <div className="md:flex md:space-x-4 items-center py-5 relative space-y-2 md:space-y-0">
          <div className="lg:flex lg:space-x-4 items-center space-y-2 lg:space-y-0">
            {/* from  */}
            <div className="flex flex-col border border-gray-300 rounded-lg p-3 w-56">
              <div className="text-xs">From</div>
              <div className="text-black">Chitwan</div>
              <div className="text-xs">Bharatpur-03</div>
            </div>
            {/* from  */}
            <div className="flex flex-col border border-gray-300 rounded-lg p-3 w-56">
              <div className="text-xs">To</div>
              <div className="text-black">Kathmandu</div>
              <div className="text-xs">Pashupati road</div>
            </div>
          </div>
          {/* departure and return  */}
          <div className="sm:flex border border-gray-300 rounded-lg p-3 space-y-4 sm:space-y-0">
            {/* Departure  */}
            <div className="flex flex-col w-44">
              <div className="text-xs">Departure</div>
              <div className="text-black">June 19,2021</div>
              <div className="text-xs">Sunday</div>
            </div>
            {/* Departure  */}
            <div className="flex flex-col w-44">
              <div className="text-xs">Return</div>
              <div className="text-black">June 19,2021</div>
              <div className="text-xs">Saturday</div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-3 text-sm">
            <button
              className="flex bg-buttonBlue text-lightWhite px-6 py-2.5 rounded-lg
            items-center"
            >
              <span> Search Hotels</span>
              <span>
                <img src={next} className="w-4 h-4 ml-2" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightHotel;
