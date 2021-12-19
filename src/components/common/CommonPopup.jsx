import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
function CommonPopup({ open, closeModal, children }) {
  const cancelButtonRef = useRef();
  return (
    <>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40  overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-sm bg-black bg-opacity-50" />
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
              <div
                className={`inline-block w-full scrollbar max-w-2xl  my-8 overflow-auto text-left align-middle transition-all transform border bg-white shadow-xl rounded-3xl p-5`}
                style={{
                  maxHeight: "798px",
                }}
              >
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CommonPopup;
