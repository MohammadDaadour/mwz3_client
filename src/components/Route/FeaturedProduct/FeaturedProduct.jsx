import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  const electronicProducts = allProducts.filter(
    (product) => product.category === "أجهزة الكترونية"
  );

  const display = (category) => {
    const filteredProducts = allProducts.filter(
      (product) => product.category === category
    );

    const displayedProducts = filteredProducts.slice(0, 10);
    return displayedProducts;
  };

  return (
    <div>
      <div className={`${styles.section} py-16 px-8`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts &&
            display("أجهزة كهربائية").length !== 0 &&
            display("أجهزة كهربائية") && (
              <div className={`${styles.heading}`}>
                <h1 lang="ar">أجهزة كهربائية</h1>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
