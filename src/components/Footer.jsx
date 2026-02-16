import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
import Marquee from "../components/Marquee";
import Icons from "../components/Icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#111] to-black text-white font-poppins">
      <Marquee />

      {/* Main Container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section */}
          <div className="flex flex-col gap-8">
            {/* Name + Bio */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-3xl font-light text-neutral-700">
                Kije Williams
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 max-w-md">
                A Certified <strong>Altschool Africa</strong> Frontend Developer
                dedicated to creating visually stunning and user-friendly web
                and mobile applications.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">
              <Icons />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-neutral-700 mb-4">Quick Links</p>
            <ul className="flex flex-col gap-3 text-lg font-light">
              <li className="hover:text-stone-500 transition-colors">
                <a href="/about">About</a>
              </li>
              <li className="hover:text-stone-500 transition-colors">
                <a href="/projects">Projects</a>
              </li>
              <li className="hover:text-stone-500 transition-colors">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-900">
        <p className="text-center text-sm text-neutral-500 py-8">
          © 2026 Kije Williams. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
