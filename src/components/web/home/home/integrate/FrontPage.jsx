import FlightHotel from "./FlightHotel";
// import kathmandu from "../../../../../assets/images/icons/kathmandu.png";
import front from "../../../../../assets/images/home/front.jpg";
function FrontPage() {
  return (
    <div
      className="w-full min-h-screen  text-white  pb-10   bg-lightWhite bg-cover bg-center flex  relative bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${front})`,
      }}
    >
      <div className="w-full flex flex-col mt-24 2xl:mt-44">
        {/* top header  */}
        <div className="flex justify-start  text-5xl lg:text-6xl font-semibold tracking-wider wp">
          <div>
            WHERE SHALL
            <br />
            WE VENTURE NEXT?
          </div>
        </div>
        {/* flight hotel roadway field  */}
        <div className="flex px-5 md:px-10 lg:px-28 2xl:mt-44">
          <FlightHotel />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
