import React from "react";
import rooms from "../../../assets/images/rooms/rooms.jpg";
import FlightHotel from "../home/home/integrate/FlightHotel";
import RoomCard from "./integrate/RoomCard";
function Rooms({ lang }) {
  let card = [];
  for (let i = 0; i < 8; i++) {
    card.push(<RoomCard />);
  }
  return (
    <>
      <div
        className="w-full min-h-screen  text-white  pb-10   bg-lightWhite bg-cover md:bg-center flex  relative bg-no-repeat md:bg-fixed font-subHeader"
        style={{
          backgroundImage: `url(${rooms})`,
        }}
      >
        <div className="w-full flex flex-col mt-36 2xl:mt-80">
          {/* top header  */}
          <div className="flex justify-start  text-5xl lg:text-6xl font-semibold tracking-wider wp">
            <div>
              {lang === "EN" ? "GET ROOMS" : "आफ्नो मनपर्ने"}
              <br />
              {lang === "EN" ? "  OF YOUR CHOICE" : "कोठा पाउनुहोस्"}
            </div>
          </div>
          {/* flight hotel roadway field  */}
          <div className="flex px-5 md:px-10 lg:px-28 ">
            <FlightHotel lang={lang} />
          </div>
        </div>
      </div>
      {/* room part  */}
      <div className="flex flex-col wp mt-24 pb-20">
        <div className=" mx-auto text-3xl md:text-4xl z-10">
          {lang === "EN" ? "Available Rooms" : "उपलब्ध कोठाहरू"}
        </div>
        <div className="w-36 mt-1 bg-black h-0.5 mx-auto"></div>
        {/* rooms  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 mt-10">
          {card}
        </div>
      </div>
    </>
  );
}

export default Rooms;
