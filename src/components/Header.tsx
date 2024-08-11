import React from "react";
import LinkWrap from "./LinkWrap";

const Header = () => {
  return (
    <header
      className={` w-full bg-white py-4 border-t-[3px] border-blue-400 shadow-sm shadow-blue-400/20`}
    >
      <div className=" w-11/12 mx-auto max-w-[1000px] flex justify-between items-center transition-opacity hidden]">
        <LinkWrap href="/">
          <h1 className="duration-300 cursor-pointer hover:opacity-50 transition-duration: 150ms flex items-center justify-start gap-x-2 sm:gap-x-[10px] lg:gap-x-3">
            <img
              className=" w-10 sm:x-12 lg:w-14"
              src="/images/f_f_business_30_s512_f_business_30_0nbg.png"
              alt=""
            />
            <span
              className={`text-[26px] font-[500] sm:text-[30px] lg:text-[34px] text-black `}
            >
              logo
            </span>
          </h1>
        </LinkWrap>

        <div className="cursor-pointer block lg:hidden">aaa</div>
      </div>
    </header>
  );
};

export default Header;
