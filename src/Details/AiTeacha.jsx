import { useState, useEffect } from "react";
import BackBtn from "../components/BackBtn";
import { motion } from "framer-motion";
import { TbChevronsRight } from "react-icons/tb";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";

const AiTeacha = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const responsibilities = [
    {
      description:
        "Developed/Designed core pages like 'Homepage, Teacher Dashboard, Student Dashboard, AI Tools'.",
    },
    {
      description:
        "Integrated REST APIs for classroom operations including automated pre-tests and student progress tracking.",
    },
    {
      description:
        "Rebuilt the Tools Page architecture for scalability and cleaner UI/UX, cutting tool load time and enhancing user task efficiency.",
    },
    {
      description:
        "Converted Figma designs into reusable, accessible, pixel-perfect components.",
    },
    {
      description:
        "Delivered the upgraded platform ahead of schedule, supporting a successful internal demo and beta rollout.",
    },
    {
      description:
        "Participated in agile sprint planning, code reviews, and testing to maintain product quality and ensure timely delivery.",
    },
    {
      description:
        "Optimized frontend performance through efficient state management, code splitting, and lazy loading, resulting in a reduction in page load times..",
    },
    {
      description: "Worked with Backend developers to Integrate APIs.",
    },
  ];

  const features = [
    {
      title: "Personalized AI training and tool customizations",
    },
    {
      title: "Unlimited chat and resource histories",
    },
    {
      title: "Unlimited number of educators",
    },
    {
      title: "45 advanced, time-saving AI tools",
    },
    {
      title:
        "Generate unlimited AI-powered slides, exportable directly to Microsoft PowerPoint",
    },
    {
      title: "Zyra AI Chatbot",
    },
    {
      title: "Unlimited content generation as you need",
    },
  ];

  const challenges = [
    {
      problem:
        "Problem: The Initial code was not well structured, took me a little time to understand.",
      solution:
        "Solution: I took my time to understand the initial code that was written.",
      outcome:
        "Outcome: I was able to navigate through the code and find the necessary files to make the necessary changes.",
    },
    {
      problem:
        "Problem: Implementing a pre-test api for the students classroom",
      solution:
        "Solution: I implemented a pre-test api for the students classroom using REST APIs.",
      outcome:
        "Outcome: The pre-test api was implemented successfully and the students were able to take pre-tests before joining each classroom.",
    },
    {
      problem: "Problem: Large code base / old code",
      solution:
        "I refactored the code to make it more maintainable and scalable.",
      outcome:
        "The code was refactored successfully and the application was able to run smoothly.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-[#000] to-black text-[#ECE7E1] font-poppins">
      {/* <div className="animate-slideUp h-[100vh] bg-gradient-to-b from-black via-[#111] to-black z-100 relative" /> */}

      <div className="lg:px-0 max-w-7xl mx-auto pt-32">
        <BackBtn />

        <motion.header
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-col gap-5 ml-6 lg:ml-0"
        >
          <h1 className="text-4xl lg:text-8xl font-bold text-white">
            AiTeacha
          </h1>
          <p className="text-neutral-500 text-lg max-w-6xl">
            AiTeacha is an AI-powered educational app that helps teachers reduce
            workload by generating lesson plans, assessments, curricula, and
            handouts in seconds.
          </p>
          <span className="border-l-2 border-red-500 pl-4 text-md lg:text-xl text-neutral-500">
            Stacks Used: React.js, TypeScript, Tailwind CSS, Node.js, React
            Hooks Git/GitHub.
          </span>
        </motion.header>

        <section>
          <h2 className="border-l-2 border-red-500 pl-4 mt-10 text-2xl lg:text-4xl ml-6 lg:ml-0">
            My Role & Contributions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-10 bg-gradient-to-b from-[#111]/10 via-[#000]/50 to-[#111]/10 p-6 rounded-lg">
            {responsibilities.map((responsibility, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/15 p-4 rounded-lg"
              >
                <span className="flex gap-2">
                  <TbChevronsRight className="text-4xl lg:text-2xl" />
                  <p className="text-neutral-500 text-md">
                    {responsibility.description}
                  </p>
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="border-l-2 border-red-500 pl-4 mt-10 text-2xl lg:text-4xl ml-6 lg:ml-0">
            Core Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-b from-[#111]/10 via-[#000]/50 to-[#111]/10 p-6 rounded-lg">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-white/15 p-4 rounded-lg flex items-center justify-center"
              >
                <p className="text-neutral-500 text-center text-md">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="">
          <h2 className="border-l-2 border-red-500 pl-4 mt-10 text-2xl lg:text-4xl ml-6 lg:ml-0">
            Key Challenges & Solutions
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 p-6 bg-gradient-to-br from-[#111]/10 via-[#000]/50 to-[#111]/10">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="border border-white/5 p-4 rounded-lg flex gap-4"
              >
                <span className="flex flex-col">
                  <p className="text-red-500">{challenge.problem}</p>
                  <p className="text-green-500">{challenge.solution}</p>
                  <p className="text-neutral-500">{challenge.outcome}</p>
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex justify-center text-neutral-500"
        >
          ‼️No Link to the Github Project, this is a private repository.
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AiTeacha;
