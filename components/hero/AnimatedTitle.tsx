"use client";

import { motion } from "framer-motion";

export default function AnimatedTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="space-y-2"
    >
      <h1
        className="
          text-5xl
          font-black
          tracking-tight
          leading-none
          text-white
          sm:text-6xl
          lg:text-8xl
        "
      >
        Sébastien
      </h1>

      <h1
        className="
          text-5xl
          font-black
          tracking-tight
          leading-none
          text-white
          sm:text-6xl
          lg:text-8xl
        "
      >
        Lubin
      </h1>
    </motion.div>
  );
}