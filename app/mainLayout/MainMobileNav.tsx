"use client";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { HiArrowNarrowRight, HiOutlineDotsVertical } from "react-icons/hi";

const MainMobileNav = () => {
  return (
    <header className="flex items-center justify-between w-full z-20 h-10 fixed -3 px-4 bg-white">
      <div>
        <IoMdMenu size={25} />
      </div>

      <div>
        {/* <HiArrowNarrowRight /> */}

        <HiOutlineDotsVertical size={20} />
      </div>
    </header>
  );
};

export default MainMobileNav;
