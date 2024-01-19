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
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to my corner of the digital universe! I'm{" "}
        <strong>Manuel De Freitas</strong>, a seasoned Software Engineer based
        in sunny Los Angeles, California, specializing in frontend development.
        With over four years of experience at{" "}
        <a
          href="https://www.viulogix.com/"
          className="text-pink-700 dark:text-pink-300 hover:underline"
        >
          Viulogix
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
        is <span className="font-medium">React, Next.js, Node.js, and SQL</span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="software-engineer-manuel-defreitas"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/software-engineer-manuel-defreitas?trk=profile-badge"
        >
          Manuel De Freitas
        </a>
      </div>
    </motion.section>
  );
}
