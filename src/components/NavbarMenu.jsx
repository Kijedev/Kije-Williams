import { useState, useEffect } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";
import { RiContactsBook3Line } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiHamburger } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { name: "About", path: "/about", scrollId: null, icon: <CiUser /> },
  {
    name: "Projects",
    path: "/projects",
    scrollId: "projects",
    icon: <LuCodeXml />,
  },
  {
    name: "Certification",
    path: "/certification",
    scrollId: "certification",
    icon: <LiaCertificateSolid />,
  },
  {
    name: "Contact",
    path: "/contact",
    scrollId: null,
    icon: <RiContactsBook3Line />,
  },
];

const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 ">
      <div
        className="
      mx-auto
      mt-4
      max-w-7xl
      px-6 py-6
      flex items-center justify-between
      rounded-full
      backdrop-blur-sm
border border-white/15
shadow-lg shadow-black/20 lg:shadow-black/0"
      >
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:block font-poppins">
          <ul className="text-white/70 text-[1rem] flex gap-6 font-light">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <span className="text-lg">{item.icon}</span>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <PiHamburger />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-black/10 border border-white/5 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:hidden">
          <ul className="flex flex-col gap-8 text-white text-lg">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 hover:text-stone-300 transition"
              >
                <span>{item.icon}</span>
                <Link to={item.path} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
