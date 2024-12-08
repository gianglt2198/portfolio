"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about me
const about = {
    title: "About Me",
    description: "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Giang Le",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+84) 123 456 789",
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Years",
        },
        {
            fieldName: "Skype",
            fieldValue: "giangle.dev",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Viet Nam",
        },
        {
            fieldName: "Email",
            fieldValue: "giangle2198@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Vietnamese, English",
        },
    ]
}

// experience
const experience = {
    icon: '',
    title: "My Experience",
    description: "I have worked on a variety of projects including websites, web applications, and more. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies.",
    items: [
        {
            company: "TreehouseLab",
            position: "Full Stack Developer",
            duration: "2018 - Present",
            description: "I have worked on a variety of projects including websites, web applications, and more. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies.",
        },
        {
            company: "Orient Commercial Joint Stock Bank",
            position: "Software Engineer Fresher",
            duration: "2016 - 2018",
            description: "I worked as a front-end developer for a company where I was responsible for creating and maintaining websites and web applications. I worked closely with the design team to implement their designs and ensure that the final product was both beautiful and functional.",
        },
    ]
}

// education
const education = {
    icon: '',
    title: "My Education",
    description: "I have a Bachelor's degree in Computer Science from the University of Science in Ho Chi Minh City, Viet Nam. I graduated in 2016 with a focus on web development and software engineering.",
    items: [
        {
            institution: "University of Science",
            degree: "Bachelor's Degree in Computer Science",
            duration: "2012 - 2016",
        },
    ]
}

// skills
const skills = {
    title: "My Skills",
    description: "I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.",
    items: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
            level: "Expert",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
            level: "Expert",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
            level: "Expert",
        },
        {
            icon: <FaReact />,
            name: "React",
            level: "Expert",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
            level: "Intermediate",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
            level: "Intermediate",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
            level: "Intermediate",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
            level: "Intermediate",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.4, ease: 'easeInOut' }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs
                defaultValue='experience'
                className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* Tabs content */}
                <div className="min-h-[70vh] w-full">
                    {/* Experience */}
                    <TabsContent value="experience"
                        className="w-full"
                    >

                        <div className="flex flex-col gap-[30px] text-center xl:text-left">

                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                            <ScrollArea
                                className="h-[400px]"
                            >
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* Education */}
                    <TabsContent value="education"
                        className="w-full"
                    >
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">

                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                            <ScrollArea
                                className="h-[400px]"
                            >
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* Skills */}
                    <TabsContent value="skills"
                        className="w-full"
                    >
                        <div
                            className="flex flex-col gap-[30px]"
                        >
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                            </div>
                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                {skills.items.map((item, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center'>
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                        {item.icon}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className='capitalize'>{item.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    {/* About */}
                    <TabsContent value="about"
                        className="w-full text-center xl:text-left"
                    >
                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='text-4xl font-bold'>
                                {about.title}
                            </h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                {about.description}
                            </p>
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[680px] mx-auto xl:mx-0'>
                                {about.info.map((item, index) => (
                                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabsContent>
                </div>

            </Tabs>
        </div>
    </motion.div>
}

export default Resume;