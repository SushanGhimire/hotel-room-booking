import FrontPage from "./integrate/FrontPage";
import PopularRooms from "../PopularRooms/PopularRoom";
import PopularHotel from "../popularHotel/PopularHotel";
import HappyGuests from "./integrate/HappyGuests";
function Home() {
  return (
    <div>
      <FrontPage />
      <PopularRooms />
      <HappyGuests />
      <PopularHotel />
    </div>
  );
}

export default Home;
