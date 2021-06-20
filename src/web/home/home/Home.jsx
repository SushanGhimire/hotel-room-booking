import FrontPage from "./integrate/FrontPage";
import PopularRooms from "../PopularRooms/PopularRoom";
import PopularHotel from "./integrate/PopularHotel";
function Home() {
  return (
    <div>
      <FrontPage />
      <PopularRooms />
      <PopularHotel />
    </div>
  );
}

export default Home;
