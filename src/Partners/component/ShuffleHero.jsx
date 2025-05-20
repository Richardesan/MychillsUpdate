import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="">
      <article className="w-full px-8 max-sm:px-0 py-12 max-sm:py-6 flex max-xl:flex-col justify-between md:grid-cols-2 items-center gap-8 mx-auto text-white">
        <div className="space-y-3 basis-[43%] text-xl max-sm:text-base text-center max-sm:text-start">
          <p className="font-semibold ">
            Our partnerships are the foundation of our thriving community. By
            partnering with leading companies and ventures, we're fostering
            innovation, driving growth, and creating new opportunities for all
            parties.
          </p>
          <p className="">
            Together, we're building a more engaging and inclusive future for
            Web3. Our partners share our commitment to empowering creators,
            gamers, and other creatives. Through our partnerships, we're able to
            leverage each other's strengths and resources to achieve our shared
            goals.
          </p>
          <p className="">
            We're proud to be associated with such amazing companies and
            projects. By partnering with us, you're joining a dynamic and
            innovative community that is shaping the future of Web3.
          </p>
        </div>
        <div className="basis-[35%]">
          <ShuffleGrid />
        </div>
      </article>

      <article className="mx-auto w-[50vw] text-center">
        {/* Optional footer message */}
      </article>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// Reduced to 9 items only
const squareData = [
  { id: 1, src: "/Ellipse.png" },
  { id: 2, src: "/Ellipse2.png" },
  { id: 3, src: "/Ellipse3.png" },
  { id: 4, src: "/Ellipse4.png" },
  { id: 5, src: "/Ellipse5.png" },
  { id: 6, src: "/Ellipse6.png" },
  { id: 7, src: "/Ellipse7.png" },
  { id: 8, src: "/Ellipse8.png" },
  { id: 9, src: "/Ellipse9.png" },
];

const generateSquares = () => {
  return shuffle([...squareData])
    .slice(0, 9)
    .map((sq) => (
      <motion.img
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-[110px] h-[85px] max-md:w-[90px] max-md:h-[70px] object-contain object-center"
        src={sq.src}
      />
    ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[400px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
