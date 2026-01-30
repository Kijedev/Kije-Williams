import { useState, useEffect } from "react";
import BackBtn from "../components/BackBtn";
import { motion } from "framer-motion";
import { TbChevronsRight } from "react-icons/tb";

const AiTeacha = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
  ];

  const features = [
    {
      title: "AI Lesson Plan Generator",
    },
    {
      title: "Assessment & Exam Generator",
    },
    {
      title: "Scheme of Work Generator",
    },
    {
      title: "Digital Lesson Notes",
    },
    {
      title: "Virtual Classroom & Support",
    },
    {
      title: "Zyra AI Chatbot",
    },
    {
      title: "PowerPoint Generator",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-[#111] to-black text-[#ECE7E1]">
      <div className="animate-slideUp h-[100vh] bg-gradient-to-b from-black via-[#111] to-black z-100 relative" />

      {showContent && (
        <>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="px-6 lg:px-0 max-w-7xl mx-auto lg:mt-[-80vh] mt-[-85vh]"
          >
            <BackBtn />

            <header className="mt-10 flex flex-col gap-5">
              <h1 className="text-4xl lg:text-8xl font-bold text-white">
                AiTeacha
              </h1>
              <p className="text-neutral-500 text-lg max-w-2xl">
                An EdTech platform that uses different AI tools to aid teachers
                day-to-day tasks and improve student outcomes.
              </p>

              <h1 className="border-l-2 border-red-500 pl-4 mt-10 text-xl lg:text-xl">
                Stacks Used: React.js, TypeScript, Tailwind CSS, Axios,
                Git/GitHub.
              </h1>

              <div>
                <h2 className="border-l-2 border-red-500 pl-4 mt-10 text-xl lg:text-2xl">
                  My Role & Contributuions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 bg-gradient-to-b from-[#111] via-[#000] to-[#111] p-6 rounded-lg">
                  {responsibilities.map((responsibility, index) => {
                    return (
                      <div
                        key={index}
                        className="border border-white/15 p-4 rounded-lg"
                      >
                        <span className="flex gap-2">
                          <TbChevronsRight className="text-2xl" />
                          <p className="text-neutral-500 text-md">
                            {responsibility.description}
                          </p>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="border-l-2 border-red-500 pl-4 mt-10 text-xl lg:text-2xl">
                  Core Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 bg-gradient-to-b from-[#111] via-[#000] to-[#111] p-6 rounded-lg">
                  {features.map((feature, index) => {
                    return (
                      <div
                        key={index}
                        className="border border-white/15 p-4 rounded-lg h-20 w-full flex items-center justify-center"
                      >
                        <span className="flex">
                          {/* <TbChevronsRight className="text-2xl" /> */}
                          <p className="text-neutral-500 text-center text-md">
                            {feature.title}
                          </p>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </header>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default AiTeacha;
