import React from "react";
import logo from "../../logo2.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineGoogle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div
      dir="rtl"
      className="flex flex-col items-center bg-stone-600 text-white"
    >
      <img src={logo} alt="" className="w-[200px]" />{" "}
      <hr className="w-full border-b border-stone-700" />
      <div className=" md:justify-between justify-center flex-wrap-reverse  md:flex-nowrap sm:px-8 px-3 sm:text-center ">
        <ul className=" px-5 text-center text-start flex sm:block flex-col items-center md:mt-0 mt-10">
          {" "}
          <br />
          <div className="flex items-center mt-[8px] mb-4">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={30}
              style={{ marginRight: "25px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={30}
              style={{ marginRight: "25px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={30}
              style={{ marginRight: "25px", cursor: "pointer" }}
            />
            <AiOutlineGoogle
              size={30}
              style={{ marginRight: "25px", cursor: "pointer" }}
            />
          </div>
        </ul>
      </div>
      <div className="flex bg-black w-full justify-evenly">
        <span className="text-white">.© 2023 MWZ3. all rights reserved</span>
        <Link to="/Terms">
          <span className="hover:underline cursor-pointer">
            Terms · Privacy Policy
          </span>
        </Link>
      </div>
      <div className="sm:block flex items-center justify-center w-full"></div>
    </div>
  );
};

export default Footer;
