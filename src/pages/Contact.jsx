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
    <section className="bg-gradient-to-br from-black via-[#111] to-black text-[#ECE7E1]">
      <div className="animate-slideUp lg:h-[100vh] h-[100vh] bg-gradient-to-br from-black via-[#111] to-black relative z-100"></div>

      <div className="lg:flex lg:justify-around lg:items-center lg:ml-20 lg:mt-[-100vh] lg:h-[100vh] -mt-[100vh] md:mt-[-70%] md:ml-[5%] ml-5 mr-5">
        <motion.aside
          className="flex gap-5 mt-20 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col">
            <motion.h1
              variants={itemVariants}
              className="text-[#ECE7E1] lg:text-[12rem] md:text-[10rem] text-[7rem] Birthstone"
            >
              Hello!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="dark:text-neutral-600 text-lg font-poppins"
            >
              Do you need a beautiful, well-structured website that <br />
              you can own and maintain yourself?
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-3 dark:text-neutral-600 text-lg font-poppins"
            >
              Reach me:{" "}
              <Link
                className="dark:text-neutral-500 font-poppins"
                to="mailto:kijewilliams01@gmail.com?subject=Hello%20There&body=I%20want%20to%20create%20a%20website"
              >
                @kijewilliams01@gmail.com
              </Link>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="-mt-[20%] md:ml-[-60%] lg:mt-5 -ml-[50%] lg:ml-0"
            >
              <Icons />
            </motion.div>
          </div>
        </motion.aside>

        <motion.aside
          className="lg:mt-0 -mt-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Form />
        </motion.aside>

        <br />
      </div>
    </section>
  );
};

export default Contact;
