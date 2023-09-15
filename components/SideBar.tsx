import React from "react";
import Link from "next/link";
const SideBar = () => {
  return (
    <nav className="w-1/3 border rounded-md p-2">
      <ul className="w-full">
        <h1 className="font-bolder text-xl leading-5">Menu</h1>
        <li className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2">
          <Link href="/" className="font-bold text-sm  leading-5 w-full">
            My account
          </Link>
        </li>
        <li className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2">
          <Link href="/" className="font-bold text-sm  leading-5 w-full">
            Orders
          </Link>
        </li>
        <li className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2">
          <Link href="/" className="font-bold text-sm  leading-5 w-full">
            Saved items
          </Link>
        </li>
        <li className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2">
          <Link href="/" className="font-bold text-sm  leading-5 w-full">
            Recently viewed
          </Link>
        </li>
        <li className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2">
          <Link href="/" className="font-bold text-sm  leading-5 w-full">
            Payment history
          </Link>
        </li>
        <h1 className="font-bolder text-xl leading-5">Other</h1>
        <li className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2">
          <Link href="/" className="font-bold text-sm  leading-5 w-full">
            Settings
          </Link>
        </li>
        <li className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2">
          <Link href="/" className="font-bold text-sm  leading-5 w-full">
            Newsletter
          </Link>
        </li>
        <li className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2">
          <Link href="/" className="font-bold text-sm  leading-5 w-full">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
