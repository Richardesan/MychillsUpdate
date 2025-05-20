import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dayo",
    image: "/dayo1.png",
    role: "Head of Content",
    link: "https://x.com/dayothev1?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: "Dayo is a content creator with good content and wide varieties of approach to arts and writing; also a good space host, collab manager and gamer.",
  },

  {
    name: "TEEBEE",
    image: "/teebe.png",
    role: "Co-Founder",
    link: "https://x.com/oyetolaoluwato5?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `A graphics designer and avid crypto trader. Focused on community building and management.`,
  },
  {
    name: "ABEFE",
    image: "/abefe1.png",
    role: "Founder",
    link: "https://x.com/falemiayo?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `A creative visionary with a multifaceted skill set spanning photography, cinematography, and UI/UX design. As the founder, he is deeply engaged in Web3 and is dedicated to educating and fostering innovation.`,
  },
  {
    name: "SANMI",
    image: "/sanmi.png",
    role: "Co-Founder & Admin",
    link: "https://x.com/mastrix_ayo?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `A creative at heart; a UI/UX designer, Space host and content creator; with an extensive experience in community development and management. An Avid explorer of the blockchain. If he’s not creating then he’s playing games.`,
  },
  {
    name: "TRUMAN",
    image: "/truman1.png",
    role: "Co-Founder & Admin",
    link: "https://x.com/niyiofweb3?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: "A content creator and partnership manager with expertise with NFT projects. Passionate about securing collaborations via mutual relationships with key partnership managers in the web 3.",
  },
  {
    name: "METOY",
    image: "/metoy1.png",
    role: "Gamers Clique Captain",
    link: "https://x.com/metoy__?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `A versatile creative, excelling as a SketchUp artist, painter, and writer. With a growing presence in the web3 community for nearly three years. Currently leads the gaming guild, exploring the intersection of art and Web3 gaming.`,
  },
  {
    name: "BIGTEE",
    image: "/bigtee1.png",
    role: "Discord Manager",
    link: "https://x.com/_curioustee?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `A petroleum engineer with a knack for data analysis and community management. As a skilled data analyst and community manager, I bring a unique blend of technical expertise and interpersonal skills to the table.`,
  },
  {
    name: "BABYBOY",
    image: "/babyboy1.png",
    role: `Head Moderator`,
    link: "https://x.com/nft_babyboy?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `Web3 explorer, with multifaceted talent (3D artist, gamer, interior designer, and Alpha parrot). Passionate about building vibrant communities and pushing innovation boundaries`,
  },
];

const supportTeam = [
  {
    name: "IFEOLUWA",
    image: "/ifeoluwa1.png",
    role: "Collab Manager",
    link: "https://x.com/omo_daddybolaji?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: "A collab manager and community manager, content writer and a web3 lover.",
  },
  {
    name: "HEEMA",
    image: "/HEEMA.png",
    role: "Collab Manager",
    link: "https://x.com/toyin_eth?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `  An Ordinals enthusiast and Runes protocol researcher. Passion for graphics design and a wealth of experience in collaboration management and space hosting.  Currently exploring the TON blockchain.`,
  },
  {
    name: "TMAMA",
    image: "/TMAMA.png",
    role: "Collab Manager",
    link: "https://x.com/tee_monera?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `Navigating web3, as a researcher and a moderator. When not writing, you’ll find me sharing cute cat content and ranting about web3 games.`,
  },
  {
    name: "SANCTUS",
    image: "/sanctus1.png",
    role: "Collab Manager",
    link: "https://x.com/da_sanctus?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: `A lover of games and anime. Part of the community’s collab team.`,
  },
  {
    name: "BASEDBRO",
    image: "/basedbro1.png",
    role: "Collab Manager",
    link: "https://x.com/baseddbroo?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    text: "A web3 enthusiast and content  writer with a vast knowledge about the space.",
  },
];

const positions = [
  "left-0 mt-32",
  "left-[15.5rem] top-0",
  "left-1/2 -translate-x-1/2 mt-32",
  "right-[15.5rem] top-0",
  "right-0 mt-32",
  "right-[14.5rem] bottom-0 mb-20",
  "left-1/2 -translate-x-1/2 bottom-0",
  "left-[14.5rem] bottom-0 mb-20",
];

const otherpositions = [
  "top-1/2 -translate-y-1/2 left-0 ",
  "left-[16rem] top-5 ",
  "top-1/2 -translate-y-1/2 right-0 ",
  "right-[16rem] top-5",
  "right-0 bottom-0 right-[16rem]",
  "left-1/2 -translate-x-1/2 bottom-0",
  "left-[16rem] bottom-0 ",
];

const Teame = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(true);
  const myTeam = selectedTeam ? teamMembers : supportTeam;
  const btnStyle =
    "hover:scale-105 active:scale-95 transition-all duration-100 uppercase px-4 py-2 rounded-full";

  return (
    <div className="text-white relative" id="team">
      <h1 className="text-4xl syne-regular text-center tracking-[8px] max-sm:tracking-[4px] max-sm:text-2xl">
        MEET THE TEAM
      </h1>
      <p className="text-center max-sm:text-start text-2xl max-sm:text-base dm-sans-regular px-8 max-sm:px-0 mt-5 mb-10">
        A collection of passionate innovators, creators, and strategists, each
        offering their expertise. With a commitment to expand the landmark of
        Web3 and focus on creating a community where creativity, content
        creation, gaming, and other innovations thrive.{" "}
      </p>
      <div className="dm-sans-regular text-xl  max-sm:text-xs max-sm:p-1 p-3 flex items-center justify-center gap-x-2 rounded-full border border-white/40 w-fit mx-auto">
        <button
          className={`${btnStyle} ${selectedTeam ? "bg-white text-black" : ""}`}
          onClick={() => {
            setSelectedTeam(true);
          }}
        >
          Core team
        </button>
        <button
          className={`${btnStyle} ${
            !selectedTeam ? "bg-white text-black" : ""
          }`}
          onClick={() => {
            setSelectedTeam(false);
          }}
        >
          Support
        </button>
      </div>

      <div className="mt-5">
        <div className="h-[90vh] relative hidden 2xl:block">
          {myTeam.map((member, index) => (
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
          {myTeam.map((member) => (
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

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.1 }}
            style={{
              backgroundImage: 'url("/chillsbg.png")',
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
            }}
            className="fixed top-0 left-0 w-full h-full bg-black z-50"
          >
            <div className="absolute top-0 left-0 h-full w-full -z-10">
              <div className="backdrop-blur-md bg-black/10 absolute left-0 top-0 w-full h-full"></div>
              {myTeam
                .filter((member) => member.name !== selectedMember.name)
                .map((member, index) => (
                  <div
                    key={member.name}
                    className={`absolute cursor-pointer transition-all hover:scale-105 -z-20 max-sm:hidden ${otherpositions[index]}`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-[19rem] h-[19rem] object-cover rounded-full mx-auto"
                    />
                    <p className="mt-4 text-3xl syne-regular text-center">
                      {member.name}
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex flex-col items-center text-white z-50 relative py-5">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-[21rem] h-[21rem] max-sm:w-[16rem] max-sm:h-[16rem] object-cover rounded-full mb-2 border-8 border-white"
              />

              <div className="flex items-center gap-x-2 my-2 justify-center">
                <p className="text-3xl syne-regular text-center max-sm:text-2xl">
                  {selectedMember.name}
                </p>
                <a href={selectedMember.link} target="_blank">
                  <img
                    src="/xicon.png"
                    className="bg-[#354A83] p-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-100 active:scale-95"
                  />
                </a>
              </div>
              <p className="syne-regular text-3xl mb-3 max-sm:text-2xl">
                {selectedMember.role}
              </p>
              <p className="text-xl max-sm:text-base max-sm:px-3 break-words syne-normal max-w-[42rem] text-center mt-5">
                {selectedMember.text}
              </p>
              <button
                className="absolute top-2 right-3 text-5xl font-bold"
                onClick={() => setSelectedMember(null)}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Teame;
