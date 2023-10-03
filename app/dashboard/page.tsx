import React from "react";
import { TbEdit } from "react-icons/tb";
import Layout from "../dashboardLayout/Layout";
const Page = () => {
  return (
    <Layout>
      <div className="w-full h-full lg:mx-4 px-2 md:p-8 rounded-md bg-[#F9F9F9]">
        <h1 className="hidden md:block font-semibold text-3xl leading-10">
          My account
        </h1>
        <div className="grid md:grid-cols-2 gap-6 mb-4 md:mb-0  md:gap-4 mt-4">
          <div className="rounded-md bg-white p-2 md:px-5 md:py-3">
            <h1 className="font-medium text-xl leading-5 mb-4">
              Account details
            </h1>
            <p className="font-normal text-base leading-5 opacity-50">
              Chidinma Tolani
            </p>
            <p className="font-normal text-base leading-5 opacity-50">
              Tolanichidinma376@gmail.com
            </p>
          </div>
          <div className="rounded-md bg-white p-2 md:px-5 md:py-3">
            <div className=" flex justify-between items-center flex-1 mb-4">
              <h1 className="font-medium text-xl leading-5">Address book</h1>
              <TbEdit />
            </div>
            <p className="font-normal text-base leading-5 opacity-50">
              Your default shipping address:
            </p>
            <p className="font-normal text-base leading-5 opacity-50">
              Opposite police secondary school, minna, Niger state
              <br />
              Minna-Bosso, Niger
              <br /> +2348134905786
            </p>
          </div>
          <div className="rounded-md bg-white p-2 md:px-5 md:py-3">
            <h1 className="font-medium text-xl leading-5 mb-4">
              Newsletter preferences
            </h1>
            <p className="font-normal text-base leading-5 opacity-50">
              You are currently not subscribed to any of our newsletter.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
