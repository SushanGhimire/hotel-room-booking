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

function PopularHotel() {
  let cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(
      <SwiperSlide className="" key={i}>
        <div className="flex flex-col w-full bg-lightWhite shadow-md h-full">
          <div className="h-52 w-full">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>Dami wala book</div>
          <div>Dami wala book</div>
        </div>
      </SwiperSlide>
    );
  }
  return (
    <div className="py-20 flex flex-col">
      <div className="mx-auto text-3xl font-semibold text-buttonBlue">
        Hotels
      </div>
      <div className="mt-10 w-full relative ">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={30}
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
