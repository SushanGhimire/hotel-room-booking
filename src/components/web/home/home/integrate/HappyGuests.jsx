import React from "react";
import guest from "../../../../../assets/images/icons/guest.svg";
import hotels from "../../../../../assets/images/icons/hotels.svg";
import rooms from "../../../../../assets/images/icons/rooms.svg";
import destination from "../../../../../assets/images/icons/destination.svg";
function HappyGuests() {
  return (
    <div className="bg-buttonBlue grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-white  wp py-16 md:py-24">
      {/* happy guest  */}
      <div className="text-center">
        <div>
          <img src={guest} className="w-16 h-16 mx-auto mb-2" alt="" />
        </div>
        <div className="text-3xl font-semibold">38,900</div>
        <div className="text-sm"># of Happy Guests</div>
      </div>
      {/* Hotels  */}
      <div className="text-center">
        <div className="">
          <img src={hotels} className="w-16 h-16 mx-auto mb-2" alt="" />
        </div>
        <div className="text-3xl font-semibold">1000</div>
        <div className="text-sm"># of Hotels</div>
      </div>
      {/* rooms  */}
      <div className="text-center">
        <div>
          <img src={rooms} className="w-16 h-16 mx-auto mb-2" alt="" />
        </div>
        <div className="text-3xl font-semibold">320</div>
        <div className="text-sm"># of Rooms</div>
      </div>
      {/* rooms  */}
      <div className="text-center">
        <div>
          <img src={destination} className="w-16 h-16 mx-auto mb-2" alt="" />
        </div>
        <div className="text-3xl font-semibold">500</div>
        <div className="text-sm"># of Destination</div>
      </div>
    </div>
  );
}

export default HappyGuests;
