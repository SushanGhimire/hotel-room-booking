import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../../../../assets/css/style.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function PopularRoom() {
  let cards = [];
  let star = [];
  for (let i = 0; i < 5; i++) {
    star.push(
      <svg
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        key={i}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  for (let i = 0; i < 10; i++) {
    cards.push(
      <SwiperSlide className="" key={i}>
        <div className="flex flex-col w-full bg-white shadow-md h-full font-subHeader cursor-pointer relative group rounded overflow-hidden text-gray-600">
          <div className="h-56 w-full relative">
            <div className="absolute w-full h-full bg-black bg-opacity-0 animation group-hover:bg-opacity-40 top-0 right-0 flex justify-center items-center">
              <button className="border border-lightWhite text-white px-3 py-2 rounded-lg font-medium font-header opacity-0 hover:bg-alert hover:border-alert transform hover:scale-110 group-hover:opacity-100 animation">
                Read More
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col px-4 space-y-1 pt-4 pb-6">
            <div className="flex justify-between font-semibold font-header text-buttonBlue">
              <span>Luxury Room</span>
              <span>Rs 12000/day</span>
            </div>
            <div className="flex text-xl font-header font-semibold text-alert">
              A Star Hotel
            </div>
            <div className="flex ">Bharatpu-1, Chitwan</div>
            <div className="flex items-center  space-x-3">
              <span>Review</span>
              <span className="flex">{star}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }
  return (
    <div className="py-20 flex flex-col">
      <div className="mx-auto text-3xl font-semibold text-buttonBlue">
        Popular Rooms
      </div>
      <div className="mt-10 w-full relative  px-5">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={5}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
            1440: {
              width: 1400,
              slidesPerView: 5,
            },
          }}
          // slidesPerView={4}
        >
          {cards}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularRoom;
