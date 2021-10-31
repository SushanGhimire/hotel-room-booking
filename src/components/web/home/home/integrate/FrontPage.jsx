import FlightHotel from "./FlightHotel";
// import kathmandu from "../../../../../assets/images/icons/kathmandu.png";
import front from "../../../../../assets/images/home/front.jpg";
function FrontPage({ lang }) {
  return (
    <div
      className="w-full min-h-screen  text-white  pb-10   bg-lightWhite bg-cover md:bg-center flex  relative bg-no-repeat md:bg-fixed font-subHeader"
      style={{
        backgroundImage: `url(${front})`,
      }}
    >
      <div className="w-full flex flex-col mt-36 2xl:mt-80">
        {/* top header  */}
        <div className="flex justify-start  text-5xl lg:text-6xl font-semibold tracking-wider wp">
          <div>
            {lang === "EN" ? " WHERE SHALL" : "कहाँ हुनेछ"}
            <br />
            {lang === "EN" ? " WE VENTURE NEXT?" : "हाम्रो अर्को उद्यम ?"}
          </div>
        </div>
        {/* flight hotel roadway field  */}
        <div className="flex px-5 md:px-10 lg:px-28 ">
          <FlightHotel lang={lang} />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
