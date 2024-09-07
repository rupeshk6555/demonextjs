import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const home = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <button className="text-md rounded-full bg-[#FF6C2F] bg-gradient-to-tr from-orange-500 to-green-900 p-4 text-white">
        <Link href="/dashboard">
          <h1 className="flex items-center gap-2 text-xl italic">
            Dashboard 
            <span className="h-4 w-4">
              <MdKeyboardArrowRight />
            </span>
          </h1>
        </Link>
      </button>
    </div>
  );
};

export default home;
