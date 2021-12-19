import React, { useState } from "react";
import DeleteModal from "../../../common/DeleteModal";
import DeleteAlertModal from "../../../common/DeleteAlertModal";

function FeatureLists({
  fetchFeatureLists,
  featureLists,
  featchFeatureBySlug,
}) {
  const [deleteUrl, setDeleteUrl] = useState("");
  const [message, setMessage] = useState("Data deleted sucessfully!");
  const [openDeleteSucess, setOpenDeleteSucess] = useState(false);
  const [open, setOpen] = useState(false);
  const popUpDeleteModal = (slug) => {
    setDeleteUrl(`/hotel/room-feature/${slug}/`);
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
    fetchFeatureLists();
  };
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
      <div>
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">SN</th>
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {Array.isArray(featureLists) &&
              featureLists.map((data, index) => {
                const { name, slug } = data;
                return (
                  <tr key={index} className="text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3 text-sm">{index + 1}</td>
                    <td className="px-4 py-3 text-sm">{name}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2 text-sm">
                        {/* edit  */}
                        <div
                          onClick={() => featchFeatureBySlug(slug)}
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray
                      transform transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                          </svg>
                        </div>
                        {/* delete  */}
                        <button
                          onClick={() => popUpDeleteModal(slug)}
                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray  transform transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer"
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
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FeatureLists;
