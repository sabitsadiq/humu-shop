"use client";
import { homeData } from "@/constant/data";
import React from "react";
import { useGlobalContext } from "../context";
import Image from "next/image";
import Cart from "@/components/Cart";

const Page = () => {
  // const { cartItem, addToCart, itemId } = useGlobalContext();

  return (
    <div className="px-6 lg:px-32 pt-40">
      <div className="overflow-x-auto">
        <Cart />
        {/* console.log (addToCart(itemId)) */}
        {/* {addToCart(itemId) === 0 && <div>no items</div>} */}
        {/* {homeData.map((item) => {
          console.log(homeData);
          return (
            <div key={item.id}>
              <div className="relative h-56">
                <input type="radio" />
                <Image
                  className="w-full rounded-3xl"
                  fill
                  src={item.img}
                  alt="all images"
                />
              </div>
              <div className="flex flex-col">
                <span>{item.title}</span>
                <span>{item.desc}</span>
                <span>{item.formerCost}</span>
              </div>
              <div>
                <span>{item.detailDesc}</span>
              </div>
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div>Buy</div>
            </div>
          );
        })} */}
      </div>

      {/* <div key={item.id} className="rounded-3xl bg-[#A8A8A8]/10">
                <div className="relative h-56"></div>
                <div className="p-2">
                  <h1 className="font-semibold text-base leading-6">
                    {item.title}
                  </h1>
                  <h4 className="font-normal text-sm leading-4 text-[#A8A8A8] my-2">
                    {item.desc}
                  </h4>
                  <div className="relative flex flex-1 justify-between items-center">
                    <div className="flex gap-1 items-center my-2 w-2/">
                      <span className="text-[#D67B11]/50 font-light h-1/5 py-2 text-[1px]">
                        {item.formerCost}
                      </span>
                      <span className="text-[#D67B11] font-semibold text-[8px] leading-3">
                        {item.currentCost}
                      </span>
                    </div>
                  </div>
                </div>
                t
              </div> */}
    </div>
  );
};

export default Page;
