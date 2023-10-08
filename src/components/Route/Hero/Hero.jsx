import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
const bg = require('../../../wallpaper.jpg')
const Hero = () => {
  return (
    <div
    dir="rtl"
      className={` relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          `url(${bg})`,
          backgroundSize: "cover",
      }}
    >
      <div className="bg-black absolute w-full h-full bg-black opacity-50 z-10"></div>
      <div className={`${styles.section} w-[90%] 800px:w-[60%] z-20`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#fff] z-20 font-[600] capitalize`}
        >
          خدمات و منتجات<br /> أجهزة الكمبيوتر والأجهزة اللوحية
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          
        </p>
        <Link to="/products" className="inline-block">
            <div className={`bg-white text-black p-2 px-6 rounded-full mt-5 border-black hover:text-red-600 text-black text-[18px]`}>
                   ابدأ التسوق 
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
