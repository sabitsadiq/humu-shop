import React from "react";
import Layout from "../dashboardLayout/Layout";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col  p-5  w-full h-full mx-4  rounded-md bg-[#F9F9F9]">
        <h1 className="font-semibold text-3xl leading-10">
          Transaction history
        </h1>
        <div className="overflow-x-auto bg-white mt-5">
          <table className="table-auto w-full text-[#0F0400] ">
            <thead className="text-base leading-6 font-bold">
              <tr className="">
                <th className="px-6 py-3 text-left  tracking-wider">
                  Track Number
                </th>
                <th className="px-6 py-3 text-left  tracking-wider">Detail</th>
                <th className="px-6 py-3 text-left tracking-wider">
                  Payment method
                </th>
                <th className="px-6 py-3 text-left tracking-wider">Price</th>
                <th className="px-6 py-3 text-left tracking-wider flex justify-start">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="font-normal text-sm leading-5 my-10">
              <tr className="">
                <td className="text-[#082F2E] px-6 py-2 whitespace-nowrap">
                  Order ID 3456789
                </td>
                <td className="px-6 py-2 whitespace-nowrap  text-[#61748D]">
                  Mens jacket
                </td>
                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#042F88] font-semibold text-base">
                  Paypal
                </td>
                <td className="flex justify-start px-6 py-2  whitespace-nowrap text-[#082F2E]">
                  35$
                </td>
                <td className="px-6 py-2 whitespace-nowrap mr-auto">
                  <button className="opacity-80 bg-[#FFF3F3] rounded-3xl px-5 py-2">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="text-[#082F2E] px-6 py-2 whitespace-nowrap">
                  Order ID 3456789
                </td>
                <td className="px-6 py-2 whitespace-nowrap  text-[#61748D]">
                  Mens jacket
                </td>
                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#042F88] font-semibold text-base">
                  Paypal
                </td>
                <td className="flex justify-start px-6 py-2  whitespace-nowrap text-[#082F2E]">
                  35$
                </td>
                <td className="px-6 py-2 whitespace-nowrap mr-auto">
                  <button className="opacity-80 bg-[#FFF3F3] rounded-3xl px-5 py-2">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="text-[#082F2E] px-6 py-2 whitespace-nowrap">
                  Order ID 3456789
                </td>
                <td className="px-6 py-2 whitespace-nowrap  text-[#61748D]">
                  Mens jacket
                </td>
                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#042F88] font-semibold text-base">
                  Paypal
                </td>
                <td className="flex justify-start px-6 py-2  whitespace-nowrap text-[#082F2E]">
                  35$
                </td>
                <td className="px-6 py-2 whitespace-nowrap mr-auto">
                  <button className="opacity-80 bg-[#FFF3F3] rounded-3xl px-5 py-2">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="text-[#082F2E] px-6 py-2 whitespace-nowrap">
                  Order ID 3456789
                </td>
                <td className="px-6 py-2 whitespace-nowrap  text-[#61748D]">
                  Mens jacket
                </td>
                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#042F88] font-semibold text-base">
                  Paypal
                </td>
                <td className="flex justify-start px-6 py-2  whitespace-nowrap text-[#082F2E]">
                  35$
                </td>
                <td className="px-6 py-2 whitespace-nowrap mr-auto">
                  <button className="opacity-80 bg-[#FFF3F3] rounded-3xl px-5 py-2">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="text-[#082F2E] px-6 py-2 whitespace-nowrap">
                  Order ID 3456789
                </td>
                <td className="px-6 py-2 whitespace-nowrap  text-[#61748D]">
                  Mens jacket
                </td>
                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#042F88] font-semibold text-base">
                  Paypal
                </td>
                <td className="flex justify-start px-6 py-2  whitespace-nowrap text-[#082F2E]">
                  35$
                </td>
                <td className="px-6 py-2 whitespace-nowrap mr-auto">
                  <button className="opacity-80 bg-[#FFF3F3] rounded-3xl px-5 py-2">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="text-[#082F2E] px-6 py-2 whitespace-nowrap">
                  Order ID 3456789
                </td>
                <td className="px-6 py-2 whitespace-nowrap  text-[#61748D]">
                  Mens jacket
                </td>
                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#042F88] font-semibold text-base">
                  Paypal
                </td>
                <td className="flex justify-start px-6 py-2  whitespace-nowrap text-[#082F2E]">
                  35$
                </td>
                <td className="px-6 py-2 whitespace-nowrap mr-auto">
                  <button className="opacity-80 bg-[#FFF3F3] rounded-3xl px-5 py-2">
                    Pending
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default page;
