import { FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/Navbar'
import GitHubContributions from '../components/GitHubContributions'
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

export default function Home() {

  const skills = [
    'JavaScript', 'TypeScript', 'Next.js', 'React', 
    'Prisma', 'MongoDB', 'PostgreSQL', 'Supabase',
    'MySQL', 'Turborepo', 'Docker', 'AWS',
    'Redux', 'Tailwind CSS', 'Node.js', 'Express.js',
    'Git'
  ];

  return (
    <>
    <Navbar />
    <div className="font-sans max-w-4xl mx-auto px-5 py-8">
      <header id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative mb-12">
        {/* Social Media Icons */}
        <div className="absolute top-5 right-5 flex gap-8">
          <a href="https://x.com/adityatwt_" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition">
            <FaXTwitter className="text-black text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/adityabansal3403/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition">
            <FaLinkedin className="text-black text-xl" />
          </a>
          <a href="https://github.com/Aditya3403" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
            <FaGithub className="text-black text-xl" />
          </a>
        </div>

        <div className="max-w-2xl px-4 flex flex-col items-center">

          <img 
            src="/profile.jpg" 
            alt="Aditya Bansal" 
            className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
          />

          <h1 className="text-4xl font-bold mb-4">Hi, I'm Aditya</h1>
          <p className="text-lg leading-relaxed mb-6">
            19, I break things, learn fast, and make shit happen. deep into code and cs; anything that pushes the limits. 
            history, curiosity, cricket, and great books shaped me. still chasing mastery.
          </p>
          <p className="mb-8">If you're working on something real, let's talk.</p>
          <div className="flex gap-3 justify-center">
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
              Book a meet
            </button>
            <button className="border border-black px-4 py-2 rounded-md text-sm font-medium">
              Get in touch
            </button>
          </div>
        </div>
      </header>


      {/* Proof of Work */}
      <section id="work" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Proof of Work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[ 
            {
              title: "Enrich Salon Management",
              description: "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
              tech: ["React", "MUI", "Tailwind CSS", "Razorpay", "Nodemailer", "React Charts", "Node.js", "Express.js", "MongoDB"],
              website: "#",
              source: "#"
            },
            {
              title: "Flick.AI",
              description: "An AI-powered tool with 200+ users designed to refine your tweets with customizations and make them stand out — because GPT just doesn’t get it.",
              tech: ["Next.js", "TypeScript", "Google Gemini", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
              website: "#",
              source: "#"
            },
            {
              title: "OrbitToken",
              description: "A decentralized platform enabling users to launch custom tokens, transfer tokens, and check balances — all on-chain.",
              tech: ["React", "Web3.js", "TypeScript", "Recoil", "spl-token", "Tailwind CSS"],
              website: "#",
              source: "#"
            },
            {
              title: "GhostGram – SaaS platform",
              description: "An anonymous messaging platform where users securely send and receive messages via unique, authenticated links.",
              tech: ["Next.js", "TypeScript", "Gemini", "MongoDB", "NextAuth", "Nodemailer", "Tailwind CSS", "Shadcn"],
              website: "#",
              source: "#"
            }
          ].map((work, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold">{work.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{work.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 text-xs">
                {work.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border px-2 py-1 rounded-md text-gray-700 bg-gray-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                <a
                  href={work.website}
                  className="flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-md"
                >
                  <BsGlobe className="text-white text-md" /> Website
                </a>
                <a
                  href={work.source}
                  className="flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-md"
                >
                  <FaGithub className="text-white text-md" /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>

        <div className="space-y-8">
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
                  <h3 className="font-bold text-lg">Fullstack Engineer</h3>
                  <p className="text-gray-600 text-sm">English Bhashi</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm whitespace-nowrap">
                Aug 2024 - Present
              </p>
            </div>

            <p className="ml-11 text-gray-500 mt-3">
              Working on building scalable backend services and designing intuitive
              UIs for the platform. Implemented authentication, API integrations, and
              optimized database queries for performance improvements.
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
                  <h3 className="font-bold text-lg">Software Developer - I</h3>
                  <p className="text-gray-600 text-sm">Datacove.ai</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm whitespace-nowrap">
                Mar 2024 - Sept 2025
              </p>
            </div>

            <p className="ml-11 text-gray-500 mt-3">
              Contributed to developing AI-driven analytics dashboards and automated
              data pipelines. Collaborated with cross-functional teams to deploy
              production-ready features and maintain system stability.
            </p>
          </div>
        </div>
      </section>


      {/* GitHub Contributions */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-6">GitHub Contributions</h2>
        <div className="overflow-x-auto">
          <GitHubContributions />
        </div>
      </section>

      <div className="bg-transparent p-8">
      <section className="mb-16" id="skills">
        <h2 className="text-black text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>

      <footer className="text-center text-gray-500 py-8">
        Designed and Developed by{" "}
        <a
          href="https://twitter.com/adityatwt_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          @adityatwt_
        </a>
      </footer>

    </div>
    </>
  )
}
