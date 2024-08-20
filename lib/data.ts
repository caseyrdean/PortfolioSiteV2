import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { MdGamepad } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { LuMonitor } from "react-icons/lu";

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
    title: "Unity Game UI Developer / Programmer",
    location: "Chewata Awaqi",
    description:
      "Served as the solo developer of Mela, an interactive storytelling game where the choices you make will impact the ending.",
    icon: React.createElement(MdGamepad),
    date: "2019 - 2020",
  },
  {
    title: "Lead Android App Developer",
    location: "3BL Enterprises",
    description:
      "Lead developer for Flowius Manage, Flowius Pay and Flowius Survey Android apps.",
    icon: React.createElement(FaMobileAlt),
    date: "2022 - 2024",
  },
  {
    title: "Lead Front End Developer",
    location: "3BL Enterprises",
    description:
      "Lead developer for Flowius Manage and Flowius Pay web apps.",
    icon: React.createElement(MdOutlineMonitor),
    date: "2022 - 2024",
  },
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "EdStock",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Next.js", "Redux", "Tailwind", "Material UI", "Express.js", "PostgreSQL", "Prisma", "EC2", "RDS", "Amplify", "S3"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Flowius Manage",
    description:
      "A proprietary management app for 3BL Enterprises. Users can monitor and manage project activities, inventory, and special cases.",
    tags: ["React", "TypeScript", "Firebase", "Kotlin", "Android SDK", "Mapbox"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Flowius Pay",
    description:
      "A proprietary management app for 3BL Enterprises. Users can record, monitor and interpret customer payment information.",
    tags: ["React", "JavaScript", "Firebase", "Kotlin", "Android SDK", "Mapbox"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "Kotlin",
  "Android SDK",
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
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
