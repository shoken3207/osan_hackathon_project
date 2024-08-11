"use client";
import React from "react";
import LinkWrap from "./LinkWrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { usePathname } from "next/navigation";

const Header = () => {
  const user = useSelector((state: RootState) => state.userData);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header
      className={` w-full bg-white py-4 border-t-[3px] border-blue-400 shadow-sm shadow-blue-400/20`}
    >
      <div className=" w-11/12 mx-auto max-w-[1000px] flex justify-between items-center transition-opacity hidden]">
        <LinkWrap href="/">
          <h1 className="duration-300 cursor-pointer hover:opacity-50 transition-duration: 150ms flex items-center justify-start gap-x-2 sm:gap-x-[10px] lg:gap-x-3">
            <span
              className={`text-[26px] font-[500] sm:text-[30px] lg:text-[34px] text-black `}
            >
              logo
            </span>
          </h1>
        </LinkWrap>
        {pathname === "/" && user.goodCompatibilityMbtis.length > 0 && (
          <LinkWrap href="/inputProfile">
            <span className=" hover:text-blue-400 transition-all duration-150">
              プロフィール編集
            </span>
          </LinkWrap>
        )}
      </div>
    </header>
  );
};

export default Header;
