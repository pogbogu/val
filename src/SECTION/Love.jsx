import React, { useEffect, useState } from "react";
import { GiLoveMystery, GiLoveHowl } from "react-icons/gi";
import { audioPlayer } from "../components/audioPlay";

import audioFile from "/love.m4a";
import FloatingHearts from "../components/Floating";
import Hero from "./Hero";

const Love = () => {
  const [yes, SetYes] = useState(false);
  useEffect(() => {
    if (yes) {
      audioPlayer(audioFile);
    }
  }, [yes]);

  return (
    <div className="w-full h-screen flex items-center flex-col justify-center mb-10">
      <div className="flex flex-col">
        <h2 className="text-bold text-[54px]">Glory Dan-Dukor </h2>
        <div className="flex items-center">
          <img className="w-36 h-36" src="/flower-bg.png" alt="flower" />
          <h2 className="text-bold text-[34px]">Will you be My Val?</h2>
          <img className="w-36 h-36" src="/flower-bg.png" alt="flower" />
        </div>
      </div>
      <p className="text-[24px] text-red-400">If Yes?</p>
      <button
        onClick={() => {
          SetYes(true);
        }}
        className="flex border-2 border-1 rounded-full border-red-300 flex-row items-center justify-center p-2 h-20 w-54 cursor-pointer"
      >
        <p className="text-[24px] text-red-400">Check Out </p>
        <GiLoveMystery size={"2.5rem"} color="hotpink" />
      </button>
      {yes && (
        <div className="flex items-center justify-center">
          <GiLoveHowl color="red" size={"4rem"} />
          <p className="text-red-600 text-[64px]">
            {" "}
            You are my world, my heart, my everything. I love you! 😘
          </p>
          <FloatingHearts>
            <span>❤️</span>
          </FloatingHearts>
        </div>
      )}
    </div>
  );
};

export default Love;
