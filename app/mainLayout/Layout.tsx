import React from "react";
import { Footer } from "@/components";
import MainMobileNav from "./MainMobileNav";
import Navbar from "../../components/Navbar";
interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col w-full">
        <div className="w-full hidden md:flex flex-1">
          <Navbar />
        </div>
        <div className="md:hidden w-full z-20">
          <MainMobileNav />
        </div>
        <div className="w-full pt-14 md:pt-40 ">{children}</div>
        <div className="w-full mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
