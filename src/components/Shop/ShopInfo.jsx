import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const { products } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <div className="w-[full] py-5">
            <div className="w-full flex item-center justify-center">
              <img
                src={`${data.avatar?.url}`}
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
            </div>
            <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
              {data.description}
            </p>
          </div>
          {isAuthenticated ? (
            <>
              <div className="p-3">
                <h5 className="font-[600]">العنوان</h5>
                <h4 className="text-[#000000a6]">{data.address}</h4>
              </div>
              <div className="p-3">
                <h5 className="font-[600]">رقم الهاتف</h5>
                <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
              </div>
              <div className="p-3">
                <h5 className="font-[600]">اجمالي المنتجات</h5>
                <h4 className="text-[#000000a6]">
                  {products && products.length}
                </h4>
              </div>
              <div className="p-3">
                <h5 className="font-[600]">تقييمات البائع</h5>
                <h4 className="text-[#000000b0]">{averageRating}/5</h4>
              </div>
              <div className="p-3">
                <h5 className="font-[600]">انضم في</h5>
                <h4 className="text-[#000000b0]">
                  {data?.createdAt?.slice(0, 10)}
                </h4>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="p-4 rounded-lg text-lg font-semibold text-white bg-orange-600 hover:bg-orange-700">
                {" "}
                قم بتسجيل الدخول أولا لاظهار بيانات البائع كاملة{" "}
              </button>
            </Link>
          )}

          {isOwner && (
            <div className="py-3 px-4">
              <Link to="/settings">
                <div
                  className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
                >
                  <span className="text-white">تعديل المتجر</span>
                </div>
              </Link>
              <div
                className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
                onClick={logoutHandler}
              >
                <span className="text-white"> تسجيل الخروج</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;
