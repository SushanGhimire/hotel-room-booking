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
function SearchCard() {
  const [arrival, setArrival] = useState(new Date());
  const [diparture, setDeparture] = useState(new Date());
  return (
    <div className="bg-lightWhite text-gray-600 flex flex-col px-8 py-5 rounded-lg w-full">
      {/* header bar  */}
      <div className="md:flex md:space-x-4 space-y-2 md:space-y-0 md:space-x-4 md:items-center mt-4">
        <div className="md:flex md:space-x-4 space-y-2 md:space-y-0 md:items-center">
          {/* first class */}
          <div className="flex items-center text-sm">
            <RoomTypesDropdown />
          </div>
          {/* Number of passenger */}
          <div className="flex items-center text-sm">
            <LocationDropDown />
          </div>
        </div>
      </div>
      {/* input date bars  */}
      <div className="md:flex md:space-x-4 items-center py-5 relative space-y-2 md:space-y-0 w-full">
        <div className="lg:flex lg:space-x-4 items-center space-y-2 lg:space-y-0 xl:w-9/12 ">
          {/* Arraival  */}
          <div className="flex border justify-between items-center border-gray-300 rounded-lg p-3 xl:w-1/2">
            <div className="flex-flex-col">
              <div className="text-xs">Arrival</div>
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
          {/* Diparture  */}
          <div className="flex border justify-between items-center border-gray-300 rounded-lg p-3 xl:w-1/2">
            <div className="flex-flex-col">
              <div className="text-xs">Diparture</div>
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
        {/* price and Guests  */}
        <PriceGuests />
        {/* search button  */}
        <div className="absolute -bottom-10 -right-3 text-sm">
          <button
            className="flex bg-buttonBlue text-lightWhite px-6 py-2.5 rounded-lg
            items-center"
          >
            <span> Search Hotels</span>
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
