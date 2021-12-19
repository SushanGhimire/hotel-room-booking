import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../authentication/axiosInstance";
import { ReactComponent as StarIcon } from "../../../assets/images/icons/star.svg";
import CommonPopup from "../../common/CommonPopup";
import PaymentPopup from "./integrate/PaymentPopup";
const RoomOverview = () => {
  const rating = [1, 2, 3, 4, 5];
  const [roomDetail, setRoomDetail] = React.useState([]);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  const [info, setInfo] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2 adults,1 children",
    extraFeature: "",
  });
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
    console.log(info);
  };
  const [toggleState, setToggleState] = useState("description");
  const toggleTab = (index) => {
    setToggleState(index);
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
  console.log(roomDetail);
  // const { room_type, room_image, hotel, description, room_feature } = roomDetail
  return (
    <>
      <CommonPopup width="max-w-lg" open={open} closeModal={closeModal}>
        <PaymentPopup amount="120" roomId={id} />
      </CommonPopup>
      <div className="felx  pt-24 px-4 md:px-10">
        <div className="flex  flex-1 flex-col md:flex-row ">
          <div className="mx-2 md:w-screen">
            <div>
              <img
                src="https://source.unsplash.com/collection/190727/1519x580"
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
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Perspiciatis, quae!
                    </h2>
                    <p className="text-gray-dark text-sm">
                      Lorem, ipsum dolor, sit.
                    </p>
                  </div>
                </div>
                {/* Description */}
                <div className="relative">
                  <div className="flex-1 md:flex gap-x-6 text-gray-dark text-sm md:cursor-pointer ">
                    <div>
                      <h1
                        className={
                          toggleState === "description"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : ""
                        }
                        onClick={() => toggleTab("description")}
                      >
                        Description
                      </h1>
                      <p
                        className={`${
                          toggleState === "description" ? "block" : "hidden"
                        } md:absolute py-4`}
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi tenetur dolorem similique fuga saepe totam
                        dicta non expedita ratione, eum iste voluptas. Incidunt
                        nesciunt ipsam minima earum debitis, officia quasi
                        suscipit veniam quae exercitationem esse, sed, impedit
                        ducimus ipsum ex.
                      </p>
                    </div>
                    <div>
                      <h1
                        className={
                          toggleState === "features"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : ""
                        }
                        onClick={() => toggleTab("features")}
                      >
                        Features
                      </h1>
                      <p
                        className={`${
                          toggleState === "features" ? "block" : "hidden"
                        } md:absolute left-0 py-4`}
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Porro, ut?
                      </p>
                    </div>
                    <div>
                      <h1
                        className={
                          toggleState === "virtual"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : ""
                        }
                        onClick={() => toggleTab("virtual")}
                      >
                        Virtual
                      </h1>
                      <p
                        className={`${
                          toggleState === "virtual" ? "block" : "hidden"
                        } md:absolute left-0 py-4`}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi quae harum obcaecati officiis est numquam
                        consectetur voluptates assumenda omnis nesciunt?
                      </p>
                    </div>
                    <div>
                      <h1
                        className={
                          toggleState === "price&taskhistory"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : ""
                        }
                        onClick={() => toggleTab("price&taskhistory")}
                      >
                        Price & Task history
                      </h1>
                      <p
                        className={`${
                          toggleState === "price&taskhistory"
                            ? "block"
                            : "hidden"
                        } md:absolute left-0 py-4`}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt quo commodi quisquam aut non ad eveniet
                        pariatur repellendus repudiandae ipsa consequuntur esse
                        fugiat dignissimos omnis illo mollitia ex consequatur
                        deserunt adipisci, corrupti cupiditate laudantium
                        aliquam voluptas possimus! Hic, eius non recusandae ad
                        ab quae numquam aliquid quia, ut nobis libero!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form Content */}
          <div className="mx-3 mb-4">
            <div className="p-5 rounded-3xl border-2">
              <div className="flex justify-between my-4">
                <p className="font-bold text-2xl">$310/night</p>
                <p className="text-white bg-primaryBlue px-3 py-1 rounded-full text-xs items-center flex">
                  20% off
                </p>
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
                      <select
                        name="guests"
                        value={info.guests}
                        id="guests"
                        className="text-sm rounded-xl bg-gray-100 focus:bg-gray-100 focus:outline-none"
                        onChange={changeHandler}
                      >
                        <option
                          value="2 adults,1 children"
                          className="focus:rounded-xl p-10"
                        >
                          2 adults,1 children
                        </option>
                        <option value="2 adults">2 adults</option>
                      </select>
                    </div>
                  </div>
                  {/* Extra fratures */}
                  <div>
                    <div>
                      <p className="text-xs text-gray-400">Extra Features</p>
                      <textarea
                        name="extraFeature"
                        id=""
                        cols="20"
                        rows="4"
                        className="p-1"
                        value={info.extraFeature}
                        onChange={changeHandler}
                      ></textarea>
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
                            <p>$501</p>
                          </li>
                          <li className="flex justify-between p-2">
                            <h5>Discount</h5>
                            <p>20%</p>
                          </li>
                          <li className="flex justify-between p-2">
                            <h5>Breakfast a day per person</h5>
                            <p>$10</p>
                          </li>
                          <li className="flex justify-between p-2">
                            <h5>Service fee</h5>
                            <p>$5</p>
                          </li>
                        </ul>
                      </div>
                      <div className="flex justify-between p-2">
                        <small className="text-xs text-gray-400">
                          Total Payment
                        </small>
                        <p className="text-xs text-gray-400">$361</p>
                      </div>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="text-white shadow-lg">
                    <button
                      type="submit"
                      className="block w-full rounded-lg p-3 bg-primaryBlue"
                      onClick={() => setOpen(true)}
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
      </div>
    </>
  );
};
export default RoomOverview;
