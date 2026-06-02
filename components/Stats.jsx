"use client";

import CountUp from 'react-countup';

const stats = [
    {
        num: 6,
        text: "Years of Experience",
    },
    {
        num: 10,
        text: "Projects Shipped",
    },
    {
        num: 15,
        text: "Technologies Used",
    },
    {
        num: 2,
        text: "Cloud Certifications",
    },
]

const Stats = () => {
    return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((stat, index) => {
                    return <div key={index} className="flex flex-1 items-center justify-center gap-4 xl:justify-start">
                        <CountUp end={stat.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                        <span className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white`}>{stat.text}</span>
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default Stats