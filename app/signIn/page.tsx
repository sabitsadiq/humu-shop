import React from "react";
import Link from "next/link";
import { CustomButton } from "@/components";
import Image from "next/image";
const Page = () => {
  return (
    <main className="flex flex-col md:flex-row w-full px-4 md:px-0 pt-32 mb-8 flex-1 md:pl-8 lg:pl-28">
      <div className="md:w-1/2  my-16 ">
        <div className="md:w-3/5">
          <h1 className="font-semibold text-4xl leading-10 w-fit mx-auto">
            Sign in
          </h1>
          <p className="my-3 font-normal text-base leading-5 text-center opacity-50">
            Enter your personal details and start your journey with us at
            humushop
          </p>
          <form className="flex flex-col flex-1 mt-8">
            <label className="mb-1 font-semibold text-lg leading-7">
              Email address
            </label>
            <input
              type="text"
              className="w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
              placeholder="John doe@gmail.com"
            />
            <label className="mb-1 font-semibold text-lg leading-7">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="flex items-center w-full bg-[#CCCCCC]/20 rounded-full border p-3 outline-none mb-4"
            />
            <Link
              href="/forgetPassword"
              className="flex items-center justify-end w-full flex-1"
            >
              <span className="font-bold text-base leading-5">
                Forgot password?
              </span>
            </Link>
          </form>
          <Link href="/dashboard" className="flex justify-center mt-4">
            <CustomButton
              title="Sign In"
              containerStyle="bg-[#0D1A4A] rounded-full text-white p-3 w-2/5 flex justify-center"
            />
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 my-16">
        <Image
          className="object-cover w-full h-[520px]"
          src="/images/signUpSideImg.png"
          width={120}
          height={30}
          alt="side curve"
        />
      </div>
    </main>
  );
};

export default Page;
