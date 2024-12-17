import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/eropean.jpg";
import myagentpro from "@/public/myAgentPro.jpg";
import realtorr from "@/public/realtorr.jpg";

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
  // {
  //   title: "Diploma in Designing and Development",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    title: "UX/UI DESIGNER and DEVELOPER",
    location: "Hyderabad, Telangana, India",
    description:
      "I spent 6.2 years at Inforlinx Pvt. Ltd. as a UX/UI designer and developer, honing my design expertise and user-centric approach. During this time, I expanded my skill set to include front-end development, specializing in JavaScript and React to build modern, interactive user interfaces.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2010 - July 2016",
  },
  {
    title: "SR. UX/UI DEVELOPER",
    location: "Hyderabad, Telangana, India",
    description:
      "I worked as a front-end developer at Web Revolutions Pvt. Ltd. for 1.8 years, where I enhanced my expertise by upskilling in TypeScript and Angular, further strengthening my ability to build scalable and maintainable web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2016 - Mar 2018",
  },
  {
    title: "UI DEVELOPER",
    location: "Hyderabad, Telangana, India",
    description:
      "I worked as a UI Developer at HEED IT Solutions Pvt. Ltd. for 9 months, where I contributed to building responsive and dynamic user interfaces using HTML, CSS, Angular, TypeScript, and Bootstrap.",
    icon: React.createElement(FaReact),
    date: "Mar 2018 - Nov 2018",
  },
  {
    title: "Senior Frontend Developer",
    location: "Hyderabad, Telangana, India",
    description:
      "I worked as a UI Developer at Cannysys IT Solutions Pvt. Ltd. for 2.1 Years, where I contributed to building responsive and dynamic user interfaces using HTML 5, CSS 3, React, Javascript, Node and Bootstrap 5.",
    icon: React.createElement(FaReact),
    date: "Dec 2018 - Dec 2020",
  },
  {
    title: "Senior Frontend Developer",
    location: "Chennai, Tamilnadu, India",
    description:
      "I worked as a UI Developer at SHAR Technologies Pvt. Ltd. for 1.3 Years, where I contributed to building responsive and dynamic user interfaces using HTML 5, CSS 3, VUE JS, Javascript and Bootstrap 5.",
    icon: React.createElement(FaReact),
    date: "Jan 2021 - Mar 2022",
  },
  {
    title: "Sr. Frontend Developer",
    location: "Hyderabad, Telangana, India",
    description:
      "I worked as a UI Developer at Affluent Global Services for 0.8 Years, where I contributed to building responsive and dynamic user interfaces using HTML 5, CSS 3, Angular, Javascript and Bootstrap 5.",
    icon: React.createElement(FaReact),
    date: "May 2022 - Dec 2022",
  },
] as const;

export const projectsData = [
  {
    title: "European Medical Agency",
    description:
    "Convert UI/UX designs into responsive, functional web pages. Ensure pixel-perfect mockups. Create modular, reusable components and implement interactive functionality. Ensure consistent rendering across browsers and fix related bugs. Build adaptable applications for various screen sizes. Use developer tools and error logs to identify and resolve issues.",
    tags: ["Html", "CSS", "JS", "Bootstrap", "Angular"],
    imageUrl: corpcommentImg,
  },
  {
    title: "My Agents Pro",
    description:
    "Convert UI/UX designs into responsive, functional web pages. Ensure pixel-perfect mockups. Create modular, reusable components and implement interactive functionality. Ensure consistent rendering across browsers and fix related bugs. Build adaptable applications for various screen sizes. Use developer tools and error logs to identify and resolve issues.",
    tags: ["HTML", "CSS", "JS", "Bootstrap", "VUE"],
    imageUrl: myagentpro,
  },
  {
    title: "Realtorr",
    description:
      "Convert UI/UX designs into responsive, functional web pages. Ensure pixel-perfect mockups. Create modular, reusable components and implement interactive functionality. Ensure consistent rendering across browsers and fix related bugs. Build adaptable applications for various screen sizes. Use developer tools and error logs to identify and resolve issues.",
    tags: ["HTML5", "CSS3", "Bootstrap", "React", "Node"],
    imageUrl: realtorr,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap 5",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Express",
  "Node.js",
  "Git",
  "MongoDB",
] as const;
