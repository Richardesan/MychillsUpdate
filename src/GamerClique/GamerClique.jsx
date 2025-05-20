import React from "react";
import LoopingVideo from "./component/LoopingVideo";
import Button from "../component/button";
import Card from "./component/card";
import Creators from "./component/creators";

const GamerClique = () => {
  const cardData = [
    {
      image: "/community1.png",
      title: "L3E7",
      type: "MMORPG",
      device: "PC",
      link: "https://x.com/l3e7_official?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    },
    {
      image: "/community2.png",
      title: "KARTPARTY",
      type: "RACING",
      device: "PC",
      link: "https://x.com/kakarbom?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
    {
      image: "/community3.png",
      title: "COUNTERFIRE",
      type: "FPS",
      device: "MOBILE",
      link: "https://x.com/playcounterfire?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    },
    {
      image: "/community9.png",
      title: "MATRIX",
      type: "FPS",
      device: "MOBILE",
      link: "https://x.com/matr1xofficial?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    },
    {
      image: "/community4.png",
      title: "BLADE OF GOD",
      type: "RPG",
      device: "PC & MOBILE",
      link: "https://x.com/bladeofgodx?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
    {
      image: "/community5.png",
      title: "CASTLE",
      type: "RPG",
      device: "MOBILE",
      link: "https://x.com/castileofficial?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
    {
      image: "/community6.png",
      title: "SUPERCHAMPS",
      type: "RPG",
      device: "PC",
      link: "https://x.com/superchampshq?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
    {
      image: "/community7.png",
      title: "NIFTY ISLAND",
      type: "STRATEGY",
      device: "PC",
      link:"https://x.com/nifty_island?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
    {
      image: "/community8.png",
      title: "THE BEACON",
      type: "RPG",
      device: "PC",
      link: "https://x.com/the_beacon_gg?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
    {
      image: "/community10.png",
      title: "FUNDORA",
      type: "RACING",
      device: "PC & MOBILE",
      link: "https://x.com/gingerjoygames?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
    {
      image: "/community11.png",
      title: "METACENE",
      type: "MMORPG",
      device: "PC & MOBILE",
      link: "https://x.com/metacenegame?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
    {
      image: "/community12.png",
      title: "ROBOKIDEN",
      type: "RPG",
      device: "PC",
      link: "https://x.com/metacenegame?s=21&t=qqnxSPxnKqrZQrtmX_cuEw"
    },
  ];

  return (
    <div className="text-white">
      <section className="h-[75vh] max-sm:h-screen relative ">
        <div className="absolute left-0 top-0 w-full h-full z-0 opacity-20 flex items-center   overflow-hidden">
          <div className="w-[10rem] mr-auto self-start">
            <img src="gamepad.png" />
          </div>
          <div className=" mx-auto self-center items-center ">
            <img src="room.png" />
          </div>
          <div className="w-fit ml-auto self-end">
            <img src="rocket.png" />
          </div>
        </div>
        <h1 className="text-5xl kumar-one-regular z-20 text-center mt-20 max-sm:text-3xl max-sm:mt-10">
          GAMERS CLIQUE{" "}
        </h1>
        <section className="flex  mt-16 max-sm:mt-8 justify-center gap-x-[20%] items-start px-20 max-lg:flex-col max-2xl:px-0 max-2xl:gap-x-0 max-2xl:justify-between max-sm:gap-y-8">
          <article className="space-y-3 basis-[40%] text-xl z-10 max-sm:text-base">
            <p>
              Our community offers more than just a place to play games. You can
              connect with other gamers, share your passion, and grow; with
              variety of tournaments and playtests, there's always something new
              to experience.
            </p>
            <p>
              Are you a competitive gamer looking to test your skills? Join
              tournaments, game nights, and playtest web3 games with us and
              compete against the best players in our community. Show off your
              gaming prowess and get rewarded.
            </p>
          </article>
          <article className="basis-[30%] max-2xl:basis-[40%] z-10">
            <LoopingVideo />
            <a href="https://forms.gle/5VM4QVpZtmZcGQEh9" target="_blank">
              <div className="bg-primaryCol px-6 py-1.5 max-sm:mt-8 cursor-pointer flex gap-x-3 rounded-full text-base  mt-5 justify-center items-center">
                <p>Join our community</p>
                <img src="/arrow-up.png" />
              </div>
            </a>
          </article>
        </section>
      </section>

      <h1 className="text-4xl syne-regular text-center tracking-widest mt-24 mb-20 max-sm:mb-10 max-sm:mt-12 max-sm:text-xl max-lg:text-2xl">
        OUR RECENT PLAYTESTS & GAME NIGHTS
      </h1>

      <div className="flex flex-wrap justify-center px-24 gap-14 max-lg:px-0 max-sm:gap-7">
        {cardData.map((data, index) => {
          return (
            <Card
              key={index}
              image={data.image}
              title={data.title}
              type={data.type}
              device={data.device}
              link={data.link}
            />
          );
        })}
      </div>
      <Creators />
    </div>
  );
};

export default GamerClique;
