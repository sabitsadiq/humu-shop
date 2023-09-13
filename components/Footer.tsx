import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constant/data";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { PiAppleLogoLight } from "react-icons/pi";
import { footerProps } from "@/types";
import Link from "next/link";

const Footer = ({ links }: footerProps) => {
  return (
    <footer className="w-full mt-14 py-14 px-4 flex justify-center lg:px-32 bg-[#0D1A4A] flex-1">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start text-white">
        <div className="mb-4">
          <Image
            src="/images/Humushop-logo.png"
            alt="humushop-logo"
            width={80}
            height={18}
            className="object-contain"
          />
          <h1 className="my-2">Follow us on:</h1>
          <div className="flex flex-1 justify-between items-center cursor-pointer">
            <LuFacebook />
            <LuInstagram />
            <LuTwitter />
          </div>
        </div>
        <div className="flex flex-col w-1/2 lg:flex-row justify-between items-start">
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h3 className="font-medium text-base leading-5 mb-4">
                {link.title}
              </h3>
              {link.links.map((item: any) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="flex flex-col text-base font-normal leading-5"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="block">
          <h3 className="text-base font-medium leading-5 mb-4">
            Download our mobile app
          </h3>
          <div className="flex flex-col gap-3">
            <button className="rounded-lg py-2 border px-6 flex gap-3 justify-center items-center">
              <PiAppleLogoLight size={35} />
              <div className="flex flex-col ">
                <span className="text-sm font-normal leading-3 text-[#BBB6C0]">
                  Download it on
                </span>
                <span className="text-base font-semibold leading-5">
                  Google store
                </span>
              </div>
            </button>
            <button className="rounded-lg py-2 border px-6 flex gap-3 justify-center items-center">
              <PiAppleLogoLight size={35} />
              <div className="flex flex-col ">
                <span className="text-sm font-normal leading-3 text-[#BBB6C0]">
                  Download it on
                </span>
                <span className="text-base font-semibold leading-5">
                  Google store
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
