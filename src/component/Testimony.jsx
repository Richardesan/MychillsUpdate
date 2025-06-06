import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const Testimony = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 4) % 5)
    );
  };

  const cards = [
    {
      id: 1,
      title: "CHILLED DUDES (PUN INTENDED) THEY ARE ALWAYS INNOVATING.",
      text: `The foundation that’s been laid is impressive, and I’m confident that there are even more exciting features and improvements on the horizon; even as they evolve.
`,
      dp: "/blanket.png",
      author: "BLANKET",
      role: "Partnership Manager",
    },
    {
      id: 2,
      title: "THE CHILLS ROOM IS A  VERY CHILLED COMMUNITY",
      text: `I have Known the group since December of 2023 and I can say they are the chillest set of people in the web3 space.
`,
      dp: "/mafiaboss.png",
      author: "THEMAFIABOSS",
      role: "CM & Marketer,  AP Collective - ARC",
    },
    {
      id: 3,
      title: "THESE GUYS ARE VERY SUPPORTIVE WITH AMAZING MEMBERS.",
      text: `The Chills Room is one of the most supportive communities 
      in the space and members are constantly supporting the 
      latest brands to coming into the market.`,
      dp: "/testimoniladp.png",
      author: "EC",
      role: "CTO, Arcaia",
    },
    {
      id: 4,
      title: "THE CHILL ROOM IS HAS PROVIDED AN INCREDIBLE ATMOSPHERE IN WEB3.",
      text: `Savage has built an incredible atmosphere in the chills room. A place for gamers and degens that have an open mind and are always looking to try help each other grow.`,
      dp: "/attis.png",
      author: "ATTIS",
      role: "Strategist, Solana Games Ambassador Program",
    },
    {
      id: 5,
      title: "A VERY SUPPORTIVE COMMUNITY WITH ACTIVE MEMBERS.",
      text: `Chills room and Savage has been supported from starting and its one of the best gaming community.
`,
      dp: "/testimoniladp.png",
      author: "PIRZADA",
      role: "NFT Strategist, Seedify Fund",
    },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 4 },
    left: { x: "-90%", scale: 0.5, zIndex: 3 },
    right: { x: "90%", scale: 0.5, zIndex: 2 },
    right1: { x: "50%", scale: 0.7, zIndex: 4 },
  };

  return (
    <div className="flex items-center flex-col justify-center relative  py-28 max-sm:py-16 overflow-hidden text-white">
      <h1 className="syne-regular text-4xl  text-white text-center max-sm:text-xl">
        WHAT PEOPLE ARE SAYING ABOUT US
      </h1>

      {cards.map((card, index) => {
        const positionKey = positions[positionIndexes[index]];
        const variant = imageVariants[positionKey];

        return (
          <motion.div
            key={card.id}
            className={`absolute rounded-xl max-md:w-fit h-[unset] max-sm:px-4 max-sm:py-2  px-12 py-7 w-[685px] height-[400px] text-xl font-semibold shadow-lg ${card.bg} rounded-[16px] border-[2px] border-[rgba(101,175,186,0.16)] backdrop-blur-[10px] bg-[linear-gradient(106deg,rgba(101,175,186,0.2)_0%,rgba(101,175,186,0)_104.9%)] shadow-[inset_1px_1px_4px_rgba(255,255,255,0.16),inset_-1px_-1px_4px_rgba(0,243,156,0.2),inset_8px_8px_16px_rgba(0,243,156,0.08),16px_16px_10px_rgba(8,15,52,0.16)] `}
            initial="center"
            animate={positionKey}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
       
              zIndex: variant.zIndex,
            }}
          >
            <div className="flex flex-col justify-end items-start relative h-full gap-y-5 ">
              <img src="/quote.png" className="max-sm:w-14 object-contain" />
              <p className="text-2xl font-bold text-[#65AFBA] max-sm:text-base">{card.title}</p>
              <p className="text-lg text-[#65AFBA] max-sm:text-sm">{card.text}</p>
              <section className="flex justify-between w-full">
                <div className="flex gap-x-5 items-center text-[#65AFBA] text-xl max-sm:text-sm max-sm:gap-x-2">
                  <img src={card.dp} alt={card.dp} className="w-12 max-sm:w-9 object-cover" />
                  <div className="">
                    <p className="font-bold text-base max-sm:text-sm">{card.author}</p>
                    <p className="font-normal text-sm max-sm:text-xs">{card.role}</p>
                  </div>
                </div>
                <img src="/quote.png" className="rotate-180 max-sm:w-14 object-contain" />
              </section>
            </div>
          </motion.div>
        );
      })}

      <div className="flex gap-4 mt-[33rem] max-sm:mt-[25rem]  z-10">
        <button
          onClick={handleBack}
          className="bg-[#1c393d] text-white px-4 py-2 rounded hover:scale-110 active:scale-95 transition-all duration-150 active:bg-primaryCol"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#1c393d] text-white px-4 py-2 rounded rotate-180 hover:scale-110 active:scale-95 transition-all duration-150 active:bg-primaryCol"
        >
          <FaArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default Testimony;
