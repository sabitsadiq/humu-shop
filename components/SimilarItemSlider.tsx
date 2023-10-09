import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { homeData } from "@/constant/data";
import Image from "next/image";
import { allCategoriesProps } from "@/types";
import Link from "next/link";
import { useGlobalContext } from "@/app/context";

const SimilarItemSlider = () => {
  const { handleAddToCart } = useGlobalContext();
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="mt-8">
      <Splide options={splideOptions}>
        {homeData.map(
          ({
            id,
            img,
            desc,
            title,
            currentCost,
            formerCost,
            btnText,
          }: allCategoriesProps) => (
            <SplideSlide key={id}>
              <div className="rounded-3xl bg-[#A8A8A8]/10">
                <div className="relative h-56">
                  <Image
                    className="w-full rounded-3xl "
                    src={img}
                    fill
                    alt={title}
                  />
                </div>
                <div className="p-2">
                  <Link href={`/result/${id}`}>
                    <h1 className="font-semibold text-base leading-6">
                      {title}
                    </h1>
                  </Link>
                  <h4 className="font-normal text-sm leading-4 text-[#A8A8A8] my-2">
                    {desc}
                  </h4>
                  <div className="relative flex flex-1 justify-between items-center">
                    <div className="flex gap-1 items-center my-2 w-2/">
                      <del className="text-[#D67B11]/50 font-light h-1/5 py-2 text-[1px]">
                        {formerCost}
                      </del>
                      <span className="text-[#D67B11] font-semibold text-[8px] leading-3">
                        {currentCost}
                      </span>
                    </div>
                    <button
                      className="font-normal text-xs leading-3 border hover:bg-[#0D1A4A] hover:text-white border-[#000]/50 rounded-3xl px-2 py-1"
                      onClick={() =>
                        handleAddToCart({
                          id,
                          img,
                          desc,
                          title,
                          currentCost,
                          formerCost,
                          btnText,
                        })
                      }
                    >
                      {btnText}
                    </button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          )
        )}
      </Splide>
    </div>
  );
};

export default SimilarItemSlider;
