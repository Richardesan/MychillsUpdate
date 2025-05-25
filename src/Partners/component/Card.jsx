import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ images }) => {
  const [showOverlay, setShowOverLay] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setShowOverLay(true)}
      onMouseLeave={() => setShowOverLay(false)}
      className="relative h-[200px] min-w-[200px]  rounded-xl flex justify-center items-center  "
    >
      <AnimatePresence>
        <img src={images} className="w-full h-full object-contain"/>
        {/* {showOverlay && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="absolute inset-0 z-10 flex justify-center items-center"
          >
             <div className="absolute bg-black opacity-50 h-full w-full pointer-events-none" /> 
          
          </motion.div>
        )} */}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
