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
      className="mb-28 max-w-[58.5rem] text-center leading-10 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg sm:text-xl">
        After graduating with a degree in{" "}
        <span className="font-medium">Entrepreneurship</span>, I decided to pursue my
        passion for Innovation and Solutions Architecture. I have since been obsessed with AWS and have learned{" "}
        <span className="font-medium">all of its core components</span>.{" "}
        <span className="italic">My favorite part of cloud computing</span> is dreaming up new and novel ways to build. I <span className="underline">love</span> the
        feeling of creating something new and introducing it to the world!. The core services I know are
        {" "}
        <span className="font-medium">
         the ones offered in certifications up to AWS Solutions Architect (Associate) as well as many of the AI/ML modules like Bedrock, Kendra, Polly, and Rekognition 
        </span>
        . I am also familiar with Cursor, Snowflake, Datadog, and many other tools. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as an AWS Solutions
        Architect.
      </p>

      <p className="text-lg sm:text-xl">
        <span className="italic">When I'm not dreaming up new ways to configure new use cases</span>, I enjoy
        jiu jitsu, video games, long distance backpacking, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">volunteering with inner city shelters, especially with bully breeds.</span>. I am currently
        learning and am excited about{" "}
        <span className="font-medium">using my newfound skills to create chatbots that replicate human conversations.</span>. I'm also
        learning how to build front end applications with React and Next.js like this portfolio!
      </p>
    </motion.section>
  );
}
