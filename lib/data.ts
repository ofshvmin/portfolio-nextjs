import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import newsLingoImg from "@/public/newsLingo.png";
import rabbitHole from "@/public/rabbithole.png"
import trailrider from "@/public/trailrider.png"
import easterwordle from "@/public/easterwordle.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "General Assembly - Remote",
    description:
      "I graduated after 3 months of intensive study. I immediately began freelance work as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelance - Finger Lakes Region, NY",
    description:
    "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Product Manager",
    location: "Bank of NY Mellon - New York, NY",
    description:
      "I worked as a product manager under the agile framework for 3 years at the Bank of New York Mellon. I planned development of new software from prioritization, writing requirements, obtaining sign-off from business stakeholders, executing testing, and managing implementation. I am still employed by the bank but currently on leave of absence while I pursue a transition to the engineering side of things.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Head of Asset Servicing Client Services",
    location: "Goldman Sachs - New York, NY",
    description:
      "I worked as a product manager under the agile framework for 3 years at the Bank of New York Mellon. I planned development of new software from prioritization, writing requirements, obtaining sign-off from business stakeholders, executing testing, and managing implementation. I am still employed by the bank but currently on leave of absence while I pursue a transition to the engineering side of things.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "NewsLingo",
    description:
      "I worked as a full-stack developer within a team of three on this project. Users can view news articles in their target language, get instant translation of any word they click on, and favorite words to add a flashcard to their personal dictionary.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: newsLingoImg,
  },
  {
    title: "Trail Rider",
    description:
    "A booking system for a local business.",
    tags: ["EJS", "Node.js", "Express", "Mongoose", "MongoDB", "Google OAth"],
    imageUrl: trailrider,
  },
  {
    title: "Rabbit Hole",
    description:
      "A social media app inspired by TikTok.",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: rabbitHole,
  },
  {
    title: "Wordle: Easter Edition",
    description:
      "A wordle clone styled in the theme of Easter.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: easterwordle,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;