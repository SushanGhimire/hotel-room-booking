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
  const [value, setValue] = React.useState([100, 1000]);
  const [guests, setGuests] = useState(1);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex-1 sm:flex border border-gray-300 rounded-lg p-3 space-y-4 sm:space-y-0 xl:space-x-4">
      {/* Price  */}
      <div className="flex flex-col mr-4 xl:mr-0">
        <div className="text-xs  xl:pb-1.5">Price</div>
        <div className={classes.root}>
          <Slider
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={100}
            max={10000}
            defaultValue={[100, 1000]}
            className={classes.slider}
          />
        </div>
        <div className="text-xs flex space-x-2">
          <span>min: {value[0]}</span>
          <span>max: {value[1]}</span>
        </div>
      </div>
      {/* guest  */}
      <div className="flex flex-col">
        <div className="text-xs">Guests</div>
        <div className="">
          <input
            type="number"
            className="bg-lightWhite  w-24 focus:outline-none  border-b border-buttonBlue text-lg font-semibold"
            placeholder=""
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            name=""
            id=""
          />
        </div>
        {/* <div className="text-xs mt-5">{guests}</div> */}
      </div>
    </div>
  );
}

export default PriceGuests;
