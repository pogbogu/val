import React from "react";
import VideoPlayer from "../components/Video";
import FloatingHearts from "../components/Floating";

const Card = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen justify-center">
      <VideoPlayer link={"rF5tJ8xuaIc"} />
      <h2 className="text-bold text-[36px]">A Letter to LOML</h2>
      <p className="text-[24px]">
        My Love❤️, Today, like every other day, I find myself thinking about
        you, about us, and about how incredibly blessed I am to have you in my
        life. But today, I just want to take a moment to remind you of how
        deeply I love you, how much you mean to me, and how grateful I am for
        every single moment we share. From the very first time our paths
        crossed, my heart recognized something special in you—something warm,
        something beautiful, something irreplaceable. And since then, my love
        for you has only grown stronger, deeper, and more certain. You are my
        safe space, my joy, my comfort, and my greatest adventure. With you,
        love❤️ isn&apos;t just a word; it&apos;s a feeling, a journey, a
        promise. I cherish everything about you—the way your eyes light up when
        you&apos;re happy, the sound of your laughter that fills my heart with
        warmth, the way you always know exactly how to make my day better, and
        the kindness you show not just to me, but to everyone around you. You
        are a light in my life, and I can&apos;t help but be in awe of you every
        single day. No matter what life brings our way, I want you to know that
        I am here, always, with you and for you. Through every high and every
        low, I promise to love you, to support you, to cherish you, and to
        remind you just how amazing you truly are. So today, and every day
        after, please never doubt how much I love❤️ you. You are my heart, my
        happiness, and my forever. Happy Vals Day ❤️Glory Dan Dukor❤️
      </p>
      <FloatingHearts>
        <img className="w-24 h-24" src="/flower-bg.png" alt="flower" />
      </FloatingHearts>
    </div>
  );
};

export default Card;
