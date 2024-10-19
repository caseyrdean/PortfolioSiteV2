import React from "react";

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
import betterinPersonImg from "@/public/better-in-person.png";
import collectImg from "@/public/collect-rn.png";

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
    title: "React Native Developer",
    location: "UtiliSource | St Louis, Missouri, USA | Remote",
    description:
      "Developed mobile app using React Native to match web application feature parity for UtiliSource LLC. Organized codebase repository with atomic components approach for future collaboration and consistency. Identified MVP requirements with Stakeholders to prioritize features for the mobile app development.",
   // icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Present",
  },
  {
    title: "React Developer",
    location: "UtiliSource | St Louis, Missouri, USA | Remote",
    description:
      "Developed MVP react web application with custom Form builder and renderer, mapping, and real-time updates. Iterated on features based on feedback from testers and stakeholders to enhance user experience. Designed layout and behavior for optimal user interaction and functionality.",
   // icon: React.createElement(CgWorkAlt),
    date: "April - Jul 2024",
  },
  {
    title: "iOS Mobile Developer",
    location: "Better in Person | Los Angeles, California, USA | Remote",
    description:
      "Developed new features on iOS app using SwiftUI to enhance user experience. Resolved bugs reported by TestFlight users promptly to ensure app stability. Designed and implemented intuitive interfaces based on provided designs.",
   // icon: React.createElement(CgWorkAlt),
    date: "July - October 2024",
  },
  {
    title: "Angular Developer",
    location: "City Beauty | Burbank, California, USA | Remote",
    description:
      "Developed and designed landing pages in PHP, CSS, and JavaScript using HTMX for City Beauty. Updated and maintained cart pages with Angular 12+ components to enhance user experience. Collaborated with product and marketing teams using Jira and Slack for efficient project management.",
   // icon: React.createElement(CgWorkAlt),
    date: "July - October 2024",
  },
  {
    title: "React Native Developer",
    location: "Viulogix | Raleigh, North Carolina, USA | Remote",
    description:
      "Designed and developed an industry scale rental mobile application using React Native. Created custom components to meet specs and requirements for complex rental features. Implemented mapping, camera, and push notifications to enhance user experience.",
   // icon: React.createElement(CgWorkAlt),
    date: "May - Sep 2023",
  },
  {
    title: "Software Engineer",
    location: "Viulogix | Raleigh, North Carolina, USA | Remote",
    description:
      "Collaborated on a HR and compliance management system web app using VueJS, Firebase, and .NET. Designed and implemented features with context management using VueX and Pinia. Added end-to-end test cases to ensure coverage and reported progress to Solutions Architect.",
   // icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Apr 2023",
  },
  {
    title: "Project Manager Scrum Master",
    location: "Watchtower | Tuxedo Park, USA | Remote",
    description:
      "Led an engineering team of Programmers, Designers, and QA Testers at Watchtower, Tuxedo Park, New York. Scheduled and chaired daily and weekly meetings following the Scrum agile framework. Maintained and updated product backlog items according to the agreed roadmap and quarterly goals.",
    //icon: React.createElement(CgWorkAlt),
    date: "Jun 2019 - Dec 2020",
  },
  {
    title: "Frontend Developer",
    location: "Watchtower | Tuxedo Park, USA | Remote",
    description:
      `Conducted user research to gather requirements through card sorting, wireframing, and usability testing. 
      
      Designed and prototyped UI components using Figma for seamless user experience.Collaborated with stakeholders, programmers, and QA testers to ensure UX requirements were met within project budget. Ensured UI designs were user-friendly and aligned with project goals.`,
   // icon: React.createElement(CgWorkAlt),
    date: "Jul 2018 - May 2019",
  },
  {
    title: "UI Developer",
    location: "Watchtower | Tuxedo Park, USA | Remote",
    description:
      `Conducted user research to gather requirements through card sorting, wireframing, and usability testing. 
      
      Designed and prototyped UI components using Figma for seamless user experience. Collaborated with stakeholders, programmers, and QA testers to ensure UX requirements were met within project budget. Ensured UI designs were user-friendly and aligned with project goals.`,
   // icon: React.createElement(CgWorkAlt),
    date: "Jan 2018 - Jun 2018",
  },
];

export const projectsData = [
  {
    title: "Collect",
    tag: "In Progress",
    description:
      "React Native application that lets users create Geolocation points and fill out survey forms.",
    tags: ["React Native", "TypeScript", "WatermelonDB", "Tailwind", "UX", ".NET"],
    imageUrl: collectImg,
  },
  {
    title: "Digitalage",
    tag: "Project",
    description:
      "Proof of concept design and development for Digitalage company.",
    tags: ["HTMX", "TypeScript", "Alpine.js", "Tailwind", "UX"],
    imageUrl: digibleImg,
    link: "https://dac24ht.vercel.app",
  },
  {
    title: "Buddle",
    tag: "On Hold",
    description:
      "Personal React Native project that allows users to create shared funds for different purposes.",
    tags: ["React Native", "UX", "SQL", "Supabase", "Styled Components"],
    imageUrl: buddleImg,
    link: "https://github.com/Mannydefreitas7/PiggyPayMobile",
  },
  {
    title: "Better in Person",
    tag: "Published",
    description:
      "Dating Swift iOS application that lets users find events to meet in person.",
    tags: ["Swift", "UX", "SwiftUI", "Firebase", "Combine"],
    imageUrl: betterinPersonImg,
    link: "https://apps.apple.com/us/app/better-in-person-dating-app/id6504006454",
  },
  {
    title: "MapSource",
    tag: "In Progress",
    description:
      "Current long-term React project I am working on for UtiliSource company.",
    tags: ["React", ".NET", "C#", "MUI", "Redux", "Azure"],
    link: "https://opsource.us/",
    imageUrl: mapsourceImg,
  },
  {
    title: "Watchtower",
    tag: "Published",
    description:
      "UI Development and Usability Testing for JW.org's Watchtower Library and internal pusblishing tools.",
    tags: ["UX", "VueJS", "Accessibility", "Figma", "Prototype", "Docusaurus"],
    link: "https://www.jw.org/en/",
    imageUrl: jwImg,
  },
  {
    title: "Monsieur Marcel",
    tag: "Published",
    description:
      "Redesigned Wordpress company's website to intregrate E-Commerce solution.",
    tags: ["PHP", "Custom Theme", "Angular", "MailChimp", "UX"],
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
    tag: "Published",
    description:
      "Wordpress custom PHP plugins and theme for dental clinic along with SEO.",
    tags: ["PHP", "HTML", "CSS", "Wordpress", "SEO"],
    link: "https://www.andrewmutchdds.com/",
    imageUrl: addrewmutchDDSImg,
  },
  {
    title: "Tony Barriere Interpreting",
    tag: "Published",
    description:
      "I worked as a Web Developer & UX Designer on this Interpreting Agency in Los Angeles.",
    tags: ["HTML", "CSS", "PHP", "SEO", "Tailwind", "React"],
    imageUrl: tbiImg,
    link: "http://tbinterpreting.com",
  },
  {
    title: "Bible Read",
    tag: "Published",
    description:
      "A Bible Reading tracking iOS Application with reading plans and notifications.",
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
  "React Native",
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
