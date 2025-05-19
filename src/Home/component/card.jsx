import React from 'react'

const Card = ({heading, paratext, logo}) => {
      const radialStyle = {
    borderRadius: "344.642px",
    filter: "blur(92.249px)",
  };
  return (
    <section  className={`text-white py-12 px-10 max-sm:px-5  border-primaryCol border rounded-2xl bg-[#202334] relative overflow-hidden ${logo ? "pr-60 max-lg:pr-28 max-sm:pr-5" : "pr-32 max-lg:pr-16 max-sm:pr-5"}`}>
        <p className='syne-regular text-4xl'>{heading}</p>
        <p className='dm-sans-regular text-base mt-9'>{paratext}</p>
         <div
        style={radialStyle}
        className="w-[21rem] h-[21rem] absolute bg-[#354A83] z-0 -right-40 -top-40"
      ></div>
      <div className='absolute right-0 bottom-0 max-lg:w-28 max-sm:w-14'>
<img src={logo} />
      </div>
    </section>
  )
}

export default Card