import React from "react";
import { Link } from "react-router";
import { IoChevronBackOutline } from "react-icons/io5";

export default function BackBtn() {
  return (
    <div>
      <Link to="/projects" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white">
        <IoChevronBackOutline /> All Projects
      </Link>
    </div>
  );
}
