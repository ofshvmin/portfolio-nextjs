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
    location: "General Assembly, Remote",
    description:
      "I graduated after 3 months of intensive study. I immediately began freelance work as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelance, Finger Lakes Region, NY",
    description:
    "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Product Manager",
    location: "Bank of NY Mellon, New York, NY",
    description:
      "I worked as a product manager under the agile framework for 3 years at the Bank of New York Mellon, where I planned development of new software from prioritization, writing requirements, obtaining sign-off from key stakeholders, executing testing, and managing implementation. I continued to leverage my knowledge of SQL and began to learn JavaScript, partnering with our engineers to build client-facing APIs to provide real-time data on market events and client transactions. I am still employed by the bank but am currently on leave of absence while I pursue a transition to the engineering side of things.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Head of Asset Servicing Client Services",
    location: "Goldman Sachs & Co., New York, NY",
    description:
      "At Goldman I developed deep expertise in the complexities of financial operations at the highest level.  Building on that technical expertise, I undertook several initiatives to modernize our client service offerings through strategic investment in technology enhancements, while using the same opportunities to enhance controls around operational risk. It was in this role that I first got a taste for coding by learning SQL to undertake data analysis independent of our engineering teams.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "NewsLingo",
    description:
      "An interactive language learning platform serving foreign language news articles and on-demand word translation. This app was built in collaboration with two other developers.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: newsLingoImg,
    githubUrl: "https://github.com/ofshvmin/newsLingo-front-end",
    liveUrl: "https://news-lingo.netlify.app/",
  },
  {
    title: "Trail Rider",
    description:
    "A booking system for a local business.",
    tags: ["EJS", "Node.js", "Express", "Mongoose", "MongoDB", "Google OAuth"],
    imageUrl: trailrider,
    githubUrl: "https://github.com/ofshvmin/trail-rider",
    liveUrl: "https://trail-rider.fly.dev/",
  },
  {
    title: "Rabbit Hole",
    description:
      "A social media app inspired by TikTok.",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: rabbitHole,
    githubUrl: "https://github.com/ofshvmin/rabbit-hole-front-end",
    liveUrl: "https://rabbity-hole.netlify.app/",
  },
  {
    title: "Wordle: Easter Edition",
    description:
      "A wordle clone styled in the theme of Easter.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: easterwordle,
    githubUrl: "https://github.com/ofshvmin/wordle",
    liveUrl: "https://easter-wordle.netlify.app/",
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