import React, { useState, useEffect } from "react";
import rooms from "../../../assets/images/rooms/rooms.jpg";
import FlightHotel from "../home/home/integrate/FlightHotel";
import RoomCard from "./integrate/RoomCard";
import axiosInstance from "../../authentication/axiosInstance";
function Rooms({ lang }) {
  let card = [];
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/hotel/room/")
      .then((res) => {
        console.log(res.data);
        setRoomData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          {Array.isArray(roomData) &&
            roomData.map((room, index) => {
              return <RoomCard room={room} key={index} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Rooms;
