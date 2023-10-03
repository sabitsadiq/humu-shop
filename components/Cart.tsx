import { useGlobalContext } from "@/app/context";
import React, { useContext } from "react";
import Card from "./Card";
import { allCategoriesProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";
const Cart = () => {
  const { carts, handleOrder, orderItems } = useGlobalContext();
  return (
    <div className="">
      {carts.length === 0 ? (
        <div>No items</div>
      ) : (
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-5 justify-between items-center w-full flex-1 font-normal text-xl leading-7 text-[#000000] text-opacity-90">
            <div>
              <input type="radio" />
              <label className="ml-2">Select all items</label>
            </div>

            <div className="hidden md:flex justify-center">item</div>
            <div className="hidden md:flex justify-center">Description</div>
            <div className="hidden md:flex justify-center">Quantity</div>
            <div className="hidden md:flex justify-center">Shop</div>
          </div>
          {carts.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-5 mt-8 w-full gap-2"
            >
              <div className="md:flex  gap-2">
                <div>
                  <input type="radio" />
                </div>
                <div className="relative w-full h-56 md:w-44 md:h-32">
                  <Image
                    className="w-full rounded-xl"
                    src={item.img}
                    fill
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h1 className="font-semibold text-base leading-6 text-[#1B0C2E]">
                  {item.title}
                </h1>
                <h1 className="font-normal text-base leading-5 text-[#000000]/50">
                  {item.category}
                </h1>
                <span className="font-semibold text-base leading-3">
                  {item.currentCost}
                </span>
              </div>
              <div className="text-[#A8A8A8] font-normal text-base leading-4">
                {item.desc}
              </div>
              <div className="flex gap-2 justify-center items-start">
                <span className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80">
                  -
                </span>
                <span className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80">
                  1
                </span>
                <span className="flex items-center font-semibold cursor-pointer text-base leading-6 text-[#000000]/80">
                  +
                </span>
              </div>

              <div
                className="flex justify-center w-full bg-[#0D1A4A] py-2 rounded-md text-white hover:text-[#000000]/80 font-base text-xl leading-7 cursor-pointer"
                onClick={() => handleOrder(item)}
              >
                Buy
              </div>
            </div>
          ))}
        </div>
      )}
      <Link href="/checkOut">
        <button>checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
