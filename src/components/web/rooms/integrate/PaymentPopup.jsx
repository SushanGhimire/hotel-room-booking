import React, { useEffect } from "react";
import esewa from "../../../../assets/images/esewa.png";
import stripe from "../../../../assets/images/stripe.png";
import post from "../../../esewa/SubmitEsewaData";
function PaymentPopup({ amount, roomId }) {
  const handleEsewa = () => {
    post(amount, roomId);
  };
  useEffect(() => {
    localStorage.setItem("rid", roomId);
  }, []);
  return (
    <>
      <div className="p-5">
        <div>
          <span className="font-subHeader tracking-wider text-xl font-semibold">
            Select the payment method
          </span>
        </div>
        <div className="flex mt-8 items-center gap-4">
          <div
            className="border p-5 shadow-md rounded-lg cursor-pointer"
            onClick={handleEsewa}
          >
            <img src={esewa} className="h-12" alt="" />
          </div>
          <div className="border p-5 shadow-md rounded-lg cursor-pointer">
            <img src={stripe} className="h-12" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPopup;
