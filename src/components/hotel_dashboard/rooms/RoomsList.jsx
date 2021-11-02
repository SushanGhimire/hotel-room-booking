import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../../common/DeleteModal";
import DeleteAlertModal from "../../common/DeleteAlertModal";
import axiosInstance from "../../authentication/axiosInstance";
function RoomsList() {
  const [message, setMessage] = useState("Data deleted sucessfully!");
  const [deleteUrl, setDeleteUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [openDeleteSucess, setOpenDeleteSucess] = useState(false);
  const [roomList, setRoomList] = useState([])
  const popUpDeleteModal = (id) => {
    setDeleteUrl(`/hotel/room/${id}/`);
    setOpen(true);
  };
  //Close delete  Modal
  const closeModalDeleteAlert = (sucess) => {
    if (sucess !== "") {
      setOpenDeleteSucess(true);
      setOpen(false);
    } else {
      setOpen(false);
    }
  };
  //Close delete sucess Modal
  const closeModalDeleteMessage = () => {
    setOpenDeleteSucess(false);
    getAllRooms();
  };
  const getAllRooms = () => {
    axiosInstance.get(`/hotel/room/`).then((res) => {
      console.log(res.data);
      setRoomList(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }
  React.useEffect(() => {
    getAllRooms();
  }, [])
  return (
    <>
      {" "}
      {/* sucess delete page from Modal*/}
      <DeleteModal
        open={openDeleteSucess}
        closeModal={closeModalDeleteMessage}
        message={message}
      />
      {/*-------------*/}
      {/*  delete alert  page from Modal*/}
      <DeleteAlertModal
        open={open}
        closeModal={closeModalDeleteAlert}
        deleteUrl={deleteUrl}
        setMessage={setMessage}
      />
      {/*-------------*/}
      <div className="flex flex-col p-5 md:p-10">
        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Room Lists
        </h4>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Room</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Room Type</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {Array.isArray(roomList) && roomList.map((room, index) => {
                  const { price, status, room_image, room_type, id } = room;
                  return (
                    <tr key={index} className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* <!-- Avatar with inset shadow --> */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src={room_image} alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">Rs {price}</td>
                      <td className="px-4 py-3 text-xs">
                        {status === "DF" ? (<span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Draft
                        </span>) : (<span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Public
                        </span>)}

                      </td>
                      <td className="px-4 py-3 text-sm">
                        {room_type === "NR" && "Norma"}
                        {room_type === "DL" && "Dilux"}
                        {room_type === "LU" && "Luxury"}
                        {room_type === "PR" && "Presidental"}
                        {room_type === "DI" && "Divine"}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2 text-sm">
                          {/* edit  */}
                          <Link
                            to={`/h-dashboard/add-room/${id}`}
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray
                      transform transition-all duration-300 ease-in-out hover:scale-125"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                            </svg>
                          </Link>
                          {/* delete  */}
                          <button
                            onClick={() => popUpDeleteModal(id)}
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray  transform transition-all duration-300 ease-in-out hover:scale-125"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomsList;
