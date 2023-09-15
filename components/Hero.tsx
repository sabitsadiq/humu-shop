"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CustomButton } from "./index";
import { allCategoriesProps } from "../types/index";
import { PiCaretDownLight } from "react-icons/pi";
import { homeData, ourShopCategories } from "../constant/data";

const Hero = ({
  id,
  img,
  title,
  desc,
  formerCost,
  currentCost,
  btnText,
}: allCategoriesProps) => {
  //   const handleBuy = () => {};
  return (
    <main className=" pt-32 px-5 lg:px-0">
      <div className="w-full flex">
        <div className="hidden lg:flex">
          <Image
            // className="w-1/2 md:w-full"
            src="/images/left-curve.png"
            width={120}
            height={120}
            alt="side curve"
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row flex-1">
          <div className="md:w-1/2 flex flex-col align-bottom pt-3 md:pt-14 text-[#000000]">
            <h1 className="font-extrabold 2xl:w-4/5  text-xl md:text-3xl xl:text-4xl leading-6 xl:leading-[45px]">
              Shop home appliances and computer accessories
            </h1>
            <p className="font-normal leading-7 xl:w-4/5 text-opacity-50  text-base  md:text-lg my-5">
              Lorem ipsum dolor sit amet consectetur. Integer enim at pharetra
              sed turpis adipiscing pharetra orci. Eu interdum mauris nisl ut
              bibendum. Duis ac lobortis nam ut eget id faucibus est tempor. Est
              nam ac nulla nisi.
            </p>
            <Link href="/signUp">
              <CustomButton
                title="Shop now"
                //   handleClick={handleBuy}
                containerStyle="bg-[#0D1A4A] text-white md:w-1/2 xl:w-1/3 px-8 py-3 text-lg font-semibold leading-7 md:rounded-3xl rounded-xl"
              />
            </Link>
          </div>
          <div className="relative md:w-1/2 h-48 md:h-full ">
            <Image src="/images/cooker.png" fill alt="cooker" />
          </div>
        </div>
        <div className="hidden lg:flex">
          <Image
            src="/images/rightSideCurve.png"
            width={120}
            height={120}
            alt="side curve"
          />
        </div>
      </div>
      <div className="lg:px-32 flex flex-col my-8">
        <div className="flex flex-col lg:flex-row justify-between flex-1 lg:items-center">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/filter-icon.png"
              width={20}
              height={20}
              alt="filter"
            />
            <span className="text-[#1B0C2E] font-medium text-base leading-6">
              filter
            </span>
          </div>
          <div className="flex items-center justify-between w-full md:w-2/3">
            <h1 className="font-extrabold lg:text-4xl leading-9">
              All categories
            </h1>
            <button className="flex lg:w-1/5 border gap-2 lg:gap-0  rounded-xl px-2  justify-between items-center">
              <span className="text-[#1B0C2E] font-medium text-base leading-6">
                sort by:color
              </span>
              <div className="m">
                <PiCaretDownLight />
              </div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8 gap-6">
          {homeData.map((item) => (
            <div key={item.id} className="rounded-3xl bg-[#A8A8A8]/10">
              <div className="relative h-56">
                <Image
                  className="w-full rounded-3xl "
                  src={item.img}
                  fill
                  alt="all images"
                />
              </div>
              <div className="p-2">
                <h1 className="font-semibold text-base leading-6">
                  {item.title}
                </h1>
                <h4 className="font-normal text-sm leading-4 text-[#A8A8A8] my-2">
                  {item.desc}
                </h4>
                <div className="flex flex-1 justify-between items-center">
                  <div className="flex gap-1 items-center my-2 w-2/">
                    <span className="text-[#D67B11]/50 font-light h-1/5 py-2 text-[1px]">
                      {item.formerCost}
                    </span>
                    <span className="text-[#D67B11] font-semibold text-[8px] leading-3">
                      {item.currentCost}
                    </span>
                  </div>
                  <button className="font-normal text-xs leading-3 border hover:bg-[#0D1A4A] hover:text-white border-[#000]/50 rounded-3xl px-2 py-1">
                    {item.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-xl lg:text-4xl leading-9 my-8">
          Our shop categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ourShopCategories.map((item) => (
            <div key={item.id} className="relative h-44 rounded-xl">
              <Image
                src={item.img}
                fill
                alt="ourShopCategories"
                className="rounded-3xl"
              />
              <span className="absolute bottom-6 px-3 rounded-3xl py-2 left-3 bg-[#FFFFFF] bg-opacity-20 xl:text-2xl font-bold text-[#FFFFFF]">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
