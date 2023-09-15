import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";
const Page = () => {
  return (
    <main className="flex flex-col md:flex-row w-full px-4 md:px-0 pt-32 mb-8 flex-1 md:pl-8 lg:pl-28">
      <div className="md:w-1/2  my-16 flex self-center ">
        <div className="md:w-4/5 xl:w-1/2">
          <h1 className="font-semibold text-3xl md:text-4xl leading-10 w-fit mx-auto">
            Email verification
          </h1>
          <p className="my-3 font-normal text-base leading-5 text-center opacity-50">
            Kindly check your email address an click on the verification link.
          </p>

          <Link href="/signIn" className="flex justify-center mt-4">
            <CustomButton
              title="Proceed"
              containerStyle="bg-[#0D1A4A] rounded-full text-white p-3 w-1/2 md:w-2/5 flex justify-center"
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
