import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaAws, FaNotesMedical } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdMilitaryTech, MdSchool, MdBusinessCenter } from "react-icons/md";
import { GiSubmarine } from "react-icons/gi";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import qsdemoImg from "@/public/QSDEMO.png";

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
    title: "United States Coast Guard",
    location: "October 2011 ",
    description:
      "I was a Boatswains Mate 3rd Class focusing on counter narcotics and counter terrorism.",
    icon: React.createElement(MdMilitaryTech),
    date: "2011 - 2015",
  },
  {
    title: "University of Wisconsin-Whitewater",
    location: "Whitewater, WI",
    description:
      "I obtained my undergraduate degree in entrepreneurship. 3.6 GPA. President of Student Veterans Organization. Project Leader Enactus. Member College Entreprenurship Organization. 2x winner of Warhawk Business Plan Competition. Student Athlete (Wrestling)",
    icon: React.createElement(MdSchool),
    date: "2015 - 2018",
  },
  {
    title: "Elegant Solutions",
    location: "Houston, TX",
    description:
      "Deconstructed Emergency Room efficiency consulting and used IoT to create first of its kind emergency room analytics that gave clarity to patients, and their families while inreasing ER efficiency. Increased participation in federal funding surveying by 80% Sold company in 2019 ",
    icon: React.createElement(FaNotesMedical),
    date: "2016 - 2018",
  },
  {
    title: "Stryker",
    location: "Kalamazoo, MI",
    description:
      "Took new talent team from Brass Ring to Workday, redefined Talent KPI's, cleaned data, redesigned 40 reports and created dashboards for them. Trained 700 global recruiters, improved many talent KPI's. ",
    icon: React.createElement(FaNotesMedical),
    date: "2018 - 2020",
  },
  {
    title: "Wilde Group",
    location: "Raleigh, NC",
    description:
      "Created consulting firm that specialized in innovation and technology. Clients included Fortune 500 companies.",
    icon: React.createElement(MdBusinessCenter),
    date: "2019 - 2022",
  },
  {
    title: "Sopheon",
    location: "Raleigh, NC",
    description:
      "Did implementation and Solutions Architecture for Sopheon products. Focused on Aerospace and Defense clients. Specifically, nuclear submarines, and F-35 programs. Won multiple awards and received challenge coin from program head.",
    icon: React.createElement(GiSubmarine),
    date: "2022 - 2025",
  },
  {
    title: "Jaggaer",
    location: "Jersey City, NJ",
    description:
      "Implementation and Solution Architecture of Jaggaer AI/ML products. Supply Chain focus.",
    icon: React.createElement(FaAws),
    date: "Current",
  },
] as const;

export const projectsData = [
  {
    title: "Replicant Bloomberg Terminal",
    description:
      " I am currently in the process of using AWS modules to recreate a Bloomberg Terminal. Minus the proprietary stuff of course.",
    tags: ["Kinesis", "Lambda", "Timestream", "QuickSight", "SageMaker", "DynamoDB", "Cognito", "CloudFront", "Glue", "Amplify", "CloudWatch"],
    imageUrl: qsdemoImg,
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
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "AWS",
  "EC2",
  "S3",
  "RDS",
  "Lambda",
  "VPC",
  "CloudFront",
  "Route 53",
  "API Gateway",
  "IAM",
  "CloudTrail",
  "CloudWatch",
  "Config",
  "Systems Manager",
  "CloudFormation",
  "CDK",
  "Terraform",
  "GitHub",
  "Jenkins",
  "CodePipeline",
  "Cognito",
  "SAML",
  "RBAC",
  "KMS",
  "TLS",
  "FedRAMP",
  "Zero Trust",
  "Well-Architected Framework",
  "CAF",
  "DynamoDB",
  "Redshift",
  "Athena",
  "Glue",
  "Data Modeling",
  "QuickSight",
  "REST",
  "OAuth2",
  "JWT",
  "OpenAPI",
  "Postman",
  "Bedrock",
  "SageMaker",
  "GenAI",
  "Agile",
  "OKRs",
  "Jira",
  "Confluence",
  "Lucidchart",
  "Bash",
  "YAML",
  "JSON",
  "HCL",
  "SQL"
] as const;
