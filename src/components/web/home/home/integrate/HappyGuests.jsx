import React from "react";
import guest from "../../../../../assets/images/icons/guest.svg";
import hotels from "../../../../../assets/images/icons/hotels.svg";
import rooms from "../../../../../assets/images/icons/rooms.svg";
import destination from "../../../../../assets/images/icons/destination.svg";
function HappyGuests() {
  const happy = [
    {
      logo: guest,
      total: "38,900",
      sub: "# of Happy Guests",
    },
    {
      logo: hotels,
      total: "1000",
      sub: "# of Hotels",
    },
    {
      logo: rooms,
      total: "10000",
      sub: "# of Rooms",
    },
    {
      logo: destination,
      total: "900",
      sub: "# of DEstination",
    },
  ];
  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-6 wp py-16 md:py-24 bg-buttonBlue text-white">
      {/* happy guest  */}
      {happy.map((h, index) => {
        const { logo, total, sub } = h;
        return (
          <div className="text-center" key={index}>
            <div>
              <img src={logo} className="w-16 h-16 mx-auto mb-2" alt="" />
            </div>
            <div className="text-3xl font-semibold">{total}</div>
            <div className="text-sm">{sub}</div>
          </div>
        );
      })}
    </div>
  );
}

export default HappyGuests;
