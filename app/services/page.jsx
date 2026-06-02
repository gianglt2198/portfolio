"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "High-performance APIs and services in Golang and Rust — REST, gRPC, and GraphQL — built for reliability, low latency, and clean, maintainable code.",
    href: "",
  },
  {
    num: "02",
    title: "Microservices Architecture",
    description:
      "Event-driven, distributed systems with clear bounded contexts and asynchronous messaging over NATS JetStream and Kafka/Pulsar for independent scaling.",
    href: "",
  },
  {
    num: "03",
    title: "Cloud-Native & DevOps",
    description:
      "Containerized workloads on Kubernetes across AWS and GCP, with CI/CD pipelines, infrastructure as code, and full-stack observability (Prometheus, Grafana, OpenTelemetry).",
    href: "",
  },
  {
    num: "04",
    title: "Agentic AI",
    description:
      "Designing and deploying intelligent AI agents and Generative AI integrations for autonomous operations, automation, and data-driven decision making.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.4, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent
                            group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  {/* <Link href={service.href} className="w-[70px] h-[70px] rounded-full 
                            bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl" />
                            </Link> */}
                </div>
                {/* Title */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
