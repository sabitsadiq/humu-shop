import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { BsPerson, BsHandbag, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
const Navbar = () => {
  return (
    <header className="w-full z-10 fixed pt-3 bg-white">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center flex-1 lg:px-32">
        <div>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={18}
            className="object-contain"
          />
        </div>
        <div className="bg-[#D9D9D9]/20 px-2 items-center rounded-3xl w-1/2 flex">
          <BsSearch className="ml-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-11/12 outline-none p-2 rounded-3xl bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl leading-7">447449688883</h1>
          <span className="font-medium leading-5 text-base">Call</span>
        </div>
      </nav>
      <nav className="max-w-[1440px] border-y shadow-lg mt-3 mx-auto py-2 flex justify-between items-center flex-1 lg:px-32">
        <div className="w-3/5 flex justify-between  items-center ">
          <CustomButton
            title="Home"
            containerStyle="rounded-3xl border px-5 py-2 hover:bg-[#0D1A4A] text-base font-medium leading-5 hover:text-white"
          />
          <CustomButton
            title="Products"
            containerStyle="rounded-3xl border px-5 py-2 hover:bg-[#0D1A4A] text-base font-medium leading-5 hover:text-white"
          />
          <CustomButton
            title="Categories"
            containerStyle="rounded-3xl border px-5 py-2 hover:bg-[#0D1A4A] text-base font-medium leading-5 hover:text-white"
          />
          <CustomButton
            title="Daily deals"
            containerStyle="rounded-3xl border px-5 py-2 hover:bg-[#0D1A4A] text-base font-medium leading-5 hover:text-white"
          />
          <CustomButton
            title="Contact us"
            containerStyle="rounded-3xl border px-5 py-2 hover:bg-[#0D1A4A] text-base font-medium leading-5 hover:text-white"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <BsHandbag />
            <h4 className="font-medium text-base leading-5">Cart</h4>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center mx-4">
            <AiOutlineHeart />
            <h4 className="font-medium text-base leading-5">favourite</h4>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center">
            <BsPerson />
            <h4 className="font-medium text-base leading-5">Profile</h4>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
