"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useDarkMode } from "usehooks-ts";

export default function About() {
  const { ref } = useSectionInView("About");
  const { isDarkMode } = useDarkMode();
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to my corner of the digital universe! I'm{" "}
        <strong>Emmanuel De Freitas</strong>, a seasoned Software Engineer based
        in sunny Los Angeles, California, specializing in frontend development.
        With over 4 years of experience at{" "}
        <a
          href="https://utilisource.us/"
          className="text-pink-700 dark:text-pink-300 hover:underline"
        >
          UtiliSource
        </a>
        , I've been the driving force behind creating web and mobile apps for
        major construction companies. My mission?{" "}
        <i className="text-orange-600 dark:text-orange-300">
          Turning lines of code into user delight!
        </i>
      </p>
      <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, React Native, Next.js, Node.js, and SQL</span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        Mid-Senior Software Engineer.
      </p>
    </motion.section>
  );
}
