import React from "react";
import { Footer, Navbar } from "@/components";
interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className=" w-full">
      <div className="flex flex-col w-full">
        <div className="w-full hidden lg:block">
          <Navbar />
        </div>
        <div className="w-full pt-40 ">{children}</div>
        <div className="w-full mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
