import { useGlobalContext } from "@/app/context";
import React, { useContext } from "react";
import Card from "./Card";
import { allCategoriesProps } from "@/types";
import Image from "next/image";
const Cart = () => {
  const { cart } = useGlobalContext();
  return (
    <div className="">
      {cart.length === 0 ? (
        <div>No items</div>
      ) : (
        <div className="">
          <div className="grid grid-cols-5 justify-between items-center w-full flex-1 font-normal text-xl leading-7 text-[#000000] text-opacity-90">
            <div>
              <input type="radio" />
              <label className="ml-2">Select all items</label>
            </div>
            <div className="">item</div>
            <div>Description</div>
            <div className="flex justify-center">Quantity</div>
            <div className="flex justify-center">Shop</div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-5 mt-8 w-full">
              <div className="flex gap-2">
                <div>
                  <input type="radio" />
                </div>
                <div className="relative w-44 h-32">
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
              <div className="flex gap-2 justify-center">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className="flex justify-center text-[#000000]/80 font-base text-xl leading-7">
                buy
              </div>
            </div>
          ))}
        </div>
      )}
      <table className="hidden w-full text-[#0F0400]">
        <thead className="text-base leading-6 font-bold">
          <tr className="">
            <th className="px-6 py-3 text-left  tracking-wider">
              <input type="radio" />
              <label className="ml-4">Select all items</label>
            </th>
            <th className="px-6 py-3 text-left  tracking-wider">item</th>
            <th className="px-6 py-3 text-left tracking-wider">Description</th>
            <th className="px-6 py-3 text-left tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left tracking-wider flex justify-start">
              Shop
            </th>
          </tr>
        </thead>
        <tbody className="font-normal text-sm leading-5 my-10">
          {cart.map((item) => (
            <tr className="mr-4 w-full" key={item.id}>
              <td className="text-[#082F2E] px-6 py-2 whitespace-nowrap flex gap-2 items-start ">
                <input type="radio" className="mt-2" />
                <div className="relative w-44 h-24">
                  <Image
                    className="w-full rounded-xl"
                    src={item.img}
                    fill
                    alt={item.title}
                  />
                </div>
              </td>
              <td className="px-6 py-2 whitespace-nowrap  text-[#61748D]">
                <span className="-mt-4">
                  <h1>{item.title}</h1>
                  <p>{item.currentCost}</p>
                </span>
              </td>
              <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#042F88] font-semibold text-base">
                {item.desc}
              </td>
              <td className="flex justify-start px-6 py-2  whitespace-nowrap text-[#082F2E]">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </td>
              <td className="px-6 py-2 whitespace-nowrap mr-a">buy</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
