import { FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/Navbar'
import GitHubContributions from '../components/GitHubContributions'
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BorderBeam } from "@/components/ui/border-beam"
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
  siDocker,
  siGit,
  siRedux,
  siTailwindcss,
  siFlutter,
} from "simple-icons/icons";
import TooltipIcon from '@/components/TooltipIcon';
import TechBadge from '@/components/TechBadge';
import Link from 'next/link';

export default function Home() {

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

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Enrich Salon Management",
              description:
                "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
              tech: [
                "React",
                "MUI",
                "Tailwind CSS",
                "Razorpay",
                "Nodemailer",
                "React Charts",
                "Node.js",
                "Express.js",
                "MongoDB",
              ],
              website: "#",
              source: "#",
            },
            {
              title: "Flick.AI",
              description:
                "An AI-powered tool with 200+ users designed to refine your tweets with customizations and make them stand out — because GPT just doesn’t get it.",
              tech: [
                "Next.js",
                "TypeScript",
                "Google Gemini",
                "Prisma",
                "PostgreSQL",
                "NextAuth",
                "Tailwind CSS",
              ],
              website: "#",
              source: "#",
            },
            {
              title: "OrbitToken",
              description:
                "A decentralized platform enabling users to launch custom tokens, transfer tokens, and check balances — all on-chain.",
              tech: ["React", "Web3.js", "TypeScript", "Recoil", "spl-token", "Tailwind CSS"],
              website: "#",
              source: "#",
            },
            {
              title: "GhostGram – SaaS platform",
              description:
                "An anonymous messaging platform where users securely send and receive messages via unique, authenticated links.",
              tech: [
                "Next.js",
                "TypeScript",
                "Gemini",
                "MongoDB",
                "NextAuth",
                "Nodemailer",
                "Tailwind CSS",
                "Shadcn",
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
      </section>

      <section id="work" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Projects</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Enrich Salon Management",
              description:
                "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
              tech: [
                "React",
                "MUI",
                "Tailwind CSS",
                "Razorpay",
                "Nodemailer",
                "React Charts",
                "Node.js",
                "Express.js",
                "MongoDB",
              ],
              website: "#",
              source: "#",
            },
            {
              title: "Flick.AI",
              description:
                "An AI-powered tool with 200+ users designed to refine your tweets with customizations and make them stand out — because GPT just doesn’t get it.",
              tech: [
                "Next.js",
                "TypeScript",
                "Google Gemini",
                "Prisma",
                "PostgreSQL",
                "NextAuth",
                "Tailwind CSS",
              ],
              website: "#",
              source: "#",
            },
            {
              title: "OrbitToken",
              description:
                "A decentralized platform enabling users to launch custom tokens, transfer tokens, and check balances — all on-chain.",
              tech: ["React", "Web3.js", "TypeScript", "Recoil", "spl-token", "Tailwind CSS"],
              website: "#",
              source: "#",
            },
            {
              title: "GhostGram – SaaS platform",
              description:
                "An anonymous messaging platform where users securely send and receive messages via unique, authenticated links.",
              tech: [
                "Next.js",
                "TypeScript",
                "Gemini",
                "MongoDB",
                "NextAuth",
                "Nodemailer",
                "Tailwind CSS",
                "Shadcn",
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
      </section>

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
                  src="/logos/englishbhashi.png"
                  alt="English Bhashi Logo"
                  className="w-8 h-8 rounded-full object-cover"
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

            
            <div className="ml-11 mt-4 flex flex-col flex-wrap gap-3">
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

            <p className="ml-11 text-gray-500 mt-3 dark:text-white">
              Working on building scalable backend services and designing intuitive UIs for the
              platform. Implemented authentication, API integrations, and optimized database
              queries for performance improvements.
            </p>

            
          </div>

          {/* Datacove.ai */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/datacove.png"
                  alt="Datacove.ai Logo"
                  className="w-8 h-8 rounded-full object-cover"
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

            <div className="ml-11 mt-4 flex flex-col flex-wrap gap-3">
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

            <p className="ml-11 text-gray-500 mt-3 dark:text-white">
              Contributed to developing AI-driven analytics dashboards and automated data pipelines.
              Collaborated with cross-functional teams to deploy production-ready features and
              maintain system stability.
            </p>

           
          </div>
        </div>
      </section>

      <Footer/>

    </div>
    </>
  )
}
