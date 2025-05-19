import React from "react";
import Navbar from "../component/Navbar";
import Hero from "./component/Hero";
import Mission from "./component/mission";
import CoreValues from "./component/coreValues";
import Team from "./component/team";
import Testimony from "../component/Testimony";
import Faq from "./component/Faq";

const Home = () => {
  return (
    <div>
      <div className="px-32 max-2xl:px-0">
        <Hero />
        <Mission />
        <CoreValues />
        <Team />
        <Testimony />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
