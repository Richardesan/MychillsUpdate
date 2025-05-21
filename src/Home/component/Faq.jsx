import React, { useState } from "react";

const faqData = [
  {
    question: "What is The Chills Room about?",
    answer:
      "The Chills Room is a member-driven community with a strong focus on education and personal growth. Our members come from various sectors within the Web3 space, with an emphasis on NFTs, Web3 gaming, and other niche. Our mission is to expand the awareness of these emerging fields within our geographical region while enhancing the financial success of our members by helping them turn their skills into profitable ventures.",
  },
  {
    question: "⁠How to become a member of the community?",
    answer: `Joining our community is by invite only. Look out for the application link on the Admin account on X; apply, and if you are accepted, you will get 
      an invite link from Abefe or Sanmi only.`,
  },
  {
    question: "What benefits do I get from being part of this community?",
    answer: `Being a member of The Chills Room gives you access to a spectrum of benefits 
    designed to help you grow, create, and connect. You'll have the opportunity to network with
     like-minded creators, gamers, and Web3 enthusiasts, collaborate on innovative projects. Also, members enjoy exclusive access to resources, educational content, and events such as workshops, NFT whitelists, and other exclusive partner communities. Being part of our community also means you're contributing to and shaping the future of web3 in a supportive, inclusive environment.`,
  },
  {
    question: "How to Partner/Collaborate with Us?",
    answer: `
    We welcome partnerships and collaborations with project founders, community leaders, and collaboration managers who are interested in working with The Chills Room. To initiate a discussion, please reach out via mail, or directly message our community page or the Founder’s X account.`,
  },
  {
    question: "⁠How to join our Gamers & Content Creator Clique?",
    answer: `Currently, the only way to become a part of our Gamers Clique is by applying “here(link)”. Upon submission, candidates will undergo a one-on-one interview with both the Gamers Captain and 
    Content Head before receiving the role.`,
  },

];
const radialStyle = {
  borderRadius: "344.642px",
  filter: "blur(92.249px)",
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="text-white pb-14 relative ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mr-4 z-0 w-[65rem] max-sm:w-[35rem] ">
        <img src="/logo.png" className="opacity-30  w-full" />
      </div>
      <div>
        <p className="uppercase text-5xl text-center dm-sans-semibold max-sm:text-3xl">
          faq
        </p>
        <p className="m-5 text-center text-2xl dm-sans-regular mb-14 max-sm:text-xl">
          Got Questions? We’ve got answers
        </p>
      </div>

      <div className="pb-10 space-y-6">
        {faqData.map((item, index) => (
          <section
            key={index}
            className="bg-[#0D0E14] border-[#65AFBA] border rounded-2xl overflow-hidden transition-all duration-300 relative"
          >
            <div
              style={radialStyle}
              className="w-[21rem] h-[21rem] absolute bg-[#354A83] z-0 right-10 -top-40"
            ></div>
            <div
              className="flex justify-between items-center gap-x-2 py-6 px-12 max-sm:px-6 max-sm:py-3 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h1
                className={`text-2xl syne-regular   max-sm:text-base rotate-0`}
              >
                {item.question}
              </h1>
              <img
                src={"/xmark.png"}
                alt="toggle"
                className={`${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } transition-all duration-100 max-sm:w-8`}
              />
            </div>

            <div
              className={`transition-all duration-150  px-12 ${
                openIndex === index ? "max-h-[500px] py-4" : "max-h-0"
              } overflow-hidden max-sm:px-7`}
            >
              <p className="text-xl rotate-0 max-sm:text-sm">{item.answer}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Faq;
