import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Footer } from "@/components";
import MobileNavbar from "./MobileNavbar";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col w-full ">
        <div className="w-full hidden md:flex   flex-1">
          <Navbar />
        </div>
        <div className="md:hidden w-full">
          <MobileNavbar />
        </div>
        <main className="flex flex-1 w-full xl:px-32 pt-10 md:pt-36 lg:pt-40 ">
          <div className="w-1/4 hidden md:block">
            <SideBar />
          </div>
          <div className="w-full mx-4 md:w-3/4">{children}</div>
        </main>
        <div className="w-full mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
