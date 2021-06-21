import FlightHotel from "./FlightHotel";
import kathmandu from "../../../../../assets/images/icons/kathmandu.png";
// import wave from "../../../../assets/images/icons/wave.svg";
function FrontPage() {
  return (
    <div className="w-full min-h-screen bg-primaryBlue text-white flex flex-col pb-10 md:pb-0">
      {/* top header  */}
      <div className="flex justify-start mt-10 2xl:mt-32 text-5xl lg:text-6xl font-semibold tracking-wider wp">
        <div>
          WHERE SHALL
          <br />
          WE VENTURE NEXT?
        </div>
      </div>
      {/* flight hotel roadway field  */}
      <div className="flex px-5 md:px-10 lg:px-28 2xl:mt-20">
        <FlightHotel />
      </div>
      <div className="flex-1  px-5 flex relative overflow-hidden ">
        <div className="w-full mt-5 bottom-10 absolute right-0">
          <img src={kathmandu} className="w-full " alt="" />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
