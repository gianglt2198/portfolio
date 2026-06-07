"use client";

import { FaAws, FaPython } from "react-icons/fa";
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
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

// ─── data ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Backend Development",
    description:
      "High-performance APIs and services in Golang and Rust — REST, gRPC, and GraphQL — built for reliability, low latency, and clean, maintainable code.",
    tags: ["Golang", "Rust", "gRPC", "GraphQL"],
  },
  {
    title: "Microservices Architecture",
    description:
      "Event-driven, distributed systems with clear bounded contexts and asynchronous messaging over NATS JetStream and Kafka/Pulsar for independent scaling.",
    tags: ["NATS", "Kafka", "DDD", "Event-Driven"],
  },
  {
    title: "Cloud-Native & DevOps",
    description:
      "Containerized workloads on Kubernetes across AWS and GCP, with CI/CD pipelines, infrastructure as code, and full-stack observability via Prometheus, Grafana, and OpenTelemetry.",
    tags: ["Kubernetes", "AWS", "GCP", "Terraform"],
  },
  {
    title: "Agentic AI",
    description:
      "Designing and deploying intelligent AI agents and generative AI integrations for autonomous operations, automation, and data-driven decision making.",
    tags: ["LLMs", "Agents", "GenAI", "Automation"],
  },
];

const projects = [
  {
    num: "01",
    category: "backend",
    title: "GraphQL Federation in Go",
    description:
      "A GraphQL Federation Gateway in Go that aggregates multiple sub-graphs into a unified API through dynamic schema composition and intelligent query routing, reducing API complexity and improving performance via caching.",
    stack: [
      { name: "Go" },
      { name: "Ent ORM" },
      { name: "PostgreSQL" },
      { name: "NATS" },
      { name: "Redis" },
    ],
    image: "/assets/work/graphql_federation_go.png",
    github: "https://github.com/gianglt2198/graphql-gateway-go",
  },
  {
    num: "02",
    category: "backend",
    title: "Rust Hexagonal Boilerplate",
    description:
      "A production-grade Rust web service boilerplate using Hexagonal Architecture within a Cargo Workspace monorepo, enforcing strict separation between domain logic and infrastructure with production-grade observability built in.",
    stack: [
      { name: "Rust" },
      { name: "Axum" },
      { name: "SeaORM" },
      { name: "NATS" },
      { name: "OpenTelemetry" },
    ],
    image: "/assets/work/rust-boilerplate.png",
    github: "https://github.com/gianglt2198/rust-boilerplate",
  },
  {
    num: "03",
    category: "backend",
    title: "Shopping Microservices",
    description:
      "A microservices e-commerce platform in Go with event-driven architecture, featuring four independent bounded contexts (Customer, Product, Payment, Order) communicating through asynchronous event streams and unified gRPC/REST APIs.",
    stack: [
      { name: "Go" },
      { name: "gRPC" },
      { name: "PostgreSQL" },
      { name: "NATS JetStream" },
      { name: "Docker" },
    ],
    image: "/assets/work/pizz-hub.png",
    github: "https://github.com/gianglt2198/shopping-eds",
  },
  {
    num: "04",
    category: "agentic AI",
    title: "Natural Language to SQL Agent",
    description:
      "A production-structured Python agent that converts natural language questions into SQL queries and returns human-readable answers. Uses a ReAct tool-calling loop with OpenRouter for LLM access and async SQLAlchemy for safe, validated query execution.",
    stack: [
      { name: "Python" },
      { name: "OpenRouter" },
      { name: "SQLAlchemy" },
      { name: "Pydantic" },
      { name: "ReAct" },
    ],
    image: "/assets/work/natural-language-sql-agent.png",
    github: "https://github.com/gianglt2198/natural-language-sql-agent",
  },
  {
    num: "05",
    category: "agentic AI",
    title: "Clothing Recommendation Agent",
    description:
      "A ReAct AI agent built with LangChain and LangGraph that fetches live weather via Tavily web search and recommends clothing accordingly. Runs the full Think → Act → Observe loop powered by an OpenRouter-hosted LLM.",
    stack: [
      { name: "Python" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "OpenRouter" },
      { name: "Tavily" },
    ],
    image: "/assets/work/clothing-recommendation-agent.png",
    github: "https://github.com/gianglt2198/clothing-rcm-agent",
  },
];

const experience = {
  title: "Experience",
  description:
    "Six years building and scaling production backend systems — from core banking and crypto market intelligence to AI-powered SaaS platforms.",
  items: [
    {
      company: "TechX Vietnam",
      position: "Back End Developer",
      duration: "10/2024 - Present",
      description:
        "FlowX & Easier — AI Sales Intelligence & Multi-Platform Ads. Built distributed crawling pipelines (50K+ profiles), optimized ClickHouse analytics (<2s p99), and integrated Generative AI for lead scoring. Stack: Golang, GraphQL, NATS JetStream, PostgreSQL, ClickHouse, AWS EKS.",
    },
    {
      company: "Treehouse Labs",
      position: "Backend Developer",
      duration: "04/2022 - 10/2024",
      description:
        "Hyperion & Pulse TRHX — Cryptocurrency market intelligence. Designed microservices processing real-time blockchain/DeFi data, cut ingestion latency 60%, and deployed on K8s/GCP with 99.95% uptime. Stack: Golang, Kubernetes, GCP, Kafka/Pulsar, MongoDB, Vault.",
    },
    {
      company: "Orient Commercial Joint Stock Bank (OCB)",
      position: "Developer",
      duration: "07/2020 - 04/2022",
      description:
        "Card Core TECH — Card management, alerts, and operations. Built secure authentication/authorization, RESTful APIs, and caching that cut database load 30%. Stack: Golang, React, Jenkins, Docker, Kubernetes, LDAP.",
    },
  ],
};

const education = {
  title: "Education",
  description:
    "Bachelor's degree in Computer Science from the University of Information Technology (UIT), Ho Chi Minh City, Vietnam, complemented by industry cloud-native certifications.",
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
  ],
};

const skills = {
  title: "Skills",
  description:
    "A backend-focused toolkit spanning languages, data stores, and cloud-native infrastructure built up over six years of production engineering.",
  items: [
    { icon: <SiGo />, name: "Golang" },
    { icon: <SiRust />, name: "Rust" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiGooglecloud />, name: "Google Cloud" },
    { icon: <SiJenkins />, name: "Jenkins / CI-CD" },
  ],
};

// ─── page ─────────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
});

const About = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <div className="pb-24">
      {/* ── Bio ─────────────────────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0.1)}
        className="py-16 xl:py-24 border-b border-zinc-800"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-10 xl:gap-20 items-start">
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                About me
              </span>
              <h2 className="text-4xl xl:text-5xl font-semibold tracking-tight text-zinc-50 mt-3 leading-[1.1]">
                Le Thanh
                <br />
                <span className="text-accent">Giang</span>
              </h2>
              <p className="text-zinc-500 text-sm font-mono mt-4">
                Senior Backend Developer
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-zinc-300 leading-relaxed text-base xl:text-lg">
                Senior Backend Developer with 6+ years of proven expertise in
                Golang, microservices architecture, and cloud-native
                infrastructure. Specialized in agentic AI development —
                designing, building, and deploying intelligent AI agents for
                autonomous operations and intelligent automation.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Strong background in performance optimization, distributed
                systems design, and scalable data pipelines. Committed to
                delivering high-impact backend solutions that drive business
                value and technological excellence.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
                {[
                  { label: "Location", value: "Ho Chi Minh City, Vietnam" },
                  { label: "Email", value: "giangle2198@gmail.com" },
                  { label: "GitHub", value: "gianglt2198" },
                  { label: "Languages", value: "Vietnamese, English" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-xs text-zinc-600 uppercase tracking-wider font-mono">
                      {item.label}
                    </span>
                    <span className="text-sm text-zinc-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Services ────────────────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0.15)}
        className="py-16 xl:py-20 border-b border-zinc-800"
      >
        <div className="container mx-auto">
          <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
            What I do
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 mt-3 mb-2">
            Services
          </h2>
          <p className="text-zinc-400 text-sm mb-10 max-w-[480px]">
            Six years turning complex infrastructure problems into reliable
            systems.
          </p>
          <div className="border-t border-zinc-800 divide-y divide-zinc-800">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.07 + 0.2,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group grid grid-cols-1 xl:grid-cols-[2fr_3fr] gap-4 xl:gap-16 py-8 xl:py-10 cursor-default"
              >
                <h3 className="text-xl xl:text-2xl font-medium text-zinc-200 group-hover:text-accent transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Projects ────────────────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0.2)}
        className="py-16 xl:py-20 border-b border-zinc-800"
      >
        <div className="container mx-auto">
          <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
            Selected work
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 mt-3 mb-10">
            Projects
          </h2>
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/* Project info */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-5 h-[50%]">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500">
                    {project.num}
                  </span>
                  <span className="w-px h-3 bg-zinc-700" />
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-[32px] xl:text-[38px] font-semibold leading-tight tracking-tight text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-sm"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <div className="border-t border-zinc-800 w-full" />
                <div className="flex items-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[52px] h-[52px] border border-zinc-800 rounded flex justify-center items-center group hover:border-zinc-600 transition-colors">
                          <BsGithub className="text-zinc-400 text-xl group-hover:text-accent transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">View on GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>

            {/* Swiper */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={(swiper) =>
                  setProject(projects[swiper.activeIndex])
                }
              >
                {projects.map((p, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative group flex justify-center items-center xl:h-[520px]">
                      <div className="aspect-square h-full w-full relative flex justify-center items-center bg-zinc-900">
                        <div className="absolute inset-0 bg-black/5 z-10" />
                        <div className="relative w-full h-full">
                          <Image
                            src={p.image}
                            fill
                            sizes="(max-width: 1200px) 100vw, 50vw"
                            className="object-fill"
                            alt={p.title}
                          />
                        </div>
                      </div>
                      <WorkSlideBtns
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max"
                        btnStyles="bg-accent-btn hover:bg-accent-btn-hover text-white text-[18px] w-[40px] h-[40px] flex justify-center items-center transition-colors rounded-sm"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Resume ──────────────────────────────────────────────────── */}
      <motion.section {...fadeUp(0.25)} className="py-16 xl:py-20">
        <div className="container mx-auto">
          <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
            Background
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 mt-3 mb-10">
            Resume
          </h2>
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              {/* Experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-7 text-center xl:text-left">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {experience.title}
                    </h3>
                    <p className="mt-2 max-w-[600px] text-zinc-400 mx-auto xl:mx-0 text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[460px] pr-4">
                    <ul className="flex flex-col gap-4">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="border border-zinc-800 rounded p-6 flex flex-col gap-2 text-left"
                        >
                          <div className="flex items-center justify-between gap-4 flex-wrap">
                            <span className="text-xs font-mono text-accent">
                              {item.duration}
                            </span>
                            <span className="text-xs text-zinc-500">
                              {item.company}
                            </span>
                          </div>
                          <h3 className="text-base font-medium text-zinc-100">
                            {item.position}
                          </h3>
                          <p className="text-zinc-500 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-7 text-center xl:text-left">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {education.title}
                    </h3>
                    <p className="mt-2 max-w-[600px] text-zinc-400 mx-auto xl:mx-0 text-sm leading-relaxed">
                      {education.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[460px] pr-4">
                    <ul className="flex flex-col gap-4">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="border border-zinc-800 rounded p-6 flex flex-col gap-2 text-left"
                        >
                          <span className="text-xs font-mono text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-base font-medium text-zinc-100">
                            {item.degree}
                          </h3>
                          <p className="text-zinc-500 text-sm">
                            {item.institution}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-7">
                  <div className="text-center xl:text-left">
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {skills.title}
                    </h3>
                    <p className="mt-2 max-w-[600px] text-zinc-400 mx-auto xl:mx-0 text-sm leading-relaxed">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-6 gap-3">
                    {skills.items.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[80px] border border-zinc-800 rounded flex flex-col items-center justify-center gap-2 hover:border-zinc-600 transition-colors group">
                              <div className="text-3xl text-zinc-400 group-hover:text-accent transition-colors duration-200">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
