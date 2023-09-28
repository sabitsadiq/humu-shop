import React from "react";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
const MobileNavbar = () => {
  return (
    <header className="flex items-center justify-between w-full z-20 h-10 fixed -3 px-4 bg-white">
      <div>
        <IoMdMenu size={25} />
      </div>
      <div>
        <HiOutlineDotsVertical size={20} />
      </div>
    </header>
  );
};

export default MobileNavbar;
