import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const Icons = () => {
  return (
    <div className="flex gap-3 text-[1.2rem] lg:justify-left justify-left mt-20 lg:mt-0 text-white">
      <Link
        to="https://www.linkedin.com/in/williams-kijeosowo-237749224/"
        className="hover:text-stone-600 transition-colors duration-500"
        title="LinkedIn"
        target="_blank"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        to="https://github.com/Kijedev"
        className="hover:text-stone-600 transition-colors duration-500"
        title="Github"
        target="_blank"
      >
        <FaGithub />
      </Link>
      {/* <Link
        to="https://docs.google.com/document/d/1jD5IhwyadOyXQYBmC6Vg6MtcJY50buqClqaBotXe9zQ/edit?usp=sharing"
        className="hover:text-stone-600 transition-colors duration-500"
        title="Google Drive"
        target="_blank"
      >
        <FaGoogleDrive />
      </Link> */}
      <Link
        to="https://x.com/Kijeosowo1"
        className="hover:text-stone-600 transition-colors duration-500"
        title="X"
        target="_blank"
      >
        <FaTwitter />
      </Link>
      <Link
        to="https://wa.link/41kcfj"
        className="hover:text-stone-600 transition-colors duration-500"
        title="WhatsApp"
        target="_blank"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default Icons;
