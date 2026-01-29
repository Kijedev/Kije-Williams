import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaGoogleDrive, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
import Marquee from "../components/Marquee";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#111] to-black text-white">
      <Marquee />

      {/* Main Container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Left Section */}
          <div className="flex flex-col gap-8">

            {/* Name + Bio */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light Birthstone">
                Kije Williams
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 max-w-md">
                A Certified <strong>Altschool Africa</strong> Frontend Developer
                dedicated to creating visually stunning and user-friendly web
                and mobile applications.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-xl">
              <Link
                to="https://www.linkedin.com/in/williams-kijeosowo-237749224/"
                target="_blank"
                className="hover:text-stone-500 transition-colors"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://github.com/Kijeosowo?tab=repositories"
                target="_blank"
                className="hover:text-stone-500 transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://docs.google.com/document/d/1jD5IhwyadOyXQYBmC6Vg6MtcJY50buqClqaBotXe9zQ/edit"
                target="_blank"
                className="hover:text-stone-500 transition-colors"
              >
                <FaGoogleDrive />
              </Link>
              <Link
                to="https://x.com/Kijeosowo1"
                target="_blank"
                className="hover:text-stone-500 transition-colors"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://wa.link/41kcfj"
                target="_blank"
                className="hover:text-stone-500 transition-colors"
              >
                <FaWhatsapp />
              </Link>
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
              <li className="hover:text-stone-500 transition-colors">
                <a href="#certification">Certification</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-900">
        <p className="text-center text-sm text-neutral-500 py-8">
          © 2025 Kije Williams. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
