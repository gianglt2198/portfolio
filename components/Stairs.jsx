import { motion } from "framer-motion";

const startAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

const reversedIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;

}

const Stairs = () => {
    return (
        <>
            {/* 
            render 6 motion.div, each representing a step of the stairs

            Each div will have the same animation defined in the startAnimation object.
            The delay for each dive is calculated sinamically based on it's reversed index.
            creating a staggered effect with desceasing deploy for each subsequent step.
            */}
            {[...Array(6)].map((_, index) => {
                return <motion.div
                    key={index}
                    variants={startAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        delay: reversedIndex(index) * 0.1
                    }}
                    className="w-full h-full bg-white relative" />
            })}
        </>
    )
}

export default Stairs