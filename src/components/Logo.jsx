import React from "react";
import { Link } from "react-router";
import kijeLogo from "../Image/kije williams.png";

const Logo = () => {
  return (
    <div className="w-[20%] lg:w-[5%] cursor-pointer hover:scale-110 text-[#1A1818] hover:text-stone-600 transition ease-in duration-300">
      <Link to="/">
        <img src={kijeLogo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
