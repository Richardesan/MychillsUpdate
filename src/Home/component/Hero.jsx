import React from "react";
import Button from "../../component/button";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../utils/route";


const Hero = () => {
  const heroText = `The Chills Room is an inclusive and engaging community where everyone can contribute, collaborate, and grow. We capitalize on our connections, experience and result-driven team to keep providing endless possibilities. As we have mastered the art of evolving, there are endless possibilities in our community. Join our vibrant community of creators, gamers, and crypto enthusiasts.`;
  return (
    <div className="relative text-white h-screen  mt-24">
      {/* <div className="absolute left-1/2 -top-1/2 -translate-x-1/2 translate-y-44 mt-28 mr-4 z-0 w-[53rem] max-sm:w-[45rem] max-lg:translate-y-60 m">
        <img src="/logo.png" className="opacity-30  w-full" />
      </div> */}

      <p className="tracking-[5px] text-2xl text-center relative  syne-regular">
        THE CHILLS ROOM
      </p>

      <p className="text-8xl mx-auto text-center  leading-[120px] mt-14 kumar-one-regular relative  max-lg:text-6xl max-sm:text-4xl">
        Empowering the future of web3
      </p>

      <p className="text-xl max-sm:text-xl leading-9 text-center relative dm-sans-regular mt-9">
        {heroText}
      </p>
      <section>
        <div className="flex justify-center items-center gap-x-7 mt-6 max-sm:flex-col max-sm:gap-y-4">
          <Link to={AppRoutes.about} className="max-sm:w-full w-fit">
          <Button text={"Learn more"} />
          
          </Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSesKDdcJTC0KLT3FAHDc9zUWNXE-9oXzFmtWgH11jElgKt0WQ/viewform" target="_blank" className="max-sm:w-full w-fit">
            <div className="border-white border-2 flex items-center justify-center max-sm:w-full gap-x-3 py-1 px-10 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100">
              <p className="PX-10">Join us</p>
              <div className="">
                <img src="/arrow-up.png" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
