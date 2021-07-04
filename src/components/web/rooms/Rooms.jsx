import React from "react";
import rooms from "../../../assets/images/rooms/rooms.jpg";
import FlightHotel from "../home/home/integrate/FlightHotel";
import RoomCard from "./integrate/RoomCard";
function Rooms() {
  let card = [];
  for (let i = 0; i < 8; i++) {
    card.push(<RoomCard />);
  }
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col justify-center items-start relative  bg-cover bg-center pb-10"
        style={{
          backgroundImage: `url(${rooms})`,
        }}
      >
        <div className="absolute w-full h-full top-0 bg-black opacity-20 z-0"></div>
        <div className="w-full flex flex-col mt-36 2xl:mt-80 z-10">
          {/* top header  */}
          <div className="flex justify-start  text-5xl lg:text-6xl font-semibold tracking-wider wp text-white ">
            <div>
              GET ROOMS
              <br />
              OF YOUR CHOICE
            </div>
          </div>
          {/* flight hotel roadway field  */}
          <div className="flex px-5 md:px-10 lg:px-28 ">
            <FlightHotel />
          </div>
        </div>
      </div>
      {/* room part  */}
      <div className="flex flex-col wp mt-24 pb-20">
        <div className=" mx-auto text-3xl md:text-4xl z-10">
          Available Rooms
        </div>
        <div className="w-36 mt-1 bg-black h-0.5 mx-auto"></div>
        {/* rooms  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-10">
          {card}
        </div>
      </div>
    </>
  );
}

export default Rooms;
