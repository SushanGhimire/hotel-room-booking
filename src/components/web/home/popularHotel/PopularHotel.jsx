import React, { useState, useEffect } from "react";
import axiosInstance from "../../../authentication/axiosInstance";
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

function PopularHotel({ lang }) {
  const [hotelData, setHotelData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/hotel/all-hotels/")
      .then((res) => {
        // console.log(res.data);
        setHotelData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <div className="py-16 flex flex-col">
      <div className="sm:flex justify-between items-center mb-5 px-5 md:px-10 lg:px-20 ">
        <div className="text-3xl md:text-4xl font-medium">
          {" "}
          {lang === "EN" ? "Featured Hotels" : "विशेष होटलहरू"}
        </div>
        <div className="font-semibold flex items-center animation transform hover:scale-110 cursor-pointer mt-2 sm:mt-0">
          {lang === "EN" ? "Explore All" : "सबै अन्वेषण गर्नुहोस्"}
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
          {Array.isArray(hotelData) &&
            hotelData.map((hotel, index) => {
              const { name, star, address, hotel_image } = hotel;
              return (
                <SwiperSlide className="" key={index}>
                  <div className="flex flex-col w-full bg-white shadow-md h-full font-header cursor-pointer relative group rounded overflow-hidden transform hover:scale-105 animation">
                    {/* image  */}
                    <div className="h-80 w-full relative">
                      <div className="absolute w-full h-full bg-black bg-opacity-0 animation group-hover:bg-opacity-40 top-0 right-0 flex justify-center items-center">
                        {/* <button className="border border-lightWhite text-white px-3 py-2 rounded-lg font-medium font-subHeader opacity-0 hover:bg-alert hover:border-alert transform hover:scale-110 group-hover:opacity-100 animation text-sm">
                          More Details
                        </button> */}
                      </div>
                      <img
                        src={hotel_image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* absolute information  */}
                    <div className="absolute bottom-0 right-0 w-full flex flex-col text-white  p-4">
                      <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 w-full h-full z-0 filter blur-sm"></div>
                      <div className="flex justify-between text-lg font-semibold z-10">
                        <div>{name}</div>
                        <div className="flex items-center">
                          <div>
                            <svg
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              key={index}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <div>{star}</div>
                        </div>
                      </div>
                      <div className="flex  text-sm font-medium font-subHeader z-10">
                        <div className="flex items-center">
                          <div>
                            <img src={pin2} className="w-4 h-4" alt="" />
                          </div>
                          <div>{address}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularHotel;
