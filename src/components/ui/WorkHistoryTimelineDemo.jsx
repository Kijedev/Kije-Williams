import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import WorkHistoryTimeline from "../../components/ui/WorkHistoryTimeline";
import { Timeline } from "gsap/gsap-core";
import ShowMoreText from "../ShowMoreText";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function WorkHistoryTimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid lg:grid-cols-1 gap-6">
            {[
              {
                title: "AiTeacha",
                role: "Frontend Engineer (On-Site)",
                Timeline: "Oct 2025 - Nov 2025 (Lagos, Nigeria)",
                desc: "I helped with the redesign of the AiTeacha learning platform transforming an outdated interface into a high-performance, responsive web app that improved user retention by 35 percent and reduced navigation time by 40 percent. I designed and implemented major product interfaces including the homepage, teacher dashboard, student dashboard, and AI tools using React.js, TypeScript, and Tailwind CSS, and collaborated with backend engineers to integrate RESTful APIs for classroom operations such as automated pre test generation and progress tracking. I rebuilt the tools page architecture to improve scalability and UI and UX, cutting load time by 50 percent and boosting user efficiency, and partnered with designers to convert Figma prototypes into pixel perfect, reusable React components with responsive layouts and accessibility in mind. I also optimized frontend performance with efficient state management, code splitting, and lazy loading, reducing page load times by 30 percent. Throughout the project I participated in agile sprint planning, code reviews, and testing to maintain product quality and ensure timely delivery. The upgraded platform was delivered ahead of schedule, supporting a strong internal demo and beta rollout, and the work leveraged React.js, TypeScript, Tailwind CSS, Axios, and Git and GitHub.",
              },
              {
                title: "WebInfluencers",
                role: "Junior Software Developer (Remote)",
                Timeline: "June 2025 - Jan 2026 (United Arab Emirates, Dubai)",
                desc: "I collaborated with a Senior Developer to build Imo Talent Hub, a React.js web application for the Imo State Government that serves over 100,000 users seeking tech skills, and also contributed to the development of the FindExperts web application using React.js. I worked on the Eye on Imo website, an investment performance platform that helps the citizens of Imo State make informed investment decisions. In addition, I managed and updated all Techsoma Blog websites (techsoma.me, techsoma.africa, techsoma.ca) with WordPress, which drove a 15% increase in monthly traffic through consistent updates and optimizations. I designed and developed the FindBlack Experts website with WordPress and Elementor, creating a fully responsive and SEO-friendly platform that improved search rankings, and also built a custom WordPress template from scratch for the redesigned Techsoma websites, enhancing site speed by 25% while delivering a cohesive brand experience. Furthermore, I maintained and optimized a client’s WordPress e-commerce store (Afromaya), resulting in an 8% improvement in page load time and higher sales conversions.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="block cursor-pointer">
                  <h1 className="text-white font-bold text-3xl mt-3">
                    {item.title}
                  </h1>
                  <p className="mt-2">{item.role}</p>
                  <p className="mt-2">{item.Timeline}</p>
                  <ShowMoreText text={item.desc} maxLength={240} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ),
    },

    {
      title: "2024",
      content: (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid lg:grid-cols-1 gap-6">
            {[
              {
                title: "Positivus",
                role: "Frontend Developer (Contract)",
                Timeline: "Feb 2024 (Lagos, Nigeria)",
                desc: "I developed a frontend web application for a digital agency serving 15+ clients, automating workflows for SEO, PPC, and content services, which significantly improved operational efficiency. I designed a responsive UI using React.js and Tailwind CSS, boosting mobile engagement, and optimized performance to reduce page load time by 15%, driving an increase in inorganic traffic. I also built reusable and scalable components following solid design principles, cutting down future development time, and ensured cross-browser and cross-device compatibility, which reduced UI-related support tickets. Additionally, I executed over 50 unit and integration tests, resolving 90% of bugs pre-launch and ensuring a smooth, stable production rollout.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="block cursor-pointer">
                  <h1 className="text-white font-bold text-3xl mt-3">
                    {item.title}
                  </h1>
                  <p className="mt-2">{item.role}</p>
                  <p className="mt-2">{item.Timeline}</p>
                  <ShowMoreText text={item.desc} maxLength={240} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ),
    },

    {
      title: "2023",
      content: (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid lg:grid-cols-1 gap-6">
            {[
              {
                title: "Taoltech",
                role: "Frontend Developer (Remote)",
                Timeline: "Aug 2023 - Dec 2024 (Lagos, Nigeria)",
                desc: "I helped develop a secure Electronic Medical Record (EMR) system used by 100+ healthcare professionals across 20+ clinics, improving patient data access and workflow efficiency. I built a compliant and accessible UI in React.js that streamlined doctor workflows and reduced form errors, while applying performance best practices that cut page load times by half. I also delivered interactive features such as patient search and record filters, boosting task efficiency by 50%. To ensure reliability, I conducted cross-browser testing and resolved UI/UX inconsistencies. Working closely with cross-functional teams, we launched the system ahead of schedule and fully met client requirements.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="block cursor-pointer">
                  <h1 className="text-white font-bold text-3xl mt-3">
                    {item.title}
                  </h1>
                  <p className="mt-2">{item.role}</p>
                  <p className="mt-2">{item.Timeline}</p>
                  <ShowMoreText text={item.desc} maxLength={240} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <WorkHistoryTimeline data={data} />
    </div>
  );
}

export default WorkHistoryTimelineDemo;
