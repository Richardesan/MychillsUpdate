import React, { useEffect, useState } from "react";
import Card from "./Card";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

const Infinitescroll = () => {
  const images = [
    "Game.png",
    "overworld.png",
    "gomble.png",
    "everreach.png",
    "palio.png",
    "ember.png",
    "dino.png",
    "wallet.png",
    "monsters.png",
    "taproot.png",
    "tactics.png",
    "chameleon.png",
    "aofverse.png",
    "farcaana.png",
    "revolving.png",
    "qbx.png",
    "tinfun.png",
    "animalia.png",
    "kor.png",
    "particleik.png"

  ];
  const FAST_DURATION = 35;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (!width) return;
    let controls;
    const finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [width, xTranslation, duration, rerender]);

  return (
    <main className="py-8  text-white relative overflow-hidden h-[250px]">
      <motion.div
        className="absolute left-0 flex gap-4"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((data, index) => (
          <Card images={data} key={index} />
        ))}
      </motion.div>
    </main>
  );
};

export default Infinitescroll;
