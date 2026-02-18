import React from "react";
import { Link } from "react-router";
import Icons from "../components/Icons";
import Form from "../components/Form";
import { motion } from "framer-motion";

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

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#111] to-black text-[#ECE7E1] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 py-20">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT SIDE */}
          <motion.aside
            className="flex-1 mt-10 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-[8rem] md:text-[8rem] lg:text-[10rem] leading-none Birthstone"
            >
              Hello!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base md:text-lg text-neutral-400 font-poppins max-w-md"
            >
              Do you need a beautiful, well-structured website that you can own
              and maintain yourself?
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base md:text-lg text-neutral-400 font-poppins"
            >
              Reach me:{" "}
              <Link
                className="text-neutral-300 hover:text-white transition"
                to="mailto:kijewilliams01@gmail.com?subject=Hello%20There&body=I%20want%20to%20create%20a%20website"
              >
                kijewilliams01@gmail.com
              </Link>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="-mt-10 lg:mt-8"
            >
              <Icons />
            </motion.div>
          </motion.aside>

          {/* RIGHT SIDE */}
          <motion.aside
            className="flex-1 w-full"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Form />
          </motion.aside>

        </div>
      </div>
    </section>
  );
};

export default Contact;
