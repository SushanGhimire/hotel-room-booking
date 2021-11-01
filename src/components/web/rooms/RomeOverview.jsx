import React from "react";
const RomeOverview = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-11/12 gap-4 mx-auto pt-20 pb-14 ">
        <div className="flex-1">
          <div className="flex justify-center  items-center">
            <img
              src="https://wallpapercave.com/wp/wp6957266.jpg"
              alt="img"
              style={{ height: "50vh" }}
              className="rounded-3xl"
            />
          </div>
          <div className="mt-10 flex gap-2">
            <div className="text-sm w-8 rounded-md font-medium h-6 flex justify-center items-center bg-gray-100 text-green-500 ">
              5.0
            </div>
            <div className="text-sm text-green-500 font-medium">Perfect</div>
            <div className="flex gap-1 items-center">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-300"
                    fill="yellow"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                );
              })}
            </div>
          </div>
          <div className="text-2xl mt-2 text-gray-700  font-bold">
            Nabin Kharel Nabin Kharel
          </div>
          <div className=" mt-2 font-semibold text-sm text-gray-500 ">
            Nabin Kharel Nabin Kharel
          </div>
          <div className="w-full overflow-auto">
            <div className="flex mt-4 gap-8">
              <div className="text-sm border-b-2 border-white hover:border-blue-500 font-semibold text-gray-700 cursor-pointer hover:text-blue-500">
                Descreption
              </div>
              <div className="text-sm border-b-2 border-white hover:border-blue-500 font-semibold text-gray-700 cursor-pointer hover:text-blue-500">
                Features
              </div>
              <div className="text-sm border-b-2 border-white hover:border-blue-500 font-semibold text-gray-700 cursor-pointer hover:text-blue-500">
                Virtual
              </div>
              <div className="text-sm border-b-2 flex flex-shrink-0 border-white hover:border-blue-500 font-semibold text-gray-700 cursor-pointer hover:text-blue-500">
                Price & Task history
              </div>
            </div>
          </div>
          <div className="text-base mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitor felis sit amet elit blandit, in pharetra purus porta. Sed
            vel urna quis lectus maximus tincidunt vel ac nunc. Aliquam
            efficitur nisl tempus ex ultricies gravida eu in mauris. Vivamus
            viverra enim eu lorem vehicula, non tincidunt nunc finibus
          </div>
          <div className="font-semibold text-gray-700 my-4">
            Hotels features
          </div>
          <div className="w-full overflow-auto">
            <div className="flex flex-shrink-0 my-4 gap-8">
              <div className="text-sm flex flex-shrink-0 gap-1 font-semibold text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
                <div>wi-fi</div>
              </div>
              <div className="text-sm font-semibold text-gray-600 flex flex-shrink-0 gap-1">
                <div>
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/ios/50/000000/bed.png"
                    alt=""
                  />
                </div>
                <div>Kings bed</div>
              </div>
              <div className="text-sm font-semibold flex flex-shrink-0 gap-1 text-gray-600">
                <div>
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/pastel-glyph/64/000000/bath--v2.png"
                    alt=""
                  />
                </div>
                Bathup
              </div>
              <div className="text-sm font-semibold flex flex-shrink-0 gap-1 text-gray-600">
                <div>
                  <img
                    className="w-5 h-5"
                    alt=""
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-breakfast-morning-routine-flatart-icons-outline-flatarticons-1.png"
                  />
                </div>
                <div>Breakfast</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/6 lg:w-1/4">
          <div className="border border-gray-300 rounded-3xl p-4 mx-auto">
            <div className="flex border-b justify-between pb-2  border-gray-300 ">
              <div className="flex ">
                <div className="">$310</div>
                <div className="text-gray-500">/night</div>
              </div>
            </div>
            <div className="flex flex-1 justify-between mt-4">
              <div>
                <p className="text-xs text-gray-700 font-semibold">Check-in</p>
                <input
                  className="w-24 rounded-lg bg-gray-50 py-1 px-2 text-sm"
                  type="date"
                />
              </div>
              <div>
                <p className="text-xs text-gray-700 font-semibold">Check-out</p>
                <input
                  className="w-24 rounded-lg bg-gray-50 py-1 px-2 text-sm"
                  type="date"
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-700 font-semibold mt-4">Guest</p>
              <select
                type="text"
                value="2 Adults"
                className="w-full rounded-lg bg-gray-50 py-1 px-2 text-sm"
              >
                <option value="2 Adults">2 Adults</option>
              </select>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-700 font-semibold mt-4">Price</p>
              <div className="bg-gray-100 rounded-lg w-full">
                <div className="w-11/12 mx-auto my-2">
                  <div className="flex justify-between py-1">
                    <div className="text-xs">1 Nights</div>
                    <div className="text-xs font-semibold">$510</div>
                  </div>
                  <div className="flex justify-between py-1">
                    <div className="text-xs">1 Nights</div>
                    <div className="text-xs font-semibold">$510</div>
                  </div>
                </div>
              </div>
              <div className="my-4 flex justify-between">
                <div className="text-sm">Total Price</div>
                <div className="text-xs font-semibold">$510</div>
              </div>
              <div className="w-full mx-auto">
                <button className="rounded-lg py-2 text-sm text-center bg-blue-500 text-white w-full">
                  Book Now
                </button>
              </div>
              <div className="text-center text-xs mt-2 text-gray-400">
                You will not get charged yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RomeOverview;
