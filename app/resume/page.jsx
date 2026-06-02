"use client";

import { FaAws, FaPython } from 'react-icons/fa';
import {
    SiGo,
    SiPostgresql,
    SiDocker,
    SiKubernetes,
    SiRedis,
    SiMongodb,
    SiGraphql,
    SiGooglecloud,
    SiRust,
    SiJenkins,
} from 'react-icons/si';

// about me
const about = {
    title: "About Me",
    description: "Senior Backend Developer with 6+ years of proven expertise in Golang, microservices architecture, and cloud-native infrastructure. Specialized in agentic AI development — designing, building, and deploying intelligent agents for autonomous operations. Strong background in performance optimization, distributed systems design, and scalable data pipelines.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Le Thanh Giang",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+84) 964 582 803",
        },
        {
            fieldName: "Experience",
            fieldValue: "6+ Years",
        },
        {
            fieldName: "GitHub",
            fieldValue: "gianglt2198",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Vietnam",
        },
        {
            fieldName: "Email",
            fieldValue: "giangle2198@gmail.com",
        },
        {
            fieldName: "Location",
            fieldValue: "Ho Chi Minh City",
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
    description: "Six years building and scaling production backend systems — from core banking and crypto market intelligence to AI-powered SaaS platforms.",
    items: [
        {
            company: "TechX Vietnam",
            position: "Back End Developer",
            duration: "10/2024 - Present",
            description: "FlowX & Easier — AI Sales Intelligence & Multi-Platform Ads. Built distributed crawling pipelines (50K+ profiles), optimized ClickHouse analytics (<2s p99), and integrated Generative AI for lead scoring. Stack: Golang, GraphQL, NATS JetStream, PostgreSQL, ClickHouse, AWS EKS.",
        },
        {
            company: "Treehouse Labs",
            position: "Backend Developer",
            duration: "04/2022 - 10/2024",
            description: "Hyperion & Pulse TRHX — Cryptocurrency market intelligence. Designed microservices processing real-time blockchain/DeFi data, cut ingestion latency 60%, and deployed on K8s/GCP with 99.95% uptime. Stack: Golang, Kubernetes, GCP, Kafka/Pulsar, MongoDB, Vault.",
        },
        {
            company: "Orient Commercial Joint Stock Bank (OCB)",
            position: "Developer",
            duration: "07/2020 - 04/2022",
            description: "Card Core TECH — Card management, alerts, and operations. Built secure authentication/authorization, RESTful APIs, and caching that cut database load 30%. Stack: Golang, React, Jenkins, Docker, Kubernetes, LDAP.",
        },
    ]
}

// education
const education = {
    icon: '',
    title: "My Education",
    description: "Bachelor's degree in Computer Science from the University of Information Technology (UIT), Ho Chi Minh City, Vietnam, complemented by industry cloud-native certifications.",
    items: [
        {
            institution: "University of Information Technology (UIT)",
            degree: "Bachelor's Degree in Computer Science",
            duration: "2016 - 2020",
        },
        {
            institution: "HashiCorp (Udemy)",
            degree: "Terraform Associate 003",
            duration: "2025",
        },
        {
            institution: "KodeKloud",
            degree: "KCNA — Kubernetes & Cloud Native Associate",
            duration: "2023",
        },
    ]
}

// skills
const skills = {
    title: "My Skills",
    description: "A backend-focused toolkit spanning languages, data stores, and cloud-native infrastructure built up over six years of production engineering.",
    items: [
        {
            icon: <SiGo />,
            name: "Golang",
        },
        {
            icon: <SiRust />,
            name: "Rust",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <SiGraphql />,
            name: "GraphQL",
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiRedis />,
            name: "Redis",
        },
        {
            icon: <SiDocker />,
            name: "Docker",
        },
        {
            icon: <SiKubernetes />,
            name: "Kubernetes",
        },
        {
            icon: <FaAws />,
            name: "AWS",
        },
        {
            icon: <SiGooglecloud />,
            name: "Google Cloud",
        },
        {
            icon: <SiJenkins />,
            name: "Jenkins / CI-CD",
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