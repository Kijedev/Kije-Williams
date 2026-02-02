import { useState, useEffect } from "react";
import BackBtn from "../components/BackBtn";
import { motion } from "framer-motion";
import { TbChevronsRight } from "react-icons/tb";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Jeton = () => {
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
        "Developed/Designed 100% of the pages.",
    },
    {
      description:
        "Added the currency converter feature.",
    },
  ];

  const features = [
    {
      title: "Global Money Transfers & Payments",
    },
    {
      title: "Multi-Currency Wallet",
    },
    {
      title: "Extensive Payment Methods",
    },
    {
      title: "Real-time Notifications",
    },
    {
      title:
        "Easy Currency Exchange",
    },
    {
      title: "Currency Converter",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-[#000] to-black text-[#ECE7E1] font-poppins">
      <div className="lg:px-0 max-w-7xl mx-auto pt-32">
        <BackBtn />

        <motion.header
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-col gap-5 ml-6 lg:ml-0"
        >
          <h1 className="text-4xl lg:text-8xl font-bold text-white">Jeton</h1>
          <p className="text-neutral-500 text-lg max-w-6xl">
            Jeton is a versatile digital wallet and payment platform that
            enables users to securely send, receive, and store money in over 50
            currencies, offering fast, cross-border transactions.
          </p>
          <span className="border-l-2 border-red-500 pl-4 text-md lg:text-xl text-neutral-500">
            Stacks Used: Next.js, TypeScript, Tailwind CSS, Git/GitHub, React Hooks.
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
                  {/* <TbChevronsRight className="text-4xl lg:text-2xl" /> */}
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

          <div className="mt-10 ml-10 lg:ml-0">
          <p className="text-neutral-600">No challenges faced</p>
          </div>
        </section>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/Kijedev/Jeton"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-[300px] h-[60px] rounded-md border border-white/5
             flex items-center justify-center overflow-hidden
             transition duration-300 active:scale-95"
          >
            <div
              className="relative flex items-center gap-2
               transition-all duration-300 ease-in-out
               group-hover:translate-x-6"
            >
              <FaGithub
                className="text-white text-2xl
                 transition-all duration-300 ease-in-out
                 group-hover:absolute
                 group-hover:left-8
                 group-hover:-translate-x-1/2"
              />
              <span
                className="text-white text-[1.04em] whitespace-nowrap
                 transition-all duration-300 ease-in-out
                 group-hover:opacity-0
                 group-hover:translate-x-4"
              >
                View on GitHub
              </span>
            </div>
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Jeton;
