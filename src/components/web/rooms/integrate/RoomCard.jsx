import React from "react";

function RoomCard() {
  return (
    <div className="flex flex-col border shadow text-gray-500 hover:bg-gray-100 animation cursor-pointer transform hover:scale-105">
      {/* image  */}
      <div className="flex h-40">
        <img
          src="https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* room details  */}
      <div className="flex flex-col px-5 pt-3 pb-4 space-y-2">
        {/* room type  */}
        <div className="font-medium text-black text-2xl">Luxury Room</div>
        {/* price */}
        <div className="text-sm">
          <span className="font-semibold text-black text-lg">Rs 2000</span>
          /pernight
        </div>
        {/* hotel name  */}
        <div className="flex">
          <span className="w-28">Hotel:</span>
          <span>Royal Century</span>
        </div>
        {/* size  */}
        <div className="flex">
          <span className="w-28">Size:</span>
          <span>20ft</span>
        </div>
        {/*Capacity  */}
        <div className="flex">
          <span className="w-28">Hotel:</span>
          <span>Max person 3</span>
        </div>
        {/* Bed  */}
        <div className="flex">
          <span className="w-28">Bed:</span>
          <span>King Beds</span>
        </div>
      </div>
      <div className="flex pb-4">
        <button className="mx-auto text-black border border-black rounded-md px-4 py-1 text-sm hover:bg-black hover:text-white animation">
          More Details
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
