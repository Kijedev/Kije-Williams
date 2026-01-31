import { useState } from "react";
import { motion } from "framer-motion";
import WebInfluencers from "../Image/WebInfluencers.png";
import Imotalenthub from "../Image/imotalenthub.png";
import Eyeonimo from "../Image/eyeonimo.png";
import Techsoma from "../Image/techsomaafrica.png";
import Positivus from "../Image/positivus.png";
import Unsplash from "../Image/Unsplash.png";
import grocerly from "../Image/grocerly1.png";
import AiTeacha from "../Image/aiteacha.png";

const projects = [
  {
    id: 1,
    type: "web",
    image: AiTeacha,
    title: "AiTeacha",
    description:
      "Built with all AI tools to aid teachers day-to-day tasks to improve students outcome",
    techStack: ["React.js", "TailwindCSS", "Framer Motion"],
    link: "https://www.aiteacha.com/",
    github: "https://github.com/Kijeosowo",
  },
  {
    id: 1,
    type: "web",
    image: WebInfluencers,
    title: "WebInfluencers",
    description:
      "From strategic communications and AI innovation to talent platforms and media publishing",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://www.webinfluencers.org/",
    github: "https://github.com/Kijeosowo",
  },
  {
    id: 2,
    type: "web",
    image: Imotalenthub,
    title: "Imo Talent Hub",
    description: "Connecting Imo's brightest minds with global opportunities",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://www.imotalenthub.com/",
    github: "https://github.com/Kijeosowo",
  },
  {
    id: 3,
    type: "web",
    image: Eyeonimo,
    title: "Eyeonimo",
    description:
      "Nigeria's Premier Investment Destination in the Heart of the Eastern Region",
    techStack: ["Next.js", "Sanity.io", "TailwindCSS"],
    link: "https://www.eyeonimo.com/",
    github: "https://github.com/Kijeosowo",
  },
  {
    id: 4,
    type: "web",
    image: Techsoma,
    title: "Techsoma Africa",
    description:
      "Your ultimate source for insights on Africa’s thriving tech ecosystem. Explore transformative startups, innovative solutions, and the latest developments shaping the continent’s economic future.",
    techStack: ["Wordpress", "Elementor", "JNews"],
    link: "https://www.techsoma.africa/",
    github: "https://github.com/Kijeosowo",
  },
  {
    id: 5,
    type: "web",
    image: Positivus,
    title: "Positivus",
    description:
      "A comprehensive digital marketing agency website that helps businesses grow...",
    techStack: ["React.js", "TailwindCSS", "Framer Motion"],
    link: "https://positivusco.netlify.app/",
    github: "https://github.com/Kijeosowo/Positivus-Website",
  },
  {
    id: 6,
    type: "web",
    image: Unsplash,
    title: "Unsplash Clone (Web)",
    description:
      "A sophisticated image gallery mobile app replicating Unsplash features...",
    techStack: ["React.js", "Tailwindcss", "Unsplash API"],
    link: "https://kijeunsplash.netlify.app/",
    github: "https://github.com/Kijeosowo/Unsplash",
  },
  {
    id: 7,
    type: "mobile",
    image: Unsplash,
    title: "Unsplash Clone (mobile)",
    description:
      "A sophisticated image gallery mobile app replicating Unsplash features...",
    techStack: ["React Native", "Expo", "Tailwindcss", "Unsplash API"],
    link: "https://github.com/Kijeosowo/Unsplash",
    github: "https://github.com/Kijeosowo/Unsplash",
  },
  {
    id: 8,
    type: "mobile",
    image: grocerly,
    title: "Grocerly",
    description:
      "Grocerly is a comprehensive grocery delivery mobile application built with Expo and React Native, designed to provide a seamless online grocery shopping and delivery experience.",
    techStack: [
      "React Native (Expo)",
      "Expo Router",

      "React Query",
      "Google Maps API",
      "Stripe",
      "i18next",
    ],
    link: "https://github.com/Kijeosowo/Grocerly",
    github: "https://github.com/Kijeosowo/Grocerly",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web"); 

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  // Filter projects by tab
  const filteredProjects = projects.filter(
    (project) => project.type === activeTab
  );

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-black via-[#111] to-black text-white"
      id="projects"
    >
      <main className="py-12 lg:py-32 lg:px-20">
        <div className="px-6 py-12">
          {/* Hero */}
          <motion.div
            className="mb-10 text-center"
            variants={popupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My Projects
            </h1>
            <p className="text-lg text-neutral-400">
              A curation of my works across web and mobile development,
              showcasing modern design and cutting-edge technologies.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-12">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-2 ${
                activeTab === "web"
                  ? "border-b-2 border-b-white text-white"
                  : "bg-black/30 text-gray-400 hover:text-white"
              } transition`}
            >
              Web Projects
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-6 py-2 ${
                activeTab === "mobile"
                  ? "border-b-2 border-b-white text-white"
                  : "bg-black/30 text-gray-400 hover:text-white"
              } transition`}
            >
              Mobile Apps
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group border border-[#1A1A1A] rounded-lg hover:-translate-y-2 hover:shadow-2xl transition duration-500 overflow-hidden"
                variants={popupVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 rounded-lg"
                  />
                  <h3 className="text-white text-3xl font-light mb-1 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="dark:text-neutral-500 text-justify text-sm leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-black/20 dark:text-neutral-500 text-xs rounded-md border dark:border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 text-gray-300 hover:bg-stone-800 rounded transition-colors"
                      title="Github"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 dark:text-white hover:text-neutral-400 rounded text-sm border dark:border-neutral-800"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Projects;
