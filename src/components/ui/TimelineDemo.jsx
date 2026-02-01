import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Timeline from "../../components/ui/Timeline";
// Icons
import { FaGithub } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// Images
import AiTeacha from "../../Image/aiteacha.png";
import WebInfluencers from "../../Image/WebInfluencers.png";
import Imotalenthub from "../../Image/imotalenthub.png";
import Eyeonimo from "../../Image/eyeonimo.png";
import Techsoma from "../../Image/techsomaafrica.png";
import Positivus from "../../Image/positivus.png";
import Echo from "../../Image/echo.png";
import Unsplash from "../../Image/Unsplash.png";
import grocerly from "../../Image/grocerly1.png";
import Spotify from "../../Image/spotify.jpeg";
import Jeton from "../../Image/jeton.png";

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

export function TimelineDemo() {
  const data = [
    {
      title: "Web Apps",
      content: (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-y-10 gap-x-6">
            {[
              {
                img: Jeton,
                title: "Jeton",
                link: "https://jetonn.netlify.app/",
                github: "https://github.com/Kijedev/jeton",
                details: "/jeton",
                desc: "Jeton is a versatile digital wallet and payment app that enables users to securely store, send, receive, and exchange money in multiple currencies worldwide.",
              },
              {
                img: AiTeacha,
                title: "AiTeacha",
                link: "https://www.aiteacha.com/",
                github: "https://github.com/Dongido/AITeacha_v3_design",
                details: "/aiteacha",
                live: true,
                desc: "Built with AI tools to aid teachers day-to-day tasks and improve student outcomes.",
              },
              {
                img: WebInfluencers,
                title: "WebInfluencers",
                link: "https://www.webinfluencers.org/",
                github: "https://github.com/Kijedev/webinfluencers",
                details: "/webinfluencers",
                live: true,
                desc: "Strategic communications, AI innovation, talent platforms, and media publishing.",
              },
              {
                img: Imotalenthub,
                title: "Imo Talent-Hub",
                link: "https://www.imotalenthub.com/",
                github: "https://github.com/Kijedev/imotalenthub",
                details: "/imotalenthub",
                live: true,
                desc: "Connecting Imo’s brightest minds with global opportunities.",
              },
              {
                img: Eyeonimo,
                title: "Eyeonimo",
                link: "https://www.eyeonimo.com/",
                github: "https://github.com/Kijedev/eyeonimo",
                details: "/eyonimo",
                live: true,
                desc: "Nigeria’s premier investment destination in the Eastern Region.",
              },
              {
                img: Techsoma,
                title: "Techsoma Africa",
                link: "https://www.techsoma.africa/",
                details: "/techsoma",
                live: true,
                desc: "Insights on Africa’s thriving tech ecosystem.",
              },
              {
                img: Positivus,
                title: "Positivus",
                link: "https://positivusco.netlify.app/",
                github: "https://github.com/Kijedev/positivus",
                details: "/positivus",
                desc: "A digital marketing agency website focused on growth.",
              },
              {
                img: Echo,
                title: "Echo",
                link: "https://echoomusicapp.netlify.app/",
                github: "https://github.com/Kijedev/echo",
                details: "/echo",
                desc: "An uninterrupted music streaming experience.",
              },
              {
                img: Unsplash,
                title: "Unsplash Web",
                link: "https://kijeunsplash.netlify.app/",
                github: "https://github.com/Kijedev/unsplash",
                details: "/unsplash",
                desc: "A sophisticated Unsplash-style image gallery app.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={item.link}
                  target="_blank"
                  className="block cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    {item.live && (
                      <span
                        className="absolute top-2 left-[-45px] z-10 bg-red-600 text-white text-xs font-semibold px-12 py-1 rotate-[-45deg] shadow-lg "
                      >
                        <p className="animate-pulse"> LIVE</p>
                      </span>
                    )}

                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h1 className="text-white font-bold text-3xl mt-3 font-poppins">
                    {item.title}
                  </h1>
                </Link>

                <div>
                  <p className="text-sm mt-2 text-neutral-600 font-poppins">
                    {item.desc}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <Link
                    to={item.github}
                    target="_blank"
                    className="font-poppins flex items-center gap-2 cursor-pointer text-neutral-600 text-sm border border-white/10 px-4 py-2 rounded-md hover:bg-white/10 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub />
                    Github
                  </Link>
                  <Link
                    to={item.details}
                    className="font-poppins flex items-center gap-2 cursor-pointer text-neutral-600 text-sm border border-white/10 px-4 py-2 rounded-md hover:bg-white/10 hover:text-white transition-colors duration-300"
                  >
                    <FaRegEyeSlash />
                    More Details
                  </Link>
                </div>
                {/* <hr className="border-white/10 mt-5 mb-5" /> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ),
    },

    {
      title: "Mobile Apps",
      content: (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                img: grocerly,
                title: "Grocerly",
                link: "https://github.com/Kijeosowo/Grocerly",
                github: "https://github.com/Kijeosowo/Grocerly",
                desc: "A grocery delivery app built with Expo and React Native.",
              },
              {
                img: Spotify,
                title: "Spotify Wrapped",
                link: "https://github.com/Kijedev/spotify-wrapped/tree/spotify",
                github:
                  "https://github.com/Kijedev/spotify-wrapped/tree/spotify",
                desc: "A Spotify Wrapped clone with original UI and animations.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={item.link}
                  target="_blank"
                  className="block cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                  <h1 className="text-white font-bold text-3xl mt-3">
                    {item.title}
                  </h1>
                  <p className="text-sm mt-2 text-neutral-600">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
