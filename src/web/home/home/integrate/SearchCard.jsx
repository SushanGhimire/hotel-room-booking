import next from "../../../../assets/images/icons/next.svg";
import LocationDropDown from "./LocationDropDown";
import RoomTypesDropdown from "./RoomTypesDropdown";
import calendar from "../../../../assets/images/icons/calendar.svg";
import PriceGuests from "./PriceGuests";

function SearchCard() {
  return (
    <div className="bg-lightWhite text-gray-600 flex flex-col px-8 py-5 rounded-lg">
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
      <div className="md:flex md:space-x-4 items-center py-5 relative space-y-2 md:space-y-0">
        <div className="lg:flex lg:space-x-4 items-center space-y-2 lg:space-y-0">
          {/* Arraival  */}
          <div className="flex border justify-between items-center border-gray-300 rounded-lg p-3 w-56">
            <div className="flex-flex-col">
              <div className="text-xs">Arrival</div>
              <div className="text-black">21/06/2021</div>
              <div className="text-xs">21/06/2021</div>
            </div>
            <div>
              <img src={calendar} className="w-6 h-6" alt="" />
            </div>
          </div>
          {/* Diparture  */}
          <div className="flex border justify-between items-center border-gray-300 rounded-lg p-3 w-56">
            <div className="flex-flex-col">
              <div className="text-xs">Diparture</div>
              <div className="text-black">21/06/2021</div>
              <div className="text-xs">21/06/2021</div>
            </div>
            <div>
              <img src={calendar} className="w-6 h-6" alt="" />
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
