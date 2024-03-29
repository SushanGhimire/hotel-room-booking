import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axiosInstance from "../authentication/axiosInstance";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const DeleteAlertModal = ({ open, closeModal, deleteUrl, setMessage }) => {
  const { darkmode } = useSelector((state) => state.darkmode);
  const cancelButtonRef = useRef();
  const [rotate, setRotate] = React.useState(false);
  const handleDelete = () => {
    setRotate(true);
    axiosInstance
      .delete(`${deleteUrl}`)
      .then((res) => {
        setTimeout(() => {
          setRotate(false);
        }, 2000);
        closeModal("sucess");
        setMessage("Data deleted sucessfully");
      })
      .catch((err) => {
        closeModal("sucess");
        setRotate(false);
        if (err.response.data.error) {
          toast.error(`${err.response.data.error}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 top-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={() => closeModal("")}
        >
          <div
            className={`min-h-screen px-4 text-center ${
              darkmode ? "dark" : ""
            }`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
                <div>
                  <svg
                    className={`w-10 h-10 text-red-600 dark:text-gray-400  mx-auto my-5 ${
                      rotate ? "animate-spin h-16 w-16" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-gray7 text-center text-xl font-medium dark:text-gray-200">
                  Are you sure?
                </div>

                <div className="mt-10 flex justify-center space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-secondary bg-red-500 text-white border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:bg-gray-600"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-secondary bg-blue-100 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:bg-gray-600 dark:text-gray-200"
                    onClick={() => closeModal("")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteAlertModal;
