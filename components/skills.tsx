"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const skillGroups = {
    "Cloud & Infrastructure": ["AWS", "EC2", "S3", "RDS", "Lambda", "VPC", "CloudFront", "Route 53", "API Gateway", "CloudFormation", "CDK", "Terraform", "CloudWatch", "Systems Manager", "Config", "CloudTrail"],
    "Security & Compliance": ["IAM", "Cognito", "SAML", "RBAC", "KMS", "TLS", "FedRAMP", "Zero Trust", "Well-Architected Framework", "CAF"],
    "Data & Analytics": ["DynamoDB", "Redshift", "Athena", "Glue", "Data Modeling", "QuickSight", "PostgreSQL", "MongoDB", "SQL"],
    "AI & Machine Learning": ["Bedrock", "SageMaker", "GenAI"],
    "Development & Tools": ["JavaScript", "TypeScript", "Python", "Bash", "YAML", "JSON", "HCL", "React", "Next.js", "Node.js", "Express", "GraphQL", "Apollo", "Git", "GitHub", "Jenkins", "CodePipeline", "REST", "OAuth2", "JWT", "OpenAPI", "Postman"],
    "Project Management & Design": ["Agile", "OKRs", "Jira", "Confluence", "Lucidchart", "HTML", "CSS", "Tailwind", "Framer Motion"]
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[69rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="flex flex-col gap-4">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <div key={group}>
            <h3 className="text-xl font-semibold mb-3">{group}</h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {skillsData
                .filter(skill => skills.includes(skill))
                .map((skill, index) => (
                  <motion.li
                    className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    {skill}
                  </motion.li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
