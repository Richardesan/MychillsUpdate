import React from "react";
import { FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsBookmarkStarFill } from "react-icons/bs";


const Footer = () => {
  const socials = [
 
    {
      name: "Community Account",
      icon: <FaXTwitter />,
      link: "https://x.com/thechillsroom?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    },
       {
      name: "Gamer's Clique",
      icon: <FaXTwitter />,
      link: "https://x.com/tcr_gg?s=21&t=qqnxSPxnKqrZQrtmX_cuEw",
    },
       {
      name: "Substack",
      icon: <BsBookmarkStarFill />,
      link: "https://substack.com/@thechillsroomfiles",
    }
  ];
  return (
    <footer className="w-full text-white py-10 ">
      <div className="flex justify-between items-center w-full max-md:flex-col space-y-2">
        <section className="flex items-center font-bold ">
          <div className="w-[72px] h-[72px]">
            <img src="/chilroomLogo.svg" />
          </div>
          <p className="text-white text-xl max-sm:text-base font-bold dm-sans-semibold ">
            The Chills Room
          </p>
        </section>
        <div className="flex justify-center items-center gap-x-4 max-sm:flex-col max-sm:space-y-3">
          {socials.map((data, index) => {
            return (
              <a key={index} href={`${data.link}` } target="_blank" className="z-20 hover:scale-105 transition-all duration-100">
                <div
                  className="flex items-end gap-1 justify-center group cursor-pointer duration-300"
                  id="contactme"
                >
                  <p className="text-2xl text-gray-400 group-hover:text-primaryCol duration-300 cursor-pointer ">
                    {data.icon}
                  </p>
                  <p className="text-gray-400 text-sm font-bold group-hover:text-gray-200 duration-300 capitalize">
                    {data.name}
                  </p>
                </div>
              </a>
            );
          })}
        </div>{" "}
        {/* <section className="flex gap-x-4">
          {socialData.map((data, index) => {
            return (
              <article
                key={index}
                className="gap-x-2 flex cursor-pointer  items-center"
              >
                <img src={data.logo} />
                <p className="text-lg  text-white/30 hover:text-white transition-all duration-100 hover:scale-105 ">
                  {data.text}
                </p>
              </article>
            );
          })}
        </section> */}
      </div>
      <p className="text-center text-base mt-5">
        Copyright © The Chills Room 2024. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
