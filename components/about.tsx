"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
      A highly skilled and experienced <span className="font-medium">UI/UX Developer with over 13 years of expertise</span> in designing and developing intuitive, user-centric web applications. Proficient in front-end technologies including HTML5, CSS3, Bootstrap, Tailwind, SCSS, JavaScript, React.js, Vue.js, and DOM Manipulation, with a strong focus on creating responsive, accessible, and visually appealing interfaces. Known for delivering high-quality, scalable solutions that enhance user experience and meet client requirements.
</p>
<p className="mb-3">Specialized in leveraging modern frameworks like React.js and Vue.js to build reusable components and maintainable codebases, along with a proven ability to collaborate effectively with cross-functional teams. Expertise in API integration, cross-browser compatibility, and advanced UI/UX design tools such as Adobe Photoshop, Figma, and Adobe XD.
</p>
<p className="mb-3">With a keen eye for detail and a passion for innovation, I have successfully completed several high-impact projects for clients across industries, including healthcare, real estate, and e-commerce. Recognized for problem-solving skills, adaptability, and the ability to stay ahead of emerging trends in front-end development. 
</p>
<p>Committed to delivering exceptional results, I bring a blend of technical expertise, creativity, and a user-first approach to every project I undertake.
      </p>

      

    </motion.section>
  );
}
