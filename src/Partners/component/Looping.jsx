import { motion } from "framer-motion";

const LoopingBalls = () => {
  const balls = Array.from({ length: 5 });

  return (
    <div className="relative w-full h-40 overflow-hidden bg-gray-100">
      {balls.map((_, index) => (
        <motion.div
          key={index}
          className="w-8 h-8 bg-indigo-500 rounded-full absolute"
          style={{
            top: `${10 + index * 20}px`, // spacing out each ball vertically
          }}
          animate={{ x: ['-50px', '100vw'] }}
          transition={{
            duration: 6 + index, // slightly different duration for variation
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            delay: index * 0.5, // stagger start time
          }}
        />
      ))}
    </div>
  );
};

export default LoopingBalls;
