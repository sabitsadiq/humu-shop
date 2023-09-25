import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Footer } from "@/components";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" w-full">
      <div className="flex flex-col w-full">
        <div className="w-full hidden lg:block">
          <Navbar />
        </div>

        <main className="flex flex-1 w-full lg:px-32 pt-40 ">
          <div className="w-1/4">
            <SideBar />
          </div>
          <div className="w-3/4">{children}</div>
        </main>
        <div className="w-full mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
