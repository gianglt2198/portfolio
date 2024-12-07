"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.4, ease: "easeInOut" }}
            >
                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="left-[13px] w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]
                mix-blend-lighten absolute xl:left-[25px]" >
                        <Image
                            src="/assets/avatar.png"
                            alt="Giang Le"
                            priority
                            quality={100}
                            fill
                            className="object-contain"
                        />
                    </div>
                </motion.div>

                {/* Circle */}
                <motion.svg
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[325px] h-[325px] xl:w-[540px] xl:h-[540px]">
                    <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWith="4"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo