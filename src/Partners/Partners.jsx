import React from "react";
import Testimony from "../component/Testimony";
import ShuffleHero from "./component/ShuffleHero";
import Button from "../component/button";
import Infinitescroll from "./component/infinitescroll";
import Team from "./component/team";

const Partners = () => {
  return (
    <div className="text-white">
      <section>
        <div>
          <h1 className="text-5xl kumar-one-regular text-center mt-20 max-sm:text-3xl max-sm:mt-10 ">
            OUR NETWORK OF PARTNERS
          </h1>
          <ShuffleHero />
        </div>
        <div className="flex justify-center">
          <a href="https://calendly.com/thechillsroom/30min" target="_blank">
          <Button text={"Get in touch"} logo={"/arrow-up.png"} />

          </a>
        </div>
      </section>
      <h1 className="text-4xl syne-regular text-center tracking-widest mt-24 mb-20 max-sm:mt-14 max-sm:mb-10 max-sm:text-xl max-lg:text-2xl">
        OTHER PROJECTS WE HAVE COLLABORATED WITH
      </h1>
      <Infinitescroll />
      <Team />
      <Testimony />
    </div>
  );
};

export default Partners;
