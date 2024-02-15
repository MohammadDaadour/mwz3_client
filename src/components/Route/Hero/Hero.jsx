import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import SwiperFun from "../../Layout/Swiper";

const lapAndComp = require("./LapAndComp-removebg-preview.png");

const Hero = () => {
  return (

    <div
      dir="rtl"
      className={`flex 800px:flex-row flex-col justify-between items-center relative pt-8 w-full bg-no-repeat bg-transparent`}
    >
      {/* <div className="bg-black absolute w-full h-full bg-black opacity-50 z-10"></div> */}
      <div className="w-[90%] h-full 800px:w-[50%]">
        <div className={`w-full px-8 z-20`}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-black z-20 font-[600] capitalize`}
          >
            مع <span className="text-orange-400">موزع</span> <br /> اكتشف خيارات
            لا حصر لها!
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]"></p>
          <div className="flex items-center">
            <Link to="/products" className="flex items-center h-full">
              <div
                className={`bg-white text-black p-2 px-6 rounded-full mt-5 border-black hover:text-red-600 text-black text-[18px] border`}
              >
                ابدأ التسوق
              </div>
            </Link>
            <hr className="800px:w-[70%] w-[50%] text-black" />
          </div>
        </div>
      </div>
      <SwiperFun />
    </div>

  );
};

export default Hero;
