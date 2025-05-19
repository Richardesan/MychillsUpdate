import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const teamMembers = [

  {
    name: "RAIDEN",
    image: "/RAIDEN.png",
    role: "Founder",
    text: `A creative visionary with a multifaceted skill set spanning photography, cinematography, and UI/UX design. As the founder, he is deeply engaged in Web3 and is dedicated to educating and fostering innovation.`,
  },
  {
    name: "APIX",
    image: "/APIX.png",
    role: "Co-Founder",
    text: `A graphics designer and avid crypto trader. Focused on community building and management.`,
  },
  {
    name: "SANDBOX",
    image: "/SANDBOX.png",
    role: "Co-Founder & Admin",
    text: `A creative at heart; a UI/UX designer, Space host and content creator; with an extensive experience in community development and management. An Avid explorer of the blockchain. If he’s not creating then he’s playing games.`,
  },

  {
    name: "GASPODE",
    image: "/GASPODE.png",
    role: "Gamers Clique Captain",
    text: `A versatile creative, excelling as a SketchUp artist, painter, and writer. With a growing presence in the web3 community for nearly three years. Currently leads the gaming guild, exploring the intersection of art and Web3 gaming.`,
  },
  {
    name: "GEORGE",
    image: "/GEORGE.png",
    role: "Discord Manager",
    text: `A petroleum engineer with a knack for data analysis and community management. As a skilled data analyst and community manager, I bring a unique blend of technical expertise and interpersonal skills to the table.`,
  },
  {
    name: "GAMESHUB",
    image: "/GAMESHUB.png",
    role: `Head Moderator`,
    text: `Web3 explorer, with multifaceted talent (3D artist, gamer, interior designer, and Alpha parrot). Passionate about building vibrant communities and pushing innovation boundaries`,
  },
];



const positions = [
  "left-[17.5rem] top-0",
  "left-1/2 -translate-x-1/2 mt-32",
  "right-[17.5rem] top-0",
  "right-[16.5rem] bottom-0 mb-20",
  "left-1/2 -translate-x-1/2 bottom-0",
  "left-[16.5rem] bottom-0 mb-20",
];


const Team = () => {
  const btnStyle =
    "hover:scale-105 active:scale-95 transition-all duration-100 uppercase px-4 py-2 rounded-full";

  return (
    <div className="text-white relative mt-20">
    
      <div className="dm-sans-regular text-xl   p-3 flex items-center justify-center gap-x-2 rounded-full border border-white/40 w-fit mx-auto">
        <button
          className={`${btnStyle} bg-white text-black `}
        >
          OUR AMBASSADORS
        </button>
       
      </div>

      <div className="mt-5">
         <div className="h-[90vh] relative hidden 2xl:block">
  {teamMembers.map((member, index) => (
    <div
      key={member.name}
      className={`absolute cursor-pointer transition-all hover:scale-105 ${positions[index]}`}
      onClick={() => setSelectedMember(member)}
    >
      <div className="max-w-56 max-2xl:w-52 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72">
        <img
          src={member.image}
          alt={member.name}
          className="w-full rounded-md"
        />
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-center syne-regular my-2 sm:my-4">
        {member.name}
      </h2>
    </div>
  ))}
</div>

{/* Fallback stacked version for mobile */}
<div className="2xl:hidden flex flex-wrap justify-center gap-8 mt-8">
  {teamMembers.map((member) => (
    <div
      key={member.name}
      className="w-[140px] sm:w-[160px] md:w-[180px] cursor-pointer text-center"
      onClick={() => setSelectedMember(member)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full rounded-md hover:scale-105 transition-all"
      />
      <h2 className="text-base sm:text-lg md:text-xl mt-2 syne-regular">
        {member.name}
      </h2>
    </div>
  ))}
</div>

      </div>


    </div>
  );
};

export default Team;
