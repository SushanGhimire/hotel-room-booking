import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../authentication/axiosInstance";
import { ReactComponent as StarIcon } from "../../../assets/images/icons/star.svg";
import CommonPopup from "../../common/CommonPopup";
import PaymentPopup from "./integrate/PaymentPopup";
import avtar from "../../../assets/images/avtar.png";
const RoomOverview = () => {
  const rating = [1, 2, 3, 4, 5];
  const [roomDetail, setRoomDetail] = React.useState([]);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [totalprice, setTotalprice] = useState("");
  const [addReview, setAddReview] = useState({
    star: "",
    message: "",
  });
  const closeModal = () => {
    setOpen(false);
  };
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const [info, setInfo] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
    guests: "2 adults,1 children",
    extraFeature: "",
  });
  const [days, setDays] = useState(1);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("checkIn", info.checkIn);
    localStorage.setItem("checkOut", info.checkOut);
    setOpen(true);
    setTotalprice(days * price);
  };
  const [toggleState, setToggleState] = useState("description");
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleAddReview = (e) => {
    e.preventDefault();
    let val = {
      user: localStorage.getItem("uid"),
      hotel_room: roomDetail.id,
      review: info.message,
    };
    axiosInstance
      .post(`/hotel/hotel/room/review/create/`, val)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    if (id) {
      axiosInstance(`/hotel/room/${id}/`)
        .then((res) => {
          console.log(res.data);
          setRoomDetail(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {
    const date1 = new Date(info.checkIn);
    const date2 = new Date(info.checkOut);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // console.log(Difference_In_Days);
    setDays(Difference_In_Days);
  }, [info.checkOut]);
  console.log(roomDetail);
  const {
    room_code,
    room_type,
    description,
    room_image,
    price,
    hotel,
    guest_type,
    room_feature,
  } = roomDetail;
  // const { room_type, room_image, hotel, description, room_feature } = roomDetail
  console.log(description);
  return (
    <>
      <CommonPopup width="max-w-lg" open={open} closeModal={closeModal}>
        <PaymentPopup amount={totalprice} roomId={id} />
      </CommonPopup>
      <div className=" pt-24 px-4 md:px-10">
        <div className="flex  flex-1 flex-col md:flex-row ">
          <div className="mx-2 md:w-screen">
            <div>
              <img
                src={room_image}
                alt=""
                className="rounded-xl w-full h-100 object-cover"
              />
            </div>
            <div className="py-5">
              <div className="flex  flex-col gap-y-3">
                {/* Room Rating */}
                <div className="flex gap-x-2 flex-wrap items-center">
                  <p className="text-green-500 font-bold bg-green-100 rounded-md px-2">{`${rating.length}.0`}</p>
                  <p className="text-green-500 font-bold"> Perfect</p>
                  <small className="text-blue-500 bg-blue-100 rounded-md px-2 text-xs ">
                    Hotels
                  </small>
                  <small className="text-red-500 bg-red-100 rounded-md px-2 text-xs">
                    New Buildings
                  </small>
                  <small className="text-yellow-500 bg-yellow-100 rounded-md px-2 text-xs">
                    Top value
                  </small>
                  {rating.map((rate) => {
                    return (
                      <div key={rate}>
                        <StarIcon />
                      </div>
                    );
                  })}
                </div>
                {/* Room Header */}
                <div>
                  <div className="flex flex-col gap-y-2">
                    <h2 className="text-3xl font-bold">
                      {hotel ? hotel.name : ""}
                    </h2>
                    <p className="text-gray-dark text-sm">
                      Room code: {room_code}
                    </p>
                  </div>
                </div>
                {/* Description */}
                <div className="relative">
                  <div className="flex-1 md:flex flex-col gap-x-6 text-gray-dark text-sm md:cursor-pointer ">
                    <div className="flex gap-6 items-center">
                      <span
                        className={`${
                          toggleState === "description" &&
                          "text-blue-500 border-b border-blue-500"
                        }`}
                        onClick={() => toggleTab("description")}
                      >
                        Discription
                      </span>
                      <span
                        className={`${
                          toggleState === "features" &&
                          "text-blue-500 border-b border-blue-500"
                        }`}
                        onClick={() => toggleTab("features")}
                      >
                        Feature
                      </span>
                    </div>
                    {toggleState === "description" ? (
                      <div>{description}</div>
                    ) : (
                      <div>
                        <ul>
                          {Array.isArray(room_feature) &&
                            room_feature.map((data, index) => {
                              return <li key={index}>{data.name}</li>;
                            })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form Content */}
          <div className="mx-3 mb-4">
            <div className="p-5 rounded-3xl border-2">
              <div className="flex justify-between my-4">
                <p className="font-bold text-2xl">Rs {price}/night</p>
              </div>
              <div className="border-t-2 py-4">
                <form
                  action=""
                  className="flex flex-col gap-y-5"
                  onSubmit={submitHandler}
                >
                  {/* Date */}
                  <div className="flex flex-col md:flex-row gap-x-4">
                    <div>
                      <label
                        htmlFor="checkin"
                        className="text-xs text-gray-400"
                      >
                        Check-In
                      </label>
                      <input
                        name="checkIn"
                        type="date"
                        min={disablePastDate()}
                        className="p-2 bg-gray-100 border-none text-sm "
                        value={info.checkIn}
                        onChange={changeHandler}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="checkout"
                        className="text-xs text-gray-400"
                      >
                        Check-out
                      </label>
                      <input
                        name="checkOut"
                        type="date"
                        min={disablePastDate()}
                        className="p-2 bg-gray-100 border-none text-sm "
                        value={info.checkOut}
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  {/* Guest */}
                  <div>
                    <div>
                      <label htmlFor="guests" className="text-xs text-gray-400">
                        Guests
                      </label>
                      <div className="px-5 py-2 w-full rounded-md  border-2 placeholder-gray-dark  border-border dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                        {" "}
                        {guest_type === "1A" && "1 Adult"}
                        {guest_type === "2A" && "2 Adult"}
                        {guest_type === "4A" && "4 Adult"}
                        {guest_type === "2A2C" && "2 Adult 2 Childern"}
                        {guest_type === "4+" && "4+ Adult"}
                      </div>
                    </div>
                  </div>
                  {/* Price */}
                  <div className="">
                    <div className="flex flex-col gap-y-2">
                      <p className="text-xs text-gray-400">Price</p>
                      <div className="bg-gray-100 p-4 rounded-md text-xs font-bold text-gray-700">
                        <ul>
                          <li className="flex justify-between p-2">
                            <h5>1 Night</h5>
                            <p>Rs {price}</p>
                          </li>
                          <li className="flex justify-between p-2">
                            <h5>Total Days Stay</h5>
                            <p>{days}</p>
                          </li>
                        </ul>
                      </div>
                      <div className="flex justify-between p-2">
                        <small className="text-xs text-gray-400">
                          Total Payment
                        </small>
                        <p className="text-xs text-gray-400">
                          Rs {days * price}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="text-white shadow-lg">
                    <button
                      type="submit"
                      className="block w-full rounded-lg p-3 bg-primaryBlue"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
                <p className="text-sm text-gray-400 text-center py-3">
                  You will not get charged yet
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* user reviews  */}
        <div className="border-t border-border pt-5 pb-16">
          {/* add review  */}
          <form
            onSubmit={handleAddReview}
            className="border-b border-border pb-5"
          >
            <div className="flex gap-4 items-center  pb-5">
              <div className="text-lg font-semibold">Add your Review</div>
              <div>
                <select
                  value={addReview.star}
                  onChange={(e) =>
                    setAddReview({
                      ...addReview,
                      star: e.target.value,
                    })
                  }
                >
                  <option>Select Rating</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <textarea
                  value={addReview.message}
                  onChange={(e) =>
                    setAddReview({
                      ...addReview,
                      message: e.target.value,
                    })
                  }
                  className="h-24 resize-none"
                ></textarea>
              </div>
              <div>
                <button className="bg-buttonBlue text-white rounded-lg px-6 py-2">
                  Add
                </button>
              </div>
            </div>
          </form>
          {/* reviews \ */}
          <div className="pt-5">
            <div className="text-xl font-semibold  pb-5">Others review</div>
            <div className="flex items-center gap-4">
              <div>
                <img src={avtar} alt="" className="h-10 w-10" />
              </div>
              <div>
                <div className="font-semibold text-sm mb-1">Username</div>
                <p className="text-gray-600 w-64 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt harum, earum excepturi quod vero, aliquid maiores
                  repudiandae consectetur quas at vel incidunt ipsam iure beatae
                  sunt? Nisi, distinctio. Nostrum, mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RoomOverview;
