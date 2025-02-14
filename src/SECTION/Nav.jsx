import React from "react";
import { GiLoveLetter } from "react-icons/gi";
import { RiMemoriesFill } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="flex gap-10 w-full justify-around top-0 bg-transparent">
      <a
        className="flex w-16 h-16 items-center justify-center bg-slate-600 rounded-full"
        href="/"
      >
        <img
          className="w-16 h-16 rounded-full bg-center bg-cover bg-no-repeat"
          src="/glory-me.png"
          alt="us"
        />
      </a>
      <a
        href="/card"
        className="text-[24px] flex items-center justify-center text-black no-underline border-2 w-36 rounded-full cursor-pointer border-solid border-red-300 "
      >
        <GiLoveLetter color="hotpink" size={"1.5rem"} />
        <span>Val Card</span>
      </a>
      <a
        href="/memories"
        className="text-[24px] flex items-center justify-center text-black no-underline border-2 w-36 rounded-full cursor-pointer border-solid border-red-300 "
      >
        <span>Memories</span>
        <RiMemoriesFill color="hotpink" size={"1.5rem"} />
      </a>
    </nav>
  );
};

export default Nav;
