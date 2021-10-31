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
function PriceGuests({ lang }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 1000]);
  const [guests, setGuests] = useState(1);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full grid md:grid-cols-2 gap-6 border border-gray-300 rounded-lg p-3 ">
      {/* Price  */}
      <div className="flex flex-col mr-4 xl:mr-0">
        <div className="text-sm  xl:pb-1.5">
          {lang === "EN" ? "Price" : "मूल्य"}
        </div>
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
        <div className="text-sm">{lang === "EN" ? "Guests" : "अतिथिहरू"}</div>
        <div className="">
          <input
            type="number"
            className="bg-white  w-24 focus:outline-none  border-b border-buttonBlue text-lg font-semibold"
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
