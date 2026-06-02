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
    title: "Address",
    description: "Ho Chi Minh City, Vietnam",
  },
];

import { motion } from "framer-motion";

// Formspree (free tier: 50 submissions/month).
// Create a form at https://formspree.io and replace the ID below.
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
      transition={{ delay: 2.0, duration: 0.4, ease: "easeInOut" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              {/* select */}
              <Select value={form.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="microservices">
                      Microservices Architecture
                    </SelectItem>
                    <SelectItem value="devops">
                      Cloud-Native & DevOps
                    </SelectItem>
                    <SelectItem value="ai">Agentic AI</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                placeholder="Type your message here."
                className="h-[200px]"
                value={form.message}
                onChange={handleChange}
                required
              />
              {/* button */}
              <Button
                size="md"
                type="submit"
                disabled={status === "sending"}
                className="max-w-40"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>
              {/* feedback */}
              {status === "success" && (
                <p className="text-accent">
                  Thanks! Your message has been sent. I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
