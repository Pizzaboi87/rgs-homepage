"use client";

import Link from "next/link";

import { ErrorType } from "@/types/types";
import { FC } from "react";

const Error: FC<ErrorType> = ({ error, reset }) => {
  return (
    <div className="custom-container h-[calc(100vh-95px)] xl:h-screen flex flex-col items-center xl:pt-[200px] pt-[150px] justify-start text-center">
      <h1 className="md:text-[3rem] sm:text-[2.5rem] text-[1.5rem] font-bold text-red-500">
        Something went wrong
      </h1>
      <p className="md:text-[1.5rem] text-[1rem] text-textdark dark:text-textlight">
        {error.message}
      </p>
      <div className="flex gap-8 mt-12">
        <button onClick={() => reset()} className="nav--button py-3 px-4">
          Try Again
        </button>
        <Link href="/" className="nav--button  py-3 px-4">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
