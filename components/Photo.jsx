"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[260px] h-[260px] xl:w-[440px] xl:h-[440px]">
      {/* Precision corner accents */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-7 h-px bg-accent" />
        <div className="absolute top-0 left-0 w-px h-7 bg-accent" />
        <div className="absolute top-0 right-0 w-7 h-px bg-accent" />
        <div className="absolute top-0 right-0 w-px h-7 bg-accent" />
        <div className="absolute bottom-0 left-0 w-7 h-px bg-accent" />
        <div className="absolute bottom-0 left-0 w-px h-7 bg-accent" />
        <div className="absolute bottom-0 right-0 w-7 h-px bg-accent" />
        <div className="absolute bottom-0 right-0 w-px h-7 bg-accent" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        <Image
          src="/assets/penguin_avatar.png"
          alt="Giang Le"
          priority
          quality={100}
          fill
          className="object-contain mix-blend-lighten"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
