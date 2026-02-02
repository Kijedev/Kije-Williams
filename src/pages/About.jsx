import { useState, useEffect } from "react";
import image from "../Image/profilepic.jpg";
import { Link } from "react-router";
import Download from "../components/Download";
import { motion } from "framer-motion";
import "@fontsource/birthstone";
import Footercta from "../components/Footercta";
import Footer from "../components/Footer";
import WorkHistoryTimelineDemo from "../components/ui/WorkHistoryTimelineDemo";

const About = () => {
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

  return (
    <section className="bg-black text-neutral-500 font-poppins">
      {/* Intro slide */}
      <div className="animate-slideUp h-[100vh] bg-gradient-to-br from-black via-[#111] to-black z-50" />

      {showContent && (
        <>
          {/* Header */}
          <motion.header
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="px-6 lg:px-24 lg:mt-[-90vh] mt-[-95vh]"
          >
            <h1 className="text-[5rem] text-white font-light md:text-8xl mt-10 md:mt-20 lg:mt-10 lg:text-[10rem] Birthstone">
              About
            </h1>
          </motion.header>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-24">
            {/* Text */}
            <aside className="lg:py-10">
              <div className="flex flex-col gap-6 text-sm md:text-base lg:text-md leading-6 lg:leading-[25px] text-stone-800">
                <p className="text-justify text-white/30 lg:text-[1.2rem] flex flex-col gap-1">
                  <motion.span
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, delay: 0.3 }}
                  >
                    As a passionate Frontend Web Developer with 3 years of
                    experience, I specialize in transforming complex ideas into
                    seamless, user-centric web experiences. My expertise spans
                    technologies like{" "}
                    
                      HTML, CSS, Tailwind CSS, JavaScript, React.js, React
                      Native, TypeScript, Vue.js
                    
                    , and version control systems such as Git and GitHub.
                  </motion.span>

                  <br />

                  <motion.span
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, delay: 0.7 }}
                  >
                    I excel at building responsive, high-performance websites
                    that not only look exceptional but also function flawlessly
                    across various devices and browsers. I thrive in
                    collaborative environments, working closely with designers,
                    backend developers, and product managers to deliver
                    innovative solutions that align with user needs and business
                    goals.
                  </motion.span>

                  <br />

                  <motion.span
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, delay: 1.1 }}
                  >
                    With a commitment to continuous learning, I stay updated on
                    industry trends to leverage the latest technologies and best
                    practices. My focus on writing clean, maintainable code and
                    following agile methodologies ensures efficient and
                    effective project delivery.
                  </motion.span>

                  <br />

                  <motion.span
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, delay: 1.5 }}
                  >
                    I am eager to contribute to dynamic teams, bring fresh
                    perspectives to frontend development challenges, and create
                    impactful digital experiences. Feel free to{" "}
                    <Link to="/contact" className="underline font-bold">
                      reach out
                    </Link>{" "}
                    if you will like to discuss web development, industry
                    trends, or potential collaboration opportunities!
                  </motion.span>
                </p>
              </div>
            </aside>

            {/* Image */}
            <motion.aside
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center"
            >
              <img
                src={image}
                className="lg:w-full lg:max-w-md h-auto rounded-lg"
                alt="Profile"
              />
            </motion.aside>
          </div>

          {/* Work History */}
          <div className="mt-10">
            <WorkHistoryTimelineDemo />
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Download />
          </motion.div>

          <Footercta />
          <Footer />
        </>
      )}
    </section>
  );
};

export default About;
