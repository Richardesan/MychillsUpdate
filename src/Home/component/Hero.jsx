import React from "react";
import Button from "../../component/button";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../utils/route";

const Hero = () => {
  const heroText = `The Chills Room is an inclusive and engaging community where everyone can contribute, collaborate, and grow. We capitalize on our connections, experience and result-driven team to keep providing endless possibilities. As we have mastered the art of evolving, there are endless possibilities in our community. Join our vibrant community of creators, gamers, and crypto enthusiasts.`;
  return (
    <div className="relative text-white h-screen flex justify-center items-center  max-sm:mt-16 max-sm:mb-20">
      <div className="absolute   w-[53rem] max-sm:w-[35rem] ">
        <img src="/logo.png" className="opacity-30  w-full" />
      </div>
      <div>
        <p className="tracking-[5px] text-2xl text-center relative  syne-regular">
          THE CHILLS ROOM
        </p>

        <p className="text-8xl mx-auto text-center  leading-[120px] mt-14 max-sm:mt-7 kumar-one-regular relative  max-lg:text-6xl max-sm:text-3xl">
          Empowering the future of web3
        </p>

        <p className="text-xl max-sm:text-lg leading-9 text-center  relative dm-sans-regular mt-9 max-sm:mt-4">
          {heroText}
        </p>
        <section className="z-50">
          <div className="flex justify-center  items-center gap-x-7 mt-6 max-sm:flex-col  max-sm:gap-y-4">
            <Link to={AppRoutes.about} className="max-md:w-full z-20">
              <div className=" flex justify-center gap-x-3 items-center hover:scale-105 active:scale-95 transition-all duration-100  rounded-full cursor-pointer  py-3 px-20 bg-primaryCol w-fit max-md:w-full max-sm:py-3 ">
                <p className="text-base dm-sans-semibold max-sm:text-base">
                  Learn more
                </p>
              </div>
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSesKDdcJTC0KLT3FAHDc9zUWNXE-9oXzFmtWgH11jElgKt0WQ/viewform"
              target="_blank"
              className="max-md:w-full z-20"
            >
              <div className="border-white border-2 flex items-center justify-center max-sm:w-full  py-1  px-20  gap-x-4 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100">
                <p className="">Join us</p>
                <div className="">
                  <img src="/arrow-up.png" className="w-9"/>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
