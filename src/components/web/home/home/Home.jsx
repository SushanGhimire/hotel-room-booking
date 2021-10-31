import FrontPage from "./integrate/FrontPage";
import PopularRooms from "../PopularRooms/PopularRoom";
import PopularHotel from "../popularHotel/PopularHotel";
import HappyGuests from "./integrate/HappyGuests";
function Home({ lang }) {
  return (
    <div>
      <FrontPage lang={lang} />
      <PopularRooms lang={lang} />
      <HappyGuests lang={lang} />
      <PopularHotel lang={lang} />
    </div>
  );
}

export default Home;
