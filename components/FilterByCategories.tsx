"use client";
import React, { useState } from "react";
import { PiCaretUpLight } from "react-icons/pi";
import Input from "./Input";

const FilterByCategories = ({ handleChange }: any) => {
  console.log(handleChange);
  const [openCategories, setOpenCategories] = useState<Boolean>(false);
  const [openPrices, setPrices] = useState<Boolean>(false);
  const [openBrand, setBrand] = useState<Boolean>(false);
  const categoriesHandler = () => {
    setOpenCategories((prev) => !prev);
  };
  const pricesHandler = () => {
    setPrices((prev) => !prev);
  };
  const brandHandler = () => {
    setBrand((prev) => !prev);
  };
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-bold text-sm text-[#1B0C2E] ">Categories</h1>
          <PiCaretUpLight
            className={`${openCategories && "rotate-180"}`}
            onClick={() => categoriesHandler()}
          />
        </div>
        <div
          className={`bg-white w-full ${
            openCategories
              ? "h-0 overflow-hidden ease-linear duration-300"
              : "h-32 ease-linear duration-300"
          }`}
        >
          <Input
            handleChange={handleChange}
            value="Phone and tablets"
            category="Phone and tablets"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="Health and beauty"
            category="Health and beauty"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="Electonics"
            category="Electonics"
            name="test"
          />
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-bold text-sm text-[#1B0C2E] ">prices</h1>
          <PiCaretUpLight
            className={`${openPrices && "rotate-180"}`}
            onClick={() => pricesHandler()}
          />
        </div>
        <div
          className={`bg-white w-full ${
            openPrices
              ? "h-0 overflow-hidden ease-linear duration-300"
              : "h-32 ease-linear duration-300"
          }`}
        >
          <Input />
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-bold text-sm text-[#1B0C2E] ">Brand</h1>
          <PiCaretUpLight
            className={`${openBrand && "rotate-180"}`}
            onClick={() => brandHandler()}
          />
        </div>
        <div
          className={`bg-white w-full ${
            openBrand
              ? "h-0 overflow-hidden ease-linear duration-300"
              : "h-32 ease-linear duration-300"
          }`}
        >
          <Input openBrand={openBrand} />
        </div>
      </div>
    </div>
  );
};

export default FilterByCategories;
