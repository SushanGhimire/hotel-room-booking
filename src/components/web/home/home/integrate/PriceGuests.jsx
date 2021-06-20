import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
const useStyles = makeStyles({
  root: {
    width: 150,
  },
  slider: {
    marginTop: 8,
  },
  input: {
    width: 42,
  },
});
function PriceGuests() {
  const classes = useStyles();
  const [value, setValue] = useState(30);
  const [guests, setGuests] = useState(1);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="sm:flex border border-gray-300 rounded-lg p-3 space-y-4 sm:space-y-0">
      {/* Price  */}
      <div className="flex flex-col w-44">
        <div className="text-xs">Price</div>
        <div className={classes.root}>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            className={classes.slider}
          />
        </div>
        <div className="text-xs">{value}</div>
      </div>
      {/* Departure  */}
      <div className="flex flex-col w-44">
        <div className="text-xs">Guests</div>
        <div className="">
          <input
            type="number"
            className="bg-lightWhite text-sm w-24 focus:outline-none  border-b border-buttonBlue"
            placeholder=""
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            name=""
            id=""
          />
        </div>
        <div className="text-xs mt-5">{guests}</div>
      </div>
    </div>
  );
}

export default PriceGuests;
