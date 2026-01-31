import React from "react";
import { Link } from "react-router";
import { IoChevronBackOutline } from "react-icons/io5";

export default function BackBtn() {
  return (
    <div>
      <Link to="/projects" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white ml-6 lg:ml-0">
        <IoChevronBackOutline /> All Projects
      </Link>
    </div>
  );
}
