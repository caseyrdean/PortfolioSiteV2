import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/brainware.jpeg";
import wordanalyticsImg from "@/public/Ecommerce (2).jpeg";

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
    title: "&",
    location: "Dominican Republic",
    description:
      "I am a self-taught fullstack web developer with an innate passion for learning and mastering technologies on both the frontend and backend. Through online resources, official documentation, and personal projects, I have gained solid skills in building complete web applications. My focus on self-discipline and problem solving has allowed me to develop not only deep technical knowledge, but also the ability to quickly adapt to new frameworks and tools. I am committed to continuous improvement and always looking for opportunities to apply my skills in challenging and meaningful projects",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End",
    location: "Dominican Republic",
    description:
      "Currently, I am actively searching for job opportunities as a fullstack developer. I have a solid self-taught background in web development, with experience in both frontend and backend. I am excited to apply my skills on innovative projects and collaborate on dynamic teams that value continuous learning and technical excellence. With a meticulous focus on code quality and final product usability, I am ready to positively contribute to the success of any company that values ​​innovation and technological development.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Dominican Republic",
    description:
      "I am excited to expand my knowledge in fullstack development and am dedicated to continuing to learn and improve my skills in this area. As a passionate and self-taught developer, I have a strong commitment to continuous learning and am motivated to explore new technologies, frameworks and practices that allow me to grow professionally. I am excited to take on new challenges and become a more well-rounded fullstack developer, capable of meaningfully contributing to innovative projects and dynamic development teams.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind",],
    imageUrl: corpcommentImg,
  },
  {
    title: " Modern website ",
    description:
      "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    tags: ["React", "Tailwindcss", ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ecommerce With Admin Panel",
    description:
      "An ecommerce web project with an administration panel offers a comprehensive platform for the management and operation of an online store. This type of system allows administrators to monitor inventory, manage products, process orders, and manage users efficiently. Additionally, it provides tools to analyze sales data, generate reports and adjust business strategies. With an intuitive interface and robust functionalities, the admin panel facilitates the online business management experience, thus promoting an optimized environment for the growth and scalability of ecommerce.",
    tags: ["React", "Next.js", "MongoDb", "Nodejs",],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Vue",
  "React",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "MongoDB",
  "Asp.netCore8",
  "Express",
  "MySQL",
] as const;
