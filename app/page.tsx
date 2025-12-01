"use client"

import { useState } from "react";
import Navbar from '../components/Navbar'
import GitHubContributions from '../components/GitHubContributions'
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import Footer from '@/components/Footer';
import {
  siTypescript,
  siJavascript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siMongodb,
  siMysql,
  siSupabase,
  siTailwindcss,
  siFlutter,
} from "simple-icons/icons";
import TooltipIcon from '@/components/TooltipIcon';
import TechBadge from '@/components/TechBadge';
import Link from 'next/link';

export default function Home() {
    const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "ZapLanding",
      description:
        "Launch faster with AI-built landing pages designed to showcase your brand and convert visitors into customers.",
      tech: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express.js",
        "GPT-4.1",
        "Docker",
        "MongoDB",
      ],
      website: "#",
      source: "#",
      type: "all",
    },
    {
      title: "SnapPrice",
      description:
        "A cross-platform app that helps users compare item prices across quick-commerce platforms ensuring they always get the best deal without switching between apps.",
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "NextAuth"],
      website: "#",
      source: "#",
      type: "all",
    },
    {
      title: "PicForge",
      description:
        "An all-in-one web app that lets users upscale, color-grade, and enhance images in seconds—right from the browser.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      website: "#",
      source: "#",
      type: "all",
    },
    {
      title: "Nudgepay",
      description:
        "A payment-management tool for freelancers that sends smart invoices and automated WhatsApp payment reminders to get clients to pay on time.",
      tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Supabase"],
      website: "https://www.nudgepay.in/",
      type: "freelance",
    },
    {
      title: "Datacove.ai",
      description:
        "A Plug-an-play Agent-as-a-Service platform built to help businesses automate and manage document-heavy tasks across HR, legal, compliance, recruitment, and other domains.",
      tech: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      website: "https://datacove.ai/",
      type: "all",
    },
    {
      title: "Feedback Central",
      description:
        "A seamless platform for employees and managers to exchange constructive feedback, fostering growth and organizational excellence.",
      tech: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "Fast API",
        "SQL",
      ],
      website: "https://datacove.ai/",
      source: "#",
      type: "all",
    },
    {
      title: "Sharechat",
      description:
        "A real-time communication app that provides smooth one-to-one messaging, media sharing, and persistent chat history with a modern interface",
      tech: [
        "React.js",
        "CSS",
        "Socket.io",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      website: "https://datacove.ai/",
      source: "#",
      type: "all",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === "freelance");

  return (
    <>
    <Navbar />
    <div className="font-sans max-w-3xl mx-auto px-5 py-8">
      <header id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative mb-12">
        {/* Social Media Icons */}
        <div className="absolute top-5 right-5 flex gap-8">
          <a href="https://x.com/adityatwt_" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition ">
            <FaXTwitter className="text-black text-xl dark:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/adityabansal3403/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition">
            <FaLinkedin className="text-black text-xl dark:text-white" />
          </a>
          <a href="https://github.com/Aditya3403" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
            <FaGithub className="text-black text-xl dark:text-white" />
          </a>
        </div>

        <div className="max-w-2xl px-4 flex flex-col items-center">

          <img 
            src="/header-image.jpg" 
            alt="Aditya Bansal" 
            className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
          />

          <h1 className="text-4xl font-bold mb-4">Hi, I'm Aditya</h1>
          <p className="text-xl leading-relaxed mb-6">
            I build fast, scalable web apps using{" "}
            
            <TooltipIcon title="TypeScript" svg={siTypescript.svg} hex={siTypescript.hex} className="inline h-6 w-6 align-text-bottom" />{" "},{" "}
            <TooltipIcon title="JavaScript" svg={siJavascript.svg} hex={siJavascript.hex} className="inline h-6 w-6 align-text-bottom" />{" "},{" "}
            <TooltipIcon title="React.js" svg={siReact.svg} hex={siReact.hex} className="inline h-6 w-6 align-text-bottom" />{" "},{" "}
            <TooltipIcon title="Next.js" svg={siNextdotjs.svg} hex={siNextdotjs.hex} className="inline h-6 w-6 align-text-bottom" />{" "},{" "}
            <TooltipIcon title="Node.js" svg={siNodedotjs.svg} hex={siNodedotjs.hex} className="inline h-6 w-6 align-text-bottom" />{" "},{" "}
            <TooltipIcon title="Express" svg={siExpress.svg} hex={siExpress.hex} className="inline h-6 w-6 align-text-bottom" />{" "}

            {" "}and modern databases like{" "}

            <TooltipIcon title="PostgreSQL" svg={siPostgresql.svg} hex={siPostgresql.hex} className="inline h-6 w-6 align-text-bottom" />{" "},{" "}
            <TooltipIcon title="MongoDB" svg={siMongodb.svg} hex={siMongodb.hex} className="inline h-6 w-6 align-text-bottom" />{" "},{" "}
            <TooltipIcon title="MySQL" svg={siMysql.svg} hex={siMysql.hex} className="inline h-6 w-6 align-text-bottom" />{" "},{" "}
            <TooltipIcon title="Supabase" svg={siSupabase.svg} hex={siSupabase.hex} className="inline h-6 w-6 align-text-bottom" />{" "}

            . I love to experiment with new technologies like{" "}

            <TooltipIcon title="Flutter" svg={siFlutter.svg} hex={siFlutter.hex} className="inline h-6 w-6 align-text-bottom" />

            {" "}and pushing ideas into real products.
          </p>

          <p className="text-xl mb-8">If you're building something ambitious, I’d love to contribute.</p>
          <div className="flex gap-3 justify-center">
            <button className="
              group 
              dark:text-black dark:bg-white 
              bg-black text-white 
              px-4 py-2 rounded-sm 
              text-sm font-medium 
              flex items-center 
              transition-all
            ">
              <span className="whitespace-nowrap">More about me</span>

              <span className="
                ml-0 
                max-w-0 
                overflow-hidden 
                group-hover:max-w-[20px] 
                group-hover:ml-2 
                transition-all duration-300
              ">
                →
              </span>
            </button>


            <button className="dark:text-white dark:bg-[#1C1C1C] border border-gray-500/30 inset-shadow-sm inset-shadow-gray-500/30 px-4 py-2 rounded-sm text-sm font-medium">
              <Link href="/contact-me" aria-label="Contact Me">Get in touch</Link>
            </button>
          </div>
        </div>
  
      </header>


      {/* Proof of Work */}
      <section id="work" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Proof of Work</h2>

      <div className="flex justify-center mb-6">
        <div className="flex gap-2 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-1 py-1">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-md text-sm transition-all border
              ${
                filter === "all"
                  ? "border-gray-300 shadow-sm bg-transparent text-black dark:bg-white dark:text-black"
                  : "border-transparent bg-transparent text-gray-700 dark:text-gray-300"
              }`}
          >
            All Projects
          </button>

          <button
            onClick={() => setFilter("freelance")}
            className={`px-4 py-1.5 rounded-md text-sm transition-all border
              ${
                filter === "freelance"
                  ? "border-gray-300 shadow-sm bg-transparent text-black dark:bg-white dark:text-black"
                  : "border-transparent bg-transparent text-gray-700 dark:text-gray-300"
              }`}
          >
            Freelance Projects
          </button>
        </div>
      </div>



      <div className="grid md:grid-cols-2 gap-4">
        {filteredProjects.map((work, idx) => (
          <div
            key={idx}
            className="h-full flex flex-col justify-between border border-gray-300 dark:border-gray-700 dark:bg-[#171717] rounded-sm p-6"
          >
            <div>
              <h3 className="text-xl font-semibold dark:text-white mb-3">
                {work.title}
              </h3>

              <p className="text-gray-600 dark:text-white mb-4">
                {work.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 text-xs">
                {work.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-gray-500/30 inset-shadow-sm inset-shadow-gray-500/30 px-2 py-1 rounded-sm text-gray-700 bg-transparent dark:bg-[#2F2F2F] dark:text-white dark:border dark:border-dashed-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 text-sm">
              <a
                href={work.website}
                className="flex items-center gap-1 bg-black dark:bg-[#2F2F2F] text-white px-3 py-1.5 rounded-sm dark:border dark:border-dashed-white"
              >
                <BsGlobe className="dark:text-white" /> Website
              </a>

              {work.source && (
                <a
                  href={work.source}
                  className="flex items-center gap-1 bg-black dark:bg-[#2F2F2F] text-white px-3 py-1.5 rounded-sm dark:border dark:border-dashed-white"
                >
                  <FaGithub className="dark:text-white" /> Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* <section id="work" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Projects</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "ZapLanding",
              description:
                "Launch faster with AI-built landing pages designed to showcase your brand and convert visitors into customers.",
              tech: [
                "Next.js",
                "React.js",
                "Tailwind CSS",
                "TypeScript",
                "Node.js",
                "Express.js",
                "GPT-4.1",
                "Docker",
                "MongoDB",
              ],
              website: "#",
              source: "#",
            },
          ].map((work, idx) => (
            <div
              key={idx}
              className="h-full flex flex-col justify-between border border-gray-300 dark:border-gray-700 dark:bg-[#171717] rounded-sm p-6"
            >
              <div>
                <h3 className="text-xl font-semibold dark:text-white mb-3">{work.title}</h3>

                <p className="text-gray-600 dark:text-white mb-4">{work.description}</p>

                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  {work.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-gray-500/30 inset-shadow-sm inset-shadow-gray-500/30 px-2 py-1 rounded-sm text-gray-700 bg-transparent dark:bg-[#2F2F2F] dark:text-white dark:border dark:border-dashed-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 text-sm">
                <a
                  href={work.website}
                  className="flex items-center gap-1 bg-black dark:bg-[#2F2F2F] text-white px-3 py-1.5 rounded-sm dark:border dark:border-dashed-white"
                >
                  <BsGlobe className="dark:text-white" /> Website
                </a>

                <a
                  href={work.source}
                  className="flex items-center gap-1 bg-black dark:bg-[#2F2F2F] text-white px-3 py-1.5 rounded-sm dark:border dark:border-dashed-white"
                >
                  <FaGithub className="dark:text-white" /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* GitHub Contributions */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">GitHub Contributions</h2>
        <div className="overflow-x-auto">
          <GitHubContributions />
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>

        <div className="space-y-12">
          {/* English Bhashi */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex items-center gap-3">
                <img
                  src="/eb_logo.jpg"
                  alt="English Bhashi Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Fullstack Engineer</h3>
                  <p className="text-gray-600 text-sm dark:text-white">English Bhashi</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm whitespace-nowrap dark:text-white">
                Aug 2024 - Present
              </p>
            </div>

            
            <div className="ml-15 mt-4 flex flex-col flex-wrap gap-3">
              <span className="text-md font-semibold dark:text-white">Technologies & Tools</span>
              <div className='flex flex-wrap w-full gap-3'>
                <TechBadge svg={siNextdotjs.svg} hex={siNextdotjs.hex} label="Next.js" />
                <TechBadge svg={siTailwindcss.svg} hex={siTailwindcss.hex} label="Tailwind CSS" />
                <TechBadge svg={siTypescript.svg} hex={siTypescript.hex} label="TypeScript" />
                <TechBadge svg={siReact.svg} hex={siReact.hex} label="React" />
                <TechBadge svg={siNodedotjs.svg} hex={siNodedotjs.hex} label="Node.js" />
                <TechBadge svg={siExpress.svg} hex={siExpress.hex} label="Express.js" />
                <TechBadge svg={siMongodb.svg} hex={siMongodb.hex} label="MongoDB" />
              </div>
            </div>

            <p className="ml-15 text-gray-500 mt-3 dark:text-white">
              - Developed Influencer Panel using Next.js for frontend and Node.js with Express.js for backend to
              manage influencers onboarding, track campaign performance, and process payouts seamlessly.

            </p>
            <p className="ml-15 text-gray-500 mt-3 dark:text-white">
              - Worked on enhancing the Tap to Record functionality within the platform’s voice-based learning
              interface. I implemented contextual biasing using the Google Speech-to-Text API, which
              significantly improved transcription accuracy for Indian-English pronunciations.

            </p>
            <p className="ml-15 text-gray-500 mt-3 dark:text-white">
              - I also lead the development of an innovative AI Calling Feature where users can communicate with
              AI in real time and get answers of all queries.

            </p>

            
          </div>

          {/* Datacove.ai */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex items-center gap-3">
                <img
                  src="/datacoveai_logo.jpg"
                  alt="Datacove.ai Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Software Developer - I</h3>
                  <p className="text-gray-600 text-sm dark:text-white">Datacove.ai</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm whitespace-nowrap dark:text-white">
                Mar 2024 - Sept 2025
              </p>
            </div>

            <div className="ml-15 mt-4 flex flex-col flex-wrap gap-3">
              <span className="text-md font-semibold dark:text-white">Technologies & Tools</span>
              <div className='flex flex-wrap w-full gap-3'>
                <TechBadge svg={siNextdotjs.svg} hex={siNextdotjs.hex} label="Next.js" />
                <TechBadge svg={siTailwindcss.svg} hex={siTailwindcss.hex} label="Tailwind CSS" />
                <TechBadge svg={siTypescript.svg} hex={siTypescript.hex} label="TypeScript" />
                <TechBadge svg={siReact.svg} hex={siReact.hex} label="React" />
                <TechBadge svg={siNodedotjs.svg} hex={siNodedotjs.hex} label="Node.js" />
                <TechBadge svg={siExpress.svg} hex={siExpress.hex} label="Express.js" />
                <TechBadge svg={siMongodb.svg} hex={siMongodb.hex} label="MongoDB" />
              </div>
            </div>

            <p className="ml-15 text-gray-500 mt-3 dark:text-white">
              - Worked on the Frontend (React.js, Next.js) and Backend (Node.js, Express.js) of a web application
              that powers AI agents.

            </p>
            <p className="ml-15 text-gray-500 mt-3 dark:text-white">
              - Developed user interfaces to manage and interact with AI workflows, improving task handling and
              agent communication.
            </p>
            <p className="ml-15 text-gray-500 mt-3 dark:text-white">
              - Built and maintained APIs for frontend-backend integration, ensuring smooth data flow and realtime updates across the platform
            </p>

           
          </div>
        </div>
      </section>

      <Footer/>

    </div>
    </>
  )
}
