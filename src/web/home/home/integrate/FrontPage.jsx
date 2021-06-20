import FlightHotel from "../integrate/FlightHotel";
import kathmandu from "../../../../assets/images/icons/kathmandu.png";
// import wave from "../../../../assets/images/icons/wave.svg";
function FrontPage() {
  return (
    <div className="w-full min-h-screen bg-primaryBlue text-white flex flex-col ">
      {/* top header  */}
      <div className="flex justify-start mt-10 text-5xl lg:text-6xl font-semibold tracking-wider wp">
        <div>
          WHERE SHALL
          <br />
          WE VENTURE NEXT?
        </div>
      </div>
      {/* flight hotel roadway field  */}
      <div className="flex px-5 md:px-1- lg:px-28">
        <FlightHotel />
      </div>
      <div className="flex-1  px-5 flex relative overflow-hidden ">
        <div className="w-full mt-5 bottom-10 absolute right-0">
          <img src={kathmandu} className="w-full " alt="" />
        </div>
        {/* <div className="w-full -bottom-48 absolute right-0">
          <img src={wave} className="w-full transform scale-125" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default FrontPage;
