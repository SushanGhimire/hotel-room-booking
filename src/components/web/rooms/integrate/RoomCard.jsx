import React from "react";
import { Link } from "react-router-dom";
function RoomCard({ room }) {
  const { room_code, room_type, room_image, price, hotel, guest_type, id } =
    room;
  return (
    <div className="flex flex-col border shadow text-gray-500 hover:bg-gray-50 animation cursor-pointer transform hover:scale-105 rounded-md overflow-hidden">
      {/* image  */}
      <div className="flex h-40">
        <img src={room_image} alt="" className="w-full h-full object-cover" />
      </div>
      {/* room details  */}
      <div className="flex flex-col px-5 pt-3 pb-4 space-y-2 xl:text-sm font-subHeader">
        {/* room type  */}
        <div className="font-medium text-black text-2xl font-header">
          {room_type === "NR" && "Normal"}
          {room_type === "DL" && "Dilux"}
          {room_type === "LU" && "Luxury"}
          {room_type === "PR" && "Presidental"}
          {room_type === "DI" && "Divine"}
        </div>
        {/* price */}
        <div className="text-sm">
          <span className="font-semibold text-highlight font-header text-xl">
            Rs {price}
          </span>
          /pernight
        </div>
        {/* hotel name  */}
        <div className="flex items-center">
          <span className="w-24">Hotel:</span>
          <span>{hotel.name}</span>
        </div>
        <div className="flex items-center">
          <span className="w-24">Room Code:</span>
          <span>{room_code}</span>
        </div>
        {/* Bed  */}
        <div className="flex items-center">
          <span className="w-24">Capacity:</span>
          <span>
            {guest_type === "1A" && "1 Adult"}
            {guest_type === "2A" && "2 Adult"}
            {guest_type === "4A" && "4 Adult"}
            {guest_type === "2A2C" && "2 Adult 2 Childern"}
            {guest_type === "4+" && "4+ Adult"}
          </span>
        </div>
      </div>
      <div className="flex pb-4">
        <Link
          to={`/rooms/${id}`}
          onClick={() => window.scrollTo(0, 0)}
          className="mx-auto text-alert border border-alert rounded-md px-4 py-1 text-sm hover:bg-alert hover:text-white animation font-subHeader"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
