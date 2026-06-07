"use client";

import CountUp from 'react-countup';

const stats = [
    { num: 6, suffix: "+", text: "Years of Experience" },
    { num: 10, suffix: "+", text: "Projects Shipped" },
    { num: 15, suffix: "+", text: "Technologies" },
    { num: 2, suffix: "", text: "Cloud Certifications" },
];

const Stats = () => {
    return (
        <section className="py-8 xl:py-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 xl:grid-cols-4 border border-zinc-800 divide-x divide-y xl:divide-y-0 divide-zinc-800">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-1 p-6 xl:p-8">
                            <div className="flex items-baseline gap-0.5">
                                <CountUp
                                    end={stat.num}
                                    duration={4}
                                    delay={1.5}
                                    className="text-3xl xl:text-4xl font-semibold font-mono tabular-nums"
                                />
                                <span className="text-accent text-xl font-mono">{stat.suffix}</span>
                            </div>
                            <span className="text-zinc-500 text-xs tracking-wide uppercase">{stat.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
