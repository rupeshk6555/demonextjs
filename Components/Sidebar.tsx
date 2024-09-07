"use client";
import React, { useState } from "react";
import { FaBasketShopping, FaS } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`w-[280px] max-w-full bg-[#262D34] ${open}`}>
      <div className="flex h-full p-4 pt-10">
        {/* Sidebar content */}
        <div className="flex w-full justify-between text-black">
          <div>
            <h1 className="flex items-center gap-3 text-xl font-semibold text-white">
              <FaBasketShopping className="size-6 text-[#F0934E]" />
              Larkon
            </h1>
          </div>
          <MdOutlineKeyboardDoubleArrowRight className="size-5 text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default sidebar;
