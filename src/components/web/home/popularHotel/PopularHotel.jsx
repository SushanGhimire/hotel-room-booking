import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../../../../assets/css/style.css";
import pin2 from "../../../../assets/images/icons/pin2.svg";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function PopularHotel() {
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
        <div className="flex flex-col w-full bg-white shadow-md h-full font-header cursor-pointer relative group rounded overflow-hidden transform hover:scale-105 animation">
          {/* image  */}
          <div className="h-80 w-full relative">
            <div className="absolute w-full h-full bg-black bg-opacity-0 animation group-hover:bg-opacity-40 top-0 right-0 flex justify-center items-center">
              <button className="border border-lightWhite text-white px-3 py-2 rounded-lg font-medium font-header opacity-0 hover:bg-alert hover:border-alert transform hover:scale-110 group-hover:opacity-100 animation">
                Read More
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* absolute information  */}
          <div className="absolute bottom-0 right-0 w-full flex flex-col text-white bg-black bg-opacity-60 p-4">
            <div className="flex justify-between text-lg font-semibold">
              <div>A Star Hotel</div>
              <div className="flex items-center">
                <div>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    key={i}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>4.5</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm font-medium">
              <div className="flex items-center">
                <div>
                  <img src={pin2} className="w-4 h-4" alt="" />
                </div>
                <div>Bharatpu-1, Chitwan</div>
              </div>
              <div className="">Rs 12000/night</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  }
  return (
    <div className="py-16 flex flex-col">
      <div className="sm:flex justify-between items-center mb-5 px-5 md:px-10 lg:px-20 ">
        <div className="text-3xl md:text-4xl font-semibold">
          Featured Hotels
        </div>
        <div className="font-semibold flex items-center animation transform hover:scale-110 cursor-pointer mt-2 sm:mt-0">
          <span>Explore All</span>
          <span className="">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="w-full relative ">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={10}
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

export default PopularHotel;
