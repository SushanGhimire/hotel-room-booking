import React from "react";
import RoomForm from "./RoomForm";
function Room() {
  return (
    <div className="dark:text-gray-200 px-10 py-20 flex w-full h-screen overflow-hidden justify-center">
      <div className="max-w-2xl mx-auto w-full h-full overflow-auto p-5 bg-white dark:bg-gray-800 shadow-md rounded-md scrollable-element">
        <RoomForm />
      </div>
    </div>
  );
}

export default Room;
