import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
import { TiSocialLinkedin } from "react-icons/ti";

const Icons = () => {
  return (
    <div className="flex gap-3 text-[1.2rem] lg:justify-left justify-left mt-20 lg:mt-0 text-white">
      <div className="flex gap-4 text-xl sm:text-2xl">
        <Link
          to="https://www.linkedin.com/in/williams-kijeosowo-237749224/"
          target="_blank"
        >
          <span className="h-12 w-12 text-2xl text-[#fff] p-1 rounded-full bg-[#fff]/10 flex items-center justify-center hover:bg-[#fff]/20 transition">
            <TiSocialLinkedin />
          </span>
        </Link>

        <a href="https://wa.link/41kcfj" target="_blank">
          <span className="h-12 w-12 text-2xl text-[#fff] p-1 cursor-pointer rounded-full bg-[#fff]/10 flex items-center justify-center hover:bg-[#fff]/20 transition">
            <FaWhatsapp />
          </span>
        </a>

        <Link to="https://github.com/Kijedev" target="_blank">
          <span className="h-12 w-12 text-2xl text-[#fff] p-1 rounded-full bg-[#fff]/10 flex items-center justify-center hover:bg-[#fff]/20 transition">
            <FaGithub />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Icons;
