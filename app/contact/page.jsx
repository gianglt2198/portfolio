"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { useState } from "react";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 964 582 803",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "giangle2198@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Ho Chi Minh City, Vietnam",
  },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdajqpzj";

const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setForm((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
      className="py-10 xl:py-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16">
          {/* form */}
          <div className="xl:w-[56%] order-2 xl:order-none">
            <h2 className="h2 mb-2">Get in touch</h2>
            <p className="text-zinc-400 text-sm mb-8">
              Fill out the form and I will get back to you as soon as possible.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 bg-surface border border-zinc-800 rounded"
            >
              {/* name row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstname" className="text-xs text-zinc-400 font-medium">
                    First name <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="John"
                    value={form.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastname" className="text-xs text-zinc-400 font-medium">
                    Last name <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Doe"
                    value={form.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* contact row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs text-zinc-400 font-medium">
                    Email <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs text-zinc-400 font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* service */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 font-medium">Service</label>
                <Select value={form.service} onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full border-zinc-800 bg-surface text-zinc-50 focus:border-accent">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-zinc-500">Services</SelectLabel>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="microservices">Microservices Architecture</SelectItem>
                      <SelectItem value="devops">Cloud-Native & DevOps</SelectItem>
                      <SelectItem value="ai">Agentic AI</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs text-zinc-400 font-medium">
                  Message <span className="text-accent">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="h-[180px]"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                size="md"
                type="submit"
                disabled={status === "sending"}
                className="w-fit"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>

              {status === "success" && (
                <p className="text-accent text-sm">
                  Message sent. I will get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          {/* contact info */}
          <div className="flex-1 flex items-start xl:items-center xl:justify-end order-1 xl:order-none">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-5">
                  <div className="w-12 h-12 border border-zinc-800 rounded flex items-center justify-center text-accent text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">{item.title}</p>
                    <p className="text-zinc-200 text-sm font-medium">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
