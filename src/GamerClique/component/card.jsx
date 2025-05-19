import React from "react";

const Card = ({ image, title, type, device, link }) => {

  return (
   

   
    <div
      className="w-[396px] h-[259px] flex flex-col justify-end p-6 max-sm:w-full "
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-3xl font-semibold max-sm:text-xl">{title}</p>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-x-10 text-lg max-sm:text-sm font-medium">
          <p>{type}</p>
          <p>{device}</p>
        </div>

        <div className="w-fit border border-gray-300 rounded-full p-1.5">
           <a className="w-full" href={link} target="_blank">
          <img src="/xicon.png" />


           </a>
        </div>
      </div>
    </div>
     
  );
};

export default Card;
