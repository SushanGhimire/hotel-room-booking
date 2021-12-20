import { useState } from "react";
import next from "../../../../../assets/images/icons/next.svg";
import axiosInstance from "../../../../authentication/axiosInstance";
function SearchCard({ lang }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/search/`, {
        q: query,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-white shadow-lg text-gray-600 flex flex-col px-8 py-5 w-full rounded-b-2xl rounded-tr-2xl">
      {/* input date bars  */}
      <form onSubmit={handleSubmit} className="w-full py-8 relative">
        <div className="w-full ">
          <input
            name="search"
            type="text"
            value={query}
            placeholder="Search for Location or Hotel"
            className="py-4 text-lg"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {/* search button  */}
        <div className="absolute -bottom-10 -right-3 text-sm">
          <button
            className="flex bg-black text-white px-6 py-3 rounded-md
            items-center"
          >
            <span> {lang === "EN" ? "Search Hotels" : "होटल खोज्नुहोस्"}</span>
            <span>
              <img src={next} className="w-4 h-4 ml-2" alt="" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchCard;
