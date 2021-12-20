// import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../authentication/axiosInstance";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import PaymentFaild from "./PaymentFaild";
function EsewaSucessPage() {
  const [message, setMessage] = useState("");
  // const quizId = localStorage.getItem("mat");
  const [loading, setLoading] = useState(false);
  var newURL = window.location.search;
  var Valoid = newURL.split("=")[1];
  var Valamt = newURL.split("&")[1];
  var refId = newURL.split("=")[3];
  var amt = Valamt.split("=")[1];
  var oid = Valoid.split("&")[0];
  //validation
  // var path = "https://uat.esewa.com.np/epay/transrec";
  var params = {
    amt: parseInt(amt.split(".")[0]),
    rid: refId,
    pid: oid,
    scd: "EPAYTEST",
  };
  // console.log(params);
  const post = () => {
    setTimeout(() => {
      axiosInstance
        .post(`/hotel/esewa/payment/`, params)
        .then((res) => {
          console.log(res.data);
          if (
            res.data ===
            "<response>\n<response_code>\nfailure\n</response_code>\n</response>\n"
          ) {
            setMessage("Payment Failed");
            console.log("error");
          } else {
            setMessage("Payment Sucessfull");
            let val = {
              check_in: localStorage.getItem("checkIn"),
              check_out: localStorage.getItem("checkOut"),
              user: localStorage.getItem("uid"),
              room_status: "BO",
            };
            axiosInstance
              .patch(`/hotel/room/${localStorage.getItem("rid")}/`)
              .then((res) => {})
              .catch((err) => {
                setLoading(false);
              });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, 3000);
  };
  useEffect(() => {
    post();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 z-50">
      <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 left-0"></div>
      {message === "" && (
        <div>
          <div className="lds-ring2 z-10">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {message === "Payment Failed" && <PaymentFaild message={message} />}
      {message === "Invalid User attempt" && <PaymentFaild message={message} />}
      {message === "Duplicated Transactions" && (
        <PaymentFaild message={message} />
      )}
      {message === "Payment Sucessfull" && (
        <div className="bg-gray-50 px-10 py-12 rounded-xl shadow-md flex flex-col space-y-4 z-10">
          <div className="mx-auto text-sucess">
            <CheckCircleOutlineOutlinedIcon
              style={{
                fontSize: 50,
              }}
            />
          </div>
          <div className="mx-auto text-2xl font-semibold">{message}</div>
          <div
            // to={`/profile/attempted-quiz/${quizId}/questions/${refId}`}
            className="bg-sucess px-20 py-2  text-white rounded-md cursor-pointer text-center"
            onClick={() => (window.location = "/user")}
          >
            Done
          </div>
        </div>
      )}
      <form>
        <input value="100" name="amt" type="hidden" />
        <input value="EPAYTEST" name="scd" type="hidden" />
        <input
          value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453"
          name="pid"
          type="hidden"
        />
        <input value="000AE01" name="rid" type="hidden" />
        <input value="Submit" type="submit" className="hidden" />
      </form>
    </div>
  );
}

export default EsewaSucessPage;
