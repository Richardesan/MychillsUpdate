import React from "react";

const CreatorsCard = ({ text, link }) => {
  return (
    <div
      className="rounded-2xl px-6 py-4 w-[396px] "
      style={{
        background:
          "linear-gradient(106deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.32) 104.9%)",
      }}
    >
      <p>{text}</p>
      <div className="inline-flex gap-x-3 cursor-pointer py-1 px-4 items-center border border-white rounded-full mt-6">
        <p className="text-lg font-medium max-sm:text-base">
          <a href={link} target="_blank">Read more</a>
        </p>
        <img src="/arrow-up.png" className="w-9 h-9 object-cover" />
      </div>
    </div>
  );
};

export default CreatorsCard;
