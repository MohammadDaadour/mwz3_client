import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
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
  }
  return (
    <div>
      <div className={`${styles.section} py-16 px-8`}>
        {disElec && <div className={`${styles.heading}`}>
          <h1 lang="ar">أجهزة كهربائية</h1>
        </div>}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts && allProducts.length !== 0 && (
            <>
              {disElec &&
                disElec !== 0 &&
                disElec.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
        {disLab && <div className={`${styles.heading}`}>
          <h1 lang="ar">أجهزة كمبيوتر و لابتوب</h1>
        </div>}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts && allProducts.length !== 0 && (
            <>
              {disLab &&
                disLab !== 0 &&
                disLab.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
