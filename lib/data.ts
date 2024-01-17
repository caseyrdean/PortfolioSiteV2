import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import tbiImg from "@/public/tbi.png";
import digibleImg from "@/public/digible.png";
import buddleImg from "@/public/buddle.png";
import mapsourceImg from "@/public/mapsource.png";
import jwImg from "@/public/jw.png";
import spreadBossImg from "@/public/spreadboss.png";
import biblereadImg from "@/public/bibleread.png";
import addrewmutchDDSImg from "@/public/andrewmutchdds.png";
import tgmercerImg from "@/public/tg-mercer.jpeg";
import mrmarcelImg from "@/public/mrmarcel.png";

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
    title: "Software Developer",
    location: "Viulogix - Los Angeles, CA (Remote)",
    description:
      "Designed and developed Vue.js, React web and React Native mobile apps for large construction companies.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - Present",
  },
  {
    title: "Front-End Developer",
    location: "Infinite Communications - Sherman Oaks, CA",
    description:
      "Maximized marketing and design efforts for dental offices by adhering to DRY principle. Laravel Blade templates & Custom PHP & CSS WordPress plugins and themes for each dentist's unique style and preferences.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2019",
  },
  {
    title: "Frontend Web Developer",
    location: "Monsieur Marcel - Los Angeles, CA",
    description:
      "Redesign Monsieur Marcel's Wordpress e-commerce website using Javascript, CSS, Animations and React, resulting in an intuitive layout that increased user click-through rate and boosted customer satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2016",
  },
] as const;

export const projectsData = [
  {
    title: "Digitalage",
    description:
      "Proof of concept design and development for Digitalage company.",
    tags: ["HTMX", "TypeScript", "Alpine.js", "Tailwind", "UX"],
    imageUrl: digibleImg,
    link: "https://dac24ht.vercel.app",
  },
  {
    title: "Buddle",
    tag: "In Progress",
    description:
      "Personal React Native project that allows users to create shared funds for different purposes.",
    tags: ["React Native", "UX", "SQL", "Supabase", "Styled Components"],
    imageUrl: buddleImg,
    link: "https://github.com/Mannydefreitas7/PiggyPayMobile",
  },
  {
    title: "MapSource",
    tag: "In Progress",
    description:
      "Current long-term React project I am working on for UtiliSource company.",
    tags: ["React", ".NET", "C#", "MUI"],
    link: "https://opsource.us/",
    imageUrl: mapsourceImg,
  },
  {
    title: "JW.ORG",
    description:
      "Volunteer work: UX research methods such as surveys and usability testing",
    tags: ["UX", "Usability Testing", "Accessibility", "Figma", "Prototype"],
    link: "https://www.jw.org/en/",
    imageUrl: jwImg,
  },
  {
    title: "Monsieur Marcel",
    description:
      "Redesigned Wordpress company's website to intregrate E-Commerce solution.",
    tags: ["PHP", "Custom Theme", "WooCommerce", "MailChimp", "UX"],
    link: "https://www.mrmarcel.com/",
    imageUrl: mrmarcelImg,
  },
  {
    title: "TG Mercer",
    tag: "Private",
    description:
      "The hiring process often requires documentation, and implemented a feature enabling applicants to upload images seamlessly.",
    tags: ["VueJS", ".NET/C#", "Custom Form Builder", "PDF Editor"],
    link: "https://quantaservices.com/companies/t-g-mercer",
    imageUrl: tgmercerImg,
  },
  {
    title: "SpreadBoss",
    tag: "Private",
    description:
      "React Native application that lets employees rent large construction vehicules",
    tags: ["React Native", "SQLite", "Camera", "Scanner"],
    link: "https://www.linkedin.com/posts/charles-shea-6a274331_spreadboss-has-expanded-its-tracking-capabilities-activity-6927996255977558016-KxMG?utm_source=share&utm_medium=member_desktop",
    imageUrl: spreadBossImg,
  },
  {
    title: "Andrew Mutch DDS",
    description:
      "Wordpress custom PHP plugins and theme for dental clinic along with SEO.",
    tags: ["PHP", "HTML", "CSS", "Wordpress", "SEO"],
    link: "https://www.andrewmutchdds.com/",
    imageUrl: addrewmutchDDSImg,
  },
  {
    title: "Tony Barriere Interpreting",
    description:
      "I worked as a Web Developer & UX Designer on this Interpreting Agency in Los Angeles.",
    tags: ["HTML", "CSS", "PHP", "SEO", "Tailwind", "React"],
    imageUrl: tbiImg,
    link: "http://tbinterpreting.com",
  },
  {
    title: "Bible Read",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Swift", "Objective C", "UX", "Core Data", "Firebase"],
    link: "https://apps.apple.com/us/app/bible-read/id1472187500",
    imageUrl: biblereadImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "VueJS",
  "Nuxt",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "Redux",
  "GraphQL",
  "Express",
  ".NET",
  "C#",
  "Framer Motion",
  "Azure",
  "Scrum",
] as const;
