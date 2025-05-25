import React from "react";
import Card from "./card";

const CoreValues = () => {
  return (
    <div className="text-white pb-28  relative ">
      <div className="absolute left-0 top-0 w-full h-full  z-20 opacity-20 flex items-center   overflow-hidden"></div>

      <section className="flex items-start gap-x-20 max-2xl:gap-x-10 max-lg:flex-col max-lg:gap-y-10">
        <Card
          heading={"Our Mission"}
          paratext={`Our mission is to empower a global community of creators, gamers, and crypto enthusiasts by providing a platform for connection, innovation, and growth in Web3. We aim to foster creativity and collaboration, support decentralized technologies, and build a community that shapes the future of Web3.`}
        />
        <Card
          heading={"Our Vision"}
          paratext={`Our vision is to lead where creation, gaming, and tech innovations converge to shape web3. We are creating a community where everyone can freely express themselves, create, collaborate, and thrive in the space. By nurturing an inclusive community, we aim to empower members to drive evolution in every niche of web3.`}
        />
      </section>

      <h1 className="syne-regular tracking-[8px] text-4xl mt-32 mb-12 max-sm:my-16 text-center max-sm:text-3xl">
        CORE VALUES
      </h1>
      <section className="flex items-start gap-x-20 max-2xl:gap-x-10 max-lg:flex-col max-lg:gap-y-10">
        <Card
          heading={"Inclusivity"}
          paratext={`We embrace every voice, perspective, experience, and background; ensuring that we 
          are not just adapting to the changes in web3 and the blockchain; we are actively shaping them impactfully.`}
          logo={"/token_idea.png"}
        />
        <Card
          heading={"Collaboration"}
          paratext={`We believe that the greatest innovations and solutions come from working together, pooling ideas and talents, sharing knowledge, and leveraging the diverse strengths of our members.`}
          logo={"/carbon_collaborate.png"}
        />
      </section>
      <section className="flex items-start gap-x-20 max-2xl:gap-x-10 max-lg:flex-col max-lg:gap-y-10 mt-14">
        <Card
          heading={"Innovation"}
          paratext={`Innovation is the driving force behind our community. We embrace new ideas, technologies and creative problem-solving, knowing that the future belongs to those who think and act differently.`}
          logo={"/hugeicons_ai-innovation-03.png"}
        />
        <Card
          heading={"Creativity"}
          paratext={`Our community is a haven for those who dare to think outside the box, and express themselves uniquely. Regardless of the niche, we encourage you the full extent of your imagination.`}
          logo={"/streamline_collaborations-idea.png"}
        />
      </section>
    </div>
  );
};

export default CoreValues;
