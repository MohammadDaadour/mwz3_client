import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const IcoSwiper = ({ categoriesData}) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    window.location.reload();
  };
  return (
    <>
      {categoriesData &&
        categoriesData.map((category) => {
          return (
            <img
              className="w-[60px] rounded-lg bg-gray-100 p-2 px-4 mx-4 cursor-pointer"
              src={category.image_Url}
              alt=""
              onClick={submitHandle}
            />
          );
        })}
        </>
  );
};

export default IcoSwiper;
