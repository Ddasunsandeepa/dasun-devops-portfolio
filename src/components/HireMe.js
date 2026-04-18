import React from "react";
import { CircleLogo, CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 ml-2 mb-2
    flex items-center justify-center overflow-hidden
    "
    >
      <div className="w-36 h-36 flex items-center justify-center relative">
        <CircleLogo className="fill-dark animate-spin-slow w-full h-full" />
        <Link
          href="mailto:abcd@gmail.com"
          className="flex items-center justify-center
  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
  bg-dark text-light shadow-md border border-solid border-dark
  w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
