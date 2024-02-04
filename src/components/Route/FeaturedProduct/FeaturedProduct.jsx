import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  const approvedProducts = allProducts && allProducts.filter((product) => product.status === "approved");

  return (
    <div>
      <div className={`${styles.section} py-16 px-8`}>
        <div className={`${styles.heading}`}>
          <h1 lang="ar">منتجات رائجة</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {approvedProducts && approvedProducts.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
