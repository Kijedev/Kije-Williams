import BackBtn from "../components/BackBtn";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";

const Techsoma = () => {
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
        "Changed the entire design of the website from the old to the current.",
    },
    {
      description:
        "Migrated the website from the old design to the current design.",
    },
    {
      description:
        "Installed Plugins like WP Rocket to improve the speed and optimization of the website.",
    },
    {
      description:
        "Worked on the SEO Optimization of the website by Installing Plugins like Yoast SEO to impprove the ranking on Google.",
    },
  ];

  const features = [
    {
      title: "Reading and staying up-to-date on the latest Tech News / Trend.",
    },
  ];

  const challenges = [
    {
      problem: "Problem: Didnt have the knowledge of Wordpress.",
      solution:
        "Solution: I had to learn Wordpress to be able to make the necessary design changes and configuration.",
      outcome:
        "Outcome: I was able to successfully design and migrate the website from the old design to the new design.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-[#111] to-black text-[#ECE7E1] font-poppins">
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
            Techsoma Africa
          </h1>
          <p className="text-neutral-500 text-lg max-w-6xl">
            Your ultimate source for insights on Africa’s thriving tech
            ecosystem. Explore transformative startups, innovative solutions,
            and the latest developments shaping the continent’s economic future.
            From fintech to agritech, stay connected to the pulse of Africa’s
            technological advancement.
          </p>
          <span className="border-l-2 border-red-500 pl-4 text-md lg:text-xl text-neutral-500">
            Stacks Used: Wordpress, Elementor, WP Bakery.
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
                className="border border-white/15 p-4 rounded-lg flex items-center justify-left"
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
              <span className="flex flex-col gap-2">
                <p className="text-red-500">{challenge.problem}</p>
                <p className="text-green-500">{challenge.solution}</p>
                <p className="text-neutral-500">{challenge.outcome}</p>
              </span>
            </motion.div>
          ))}
        </section>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex justify-center text-neutral-500"
        >
          ‼️This is a Wordpress Project.
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Techsoma;
