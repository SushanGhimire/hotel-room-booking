import React from "react";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { Link } from "react-router-dom";
function PaymentFaild({ message }) {
  return (
    <div className="bg-gray-50 px-10 py-8 rounded-md shadow-md flex flex-col space-y-4 z-10">
      <div className="mx-auto text-danger">
        <HighlightOffOutlinedIcon
          style={{
            fontSize: 50,
          }}
        />
      </div>
      <div className="mx-auto text-2xl font-semibold">{message}</div>
      <Link
        to="/profile/active-quiz"
        className="bg-danger  text-center px-20 py-2  text-white rounded-md cursor-pointer"
      >
        try Again
      </Link>
    </div>
  );
}

export default PaymentFaild;
