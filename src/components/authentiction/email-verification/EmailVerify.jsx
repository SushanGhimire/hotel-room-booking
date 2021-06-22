import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";
function EmailVerify() {
  const { token } = useParams();
  console.log(token);
  // let token = window.location.pathname.split("/")[3];
  const [verified, setVerified] = useState(false);
  let stop = "stop";
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setInterval(() => {
      const verifyEmail = async () => {
        axiosInstance
          .get(`user/email-verify/?${token}`, {
            signal,
          })
          .then(() => {
            setVerified(true);
            setTimeout(() => {
              window.location = "/login";
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      verifyEmail();
    }, 2000);

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, [stop]);
  return (
    <div className="w-full  flex justify-center items-center py-20">
      <div
        className={`${
          verified ? "bg-green-600" : "bg-red-600"
        } text-white py-3 flex justify-center w-full max-w-lg  rounded-lg transition-all duration-300 ease-linear`}
      >
        <div className="flex space-x-4">
          <div> {verified ? "verified" : "Verifying"}</div>
          {verified ? (
            <div>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          ) : (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailVerify;
