import { useState, useEffect } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import { CiUser } from "react-icons/ci";
import { LuCodeXml } from "react-icons/lu";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
// import { LiaCertificateSolid } from "react-icons/lia";
import { PiHamburger } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const navItems = [
  { name: "About", path: "/about", scrollId: null, icon: <CiUser /> },
  {
    name: "Projects",
    path: "/projects",
    scrollId: "projects",
    icon: <LuCodeXml />,
  },
  // { name: "Certification", path: "/certification", scrollId: "certification", icon: <LiaCertificateSolid /> },
  {
    name: "Contact",
    path: "/contact",
    scrollId: null,
    icon: <RiContactsBook3Line />,
  },
];

const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-0">
      <div className="mx-auto mt-4 max-w-7xl px-6 py-6 flex items-center justify-between rounded-full bg-black/20 backdrop-blur-[2px] border border-white/15 shadow-lg shadow-black/20 lg:shadow-black/0">
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:block font-poppins">
          <ul className="text-[1rem] flex gap-6">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 transition-colors duration-300 text-white/50 hover:text-white"
              >
                <span className="text-lg">{item.icon}</span>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <PiHamburger />}
        </button>
      </div>

      {/* Mobile Dropdown with Slide Down */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden flex flex-col items-center justify-center`}
      >
        {/* Close Icon inside menu */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-white text-4xl"
        >
          <IoClose />
        </button>

        <ul className="flex flex-col gap-12 text-white text-2xl font-semibold items-center">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-4 hover:text-stone-300 transition"
            >
              <span className="text-3xl">{item.icon}</span>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-center"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 text-xl sm:text-2xl mt-10">
          <Link
            to="https://www.linkedin.com/in/williams-kijeosowo-237749224/"
            target="_blank"
          >
            <span className="h-12 w-12 text-2xl text-[#fff] p-1 rounded-full bg-[#fff]/10 flex items-center justify-center hover:bg-[#fff]/20 transition">
              <TiSocialLinkedin />
            </span>
          </Link>

          <a href="https://wa.me/2348025818186" target="_blank">
            <span className="h-12 w-12 text-2xl text-[#fff] p-1 rounded-full bg-[#fff]/10 flex items-center justify-center hover:bg-[#fff]/20 transition">
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
    </div>
  );
};

export default NavbarMenu;
