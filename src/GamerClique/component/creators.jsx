import React from "react";
import CreatorsCard from "./creatorsCard";

const Creators = () => {
  const btnStyle =`hover:scale-105 active:scale-95 transition-all duration-100 uppercase px-4 py-2 rounded-ful`;
  const creatorCard = [
    {
      text: `GM Web3 Fam, Sanmi here…Today we would be exploring a decentralized platform created for gamers by Confictionlabs (@confictionlabs). @xpsr_ is the alpha for today.`,
      link: `https://x.com/mastrix_ayo/status/1825526314130169953?s=46&t=qqnxSPxnKqrZQrtmX_cuEw`,
    },
    {
      text: `Exploring @cardsahoygame
Written in conjunction with the Gamers-Clique of @TheChillsRoom
Backed by Metalist, CardAhoyGame is an thrilling gameplay with a first....`,
      link: `https://x.com/falemiayo/status/1713881501224333705?s=46&t=qqnxSPxnKqrZQrtmX_cuEw`,
    },
    {
      text: `Bullish on Ai on Avax?! don’t dare miss @AIVAonAVAX 
@ghost93_x as a concrete builder, pushing @AIVAonAVAX you know its definite gonna be awesome.
`,
      link: `https://x.com/falemiayo/status/1912477149451190504?s=46&t=qqnxSPxnKqrZQrtmX_cuEw`,
    },
    {
      text: `“Can I have some privacy, please?”That was the last thing I heard before I fainted. I wasn’t trying to be rude. I was only admiring her encrypted dress . She looked like a walking firewall.`,
      link: `https://x.com/dayothev1/status/1905285355663716748?s=46&t=qqnxSPxnKqrZQrtmX_cuEw`,
    },
    {
      text: `𝐓𝐡𝐞 𝐰𝐞𝐞𝐤𝐞𝐧𝐝 𝐢𝐬 𝐡𝐞𝐫𝐞 𝐈’𝐦 𝐭𝐫𝐲𝐢𝐧𝐠 𝐨𝐮𝐭 𝐚 𝐰𝐞𝐛𝟐 𝐠𝐚𝐦𝐞 ” 𝐖𝐮𝐭𝐡𝐞𝐫𝐢𝐧𝐠 𝐰𝐚𝐯𝐞𝐬“ It’s is an upcoming open-world action RPG developed by Kuro Games with a very rich lore. An expansive world, dynamic...`,
      link: `https://x.com/dayothev1/status/1834876001509081595?s=46&t=qqnxSPxnKqrZQrtmX_cuEw`,
    },
    {
      text: `Hello Web3 Fam, Sanmi here…Web3 games are at the forefront of revolutionizing the ecosystem and today we'd be looking at a free-to-play (F2P) third person shooter game that is about...`,
      link: `https://x.com/mastrix_ayo/status/1792849550173978784?s=46&t=qqnxSPxnKqrZQrtmX_cuEw`,
    },
  ];
  return (
    <div className="my-36 max-sm:my-16 relative z-30">
      <div className="absolute left-0 top-5 w-full h-[70%] -z-50 opacity-20 flex items-center   overflow-hidden">
        <div className="w-[10rem] mr-auto self-start">
          <img src="pencil.png" />
        </div>
        <div className=" mx-auto self-center items-center ">
          <img src="paint.png" />
        </div>
        <div className="w-fit ml-auto self-end">
          <img src="mic.png" />
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-full -z-50 opacity-20 flex items-center   overflow-hidden">
        <div className="w-[10rem] mr-auto self-end">
          <img src="pencil.png" />
        </div>
      </div>
      <h1 className="text-center syne-regular text-4xl">CREATORS</h1>
      <p className="text-center text-3xl my-4">
        Join Us on our amazing Storytelling journey!
      </p>
      <div className="flex justify-between px-32 max-xl:px-0 max-sm:flex-col max-sm:gap-y-7 max-sm:mt-5 mt-14 max-sm:text-center">
        <p className="basis-[40%]">
          Our Content creators are using their platforms to educate and engage
          the audience about Web3, NFTs, Web3 games and every other niche. They
          break down complex concepts, provide tutorials, and explain the
          benefits of these technologies. They also review and recommend NFT
          projects, analyze their value, and warn about scams.
        </p>
        <p className="basis-[40%]">
          They share their experiences playing Web3 games, and discuss
          play-to-earn models. Our Creators foster community engagement, and
          collaborate with other creators to promote Web3 adoption. By
          leveraging their influence, they help to bridge the gap between
          technology and the general public, making Web3 more accessible and
          understandable.
        </p>
      </div>
      <div className="dm-sans-regular text-xl   p-3 flex items-center justify-center gap-x-2 rounded-full border z-40 border-white/40 w-fit mx-auto my-20  max-sm:mb-7">
        <button className={`${btnStyle} bg-white text-black max-sm:text-sm rounded-full`}>
          EXPLORE SOME OF OUR CREATORS{" "}
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-14  z-20">
        {creatorCard.map((data, index) => {
          return <CreatorsCard key={index} text={data.text} link={data.link} />;
        })}
      </div>
    </div>
  );
};

export default Creators;
