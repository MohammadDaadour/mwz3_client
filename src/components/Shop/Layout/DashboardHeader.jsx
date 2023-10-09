import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../Layout/images/mwz3logo.png";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div
      dir="rtl"
      className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4"
    >
      <div>
        <Link to="/">
          <p className="text-3xl font-semibold">
            {" "}
            <img className="w-[150px]" src={logo} alt="" />{" "}
          </p>{" "}
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
