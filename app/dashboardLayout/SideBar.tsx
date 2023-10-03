"use client";
import React from "react";
import Link from "next/link";
const sideNavItems = [
  {
    id: "My account",
    label: "My account",
    path: "/dashboard",
  },
  {
    id: "Orders",
    label: "Orders",
    path: "/order",
  },
  {
    id: "Saved items",
    label: "Saved items",
    path: "/saveItems",
  },
  {
    id: "Recently viewed",
    label: "Recently viewed",
    path: "/recentlyViewed",
  },
  {
    id: "Payment history",
    label: "Payment history",
    path: "/paymentHistory",
  },
  {
    id: "Settings",
    label: "Settings",
    path: "/setting",
  },
  {
    id: "Newsletter",
    label: "Newsletter",
    path: "/",
  },
  {
    id: "Log out",
    label: "Log out",
    path: "/",
  },
];
interface props {
  openSidebar: boolean;
}
const SideBar = ({ openSidebar }: props) => {
  return (
    <nav className="w-full border rounded-md p-2">
      <ul className="w-full">
        <h1 className="font-bolder text-xl leading-5">Menu</h1>
        {sideNavItems.map((item) => (
          <li
            className="full hover:bg-[#0D1A4A] px-2 py-2 rounded-sm hover:text-white my-2"
            key={item.id}
          >
            <Link
              href={item.path}
              className="font-bold text-sm  leading-5 w-full"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
