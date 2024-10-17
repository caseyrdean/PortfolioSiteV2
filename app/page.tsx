import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
