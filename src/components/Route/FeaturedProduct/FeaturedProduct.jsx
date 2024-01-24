import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i}`);
    window.location.reload();
  };
  const { allProducts } = useSelector((state) => state.products);
  if (allProducts) {
    var elec = allProducts.filter(
      (product) => product.category === "أجهزة كهربائية"
    );
    var disElec = elec.slice(0, 5);
    var lab = allProducts.filter(
      (product) => product.category === "أجهزة كمبيوتر و لابتوب"
    );
    var disLab = lab.slice(0, 5);
    var mob = allProducts.filter(
      (product) => product.category === "هواتف و أجهزة لوحية"
    );
    var disMob = mob.slice(0, 5);
    var other = allProducts.filter((product) => {
      product.category === "أقسام أخري"
    })
    var disOther = other.slice(0, 5);
  }
  return (
    <div>
      <div className={`${styles.section} py-16 px-8`}>
        {disElec && (
          <div className={`${styles.heading}`}>
            <h1 lang="ar">أجهزة كهربائية</h1>
          </div>
        )}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts && allProducts.length !== 0 && (
            <>
              {disElec &&
                disElec !== 0 &&
                disElec.map((i, index) => <ProductCard data={i} key={index} />)}
              <button onClick={() => submitHandle("أجهزة كهربائية")} className="p-2 bg-orange-400 text-white">المزيد</button>
            </>
          )}
        </div>
        {disLab && (
          <div className={`${styles.heading}`}>
            <h1 lang="ar">أجهزة كمبيوتر و لابتوب</h1>
          </div>
        )}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts && allProducts.length !== 0 && (
            <>
              {disLab &&
                disLab !== 0 &&
                disLab.map((i, index) => <ProductCard data={i} key={index} />)}
              <button onClick={() => submitHandle("أجهزة كمبيوتر و لابتوب")} className="p-2 bg-orange-400 text-white">المزيد</button>
            </>
          )}
        </div>
        {disMob && (
          <div className={`${styles.heading}`}>
            <h1 lang="ar">أجهزة كمبيوتر و لابتوب</h1>
          </div>
        )}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts && allProducts.length !== 0 && (
            <>
              {disMob &&
                disMob !== 0 && 
                disMob.map((i, index) => <ProductCard data={i} key={index} />)}
              <button onClick={() => submitHandle("هواتف و أجهزة لوحية")} className="p-2 bg-orange-400 text-white">المزيد</button>
            </>
          )}
        </div>
        {disOther && (
          <div className={`${styles.heading}`}>
            <h1 lang="ar">أقسام أخري</h1>
          </div>
        )}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts && allProducts.length !== 0 && (
            <>
              {disOther &&
                disOther !== 0 &&
                disOther.map((i, index) => <ProductCard data={i} key={index} />)}
              <button onClick={() => submitHandle("أقسام أخري")} className="p-2 bg-orange-400 text-white">المزيد</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
