import { useState } from "react";
import next from "../../../../../assets/images/icons/next.svg";
import LocationDropDown from "./LocationDropDown";
import RoomTypesDropdown from "./RoomTypesDropdown";
import DateFnsUtils from "@date-io/date-fns";
import PriceGuests from "./PriceGuests";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
function SearchCard({ lang }) {
  const [arrival, setArrival] = useState(new Date());
  const [diparture, setDeparture] = useState(new Date());
  return (
    <div className="bg-white shadow-lg text-gray-600 flex flex-col px-8 py-5 w-full rounded-b-2xl rounded-tr-2xl">
      {/* header bar  */}
      <div className="md:flex md:space-x-4 space-y-2 md:space-y-0 md:space-x-4 md:items-center mt-4">
        <div className="md:flex md:space-x-4 space-y-2 md:space-y-0 md:items-center">
          {/* first class */}
          <div className="flex items-center text-sm">
            <RoomTypesDropdown lang={lang} />
          </div>
          {/* Number of passenger */}
          <div className="flex items-center text-sm">
            <LocationDropDown lang={lang} />
          </div>
        </div>
      </div>
      {/* input date bars  */}
      <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 relative">
        <div className="col-span-1 flex items-center">
          {/* Arraival  */}
          <div className="flex border justify-between items-center border-gray-300 rounded-lg p-3">
            <div className="flex-flex-col">
              <div className="text-sm">
                {lang === "EN" ? "Arrival" : "आगमन समय"}
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  clearable
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={arrival}
                  placeholder="10/10/2021"
                  onChange={(date) => setArrival(date)}
                  minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center">
          {/* Diparture  */}
          <div className="flex border justify-between items-center border-gray-300 rounded-lg p-3">
            <div className="flex-flex-col">
              <div className="text-sm">
                {lang === "EN" ? "Diparture" : "प्रस्थान समय"}
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  clearable
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={diparture}
                  placeholder="10/10/2021"
                  onChange={(date) => setDeparture(date)}
                  minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 flex">
          {/* price and Guests  */}
          <PriceGuests lang={lang} />
        </div>
        {/* search button  */}
        <div className="absolute -bottom-10 -right-3 text-sm">
          <button
            className="flex bg-black text-white px-6 py-3 rounded-md
            items-center"
          >
            <span> {lang === "EN" ? "Search Hotels" : "होटल खोज्नुहोस्"}</span>
            <span>
              <img src={next} className="w-4 h-4 ml-2" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
