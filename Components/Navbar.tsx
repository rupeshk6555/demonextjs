"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <p className="bg-gradient-to-tr from-green-500 via-violet-800 to-pink-500 bg-clip-text text-4xl uppercase text-transparent">
      {pathname.slice(1)}
    </p>
  );
};

export default Navbar;
