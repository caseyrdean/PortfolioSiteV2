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
      <p className="mb-6">
        I’ve always given emphasis to a suitable development lifecycle,
        customized to prioritize release without compromising app architecture
        or functional integrity. I hold in high regard team mates from different
        departments, and it has long been my responsibility to interact with
        clients and stakeholders to communicate user requirements, deliver
        updates, managing crisis, and overall overseeing of operations.
      </p>

      <p>
        <span>When I'm not coding I enjoy </span>
        <span className="italic">playing video games, watching movies, </span>
        and
        <span className="italic"> spending time with friends.</span> I enjoy
        socializing with strangers that share my passion. I like building giant
        things out of small things that have harmony. I like order (66).
      </p>
    </motion.section>
  );
}
