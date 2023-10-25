import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { categoriesSwip } from "../../static/data";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperFun = () => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    window.location.reload();
  };

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      className="800px:w-[50%] w-[100%] p-0 text-black"
    >
      {categoriesSwip &&
        categoriesSwip.map((i, index) => (
          <SwiperSlide
            key={index}
            className={`flex items-center bg-orange-400 w-full h-[80vh] w-full rounded-r-full text-black`}
            onClick={() => submitHandle(i)}
          >
            <div className="h-96 w-full flex flex-col items-center ">
              <img
                className="h-72 relative cursor-pointer"
                src={i.image_Url}
                alt=""
              />
              <h3 className="select-none  cursor-pointer p-2 relative bg-white text-orange-600 font-semibold text-lg rounded-full px-4">{i.title}</h3>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperFun;
