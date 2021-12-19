import React from "react";
import alert from "../../../assets/images/alert.png";
import success from "../../../assets/images/success.png";
import axiosInstance from "../../authentication/axiosInstance";
function HotelSucess({ message, closeModal, slug }) {
  const hanldeLogout = () => {
    localStorage.clear();
    window.location = "/login";
  };
  const HandleTryAgain = async () => {
    try {
      await axiosInstance.delete(`/hotel/${slug}/`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
        {message === "Your hotel is verified sucessfylly." ? (
          <img src={success} className="w-20" alt="" />
        ) : (
          <img src={alert} className="w-20" alt="" />
        )}
      </div>
      <p className="text-xl text-center">{message}</p>

      {message === "Your hotel is verified sucessfylly." ? (
        <button
          className="bg-gray-100 px-4 py-2 rounded-md"
          onClick={hanldeLogout}
        >
          Login Now
        </button>
      ) : (
        <>
          {message === "Your hotel is been rejected. Please try again." ? (
            <button
              className="bg-gray-100 px-4 py-2 rounded-md"
              onClick={HandleTryAgain}
            >
              Try Again
            </button>
          ) : (
            <button
              className="bg-gray-100 px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Go Back
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default HotelSucess;
