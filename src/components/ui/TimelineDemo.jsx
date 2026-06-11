import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Timeline from "../../components/ui/Timeline";
// Icons
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// Images
import AiTeacha from "../../Image/aiteacha.png";
import WebInfluencers from "../../Image/WebInfluencers.png";
import Imotalenthub from "../../Image/imotalenthub.png";
import Eyeonimo from "../../Image/eyeonimo.png";
import Techsoma from "../../Image/techsomaafrica.png";
import Techsomame from "../../Image/techsomame.png";
import Positivus from "../../Image/positivus.png";
import Echo from "../../Image/echo.png";
import Unsplash from "../../Image/Unsplash.png";
import grocerly from "../../Image/grocerly1.png";
import Spotify from "../../Image/spotify.jpeg";
import Jeton from "../../Image/jeton.png";
import Pumpay from "../../Image/pumpay.png";
import Ekhostudios from "../../Image/ekhostudios.png";

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
                img: Pumpay,
                title: "Pumpay",
                link: "https://pumpay.co",
                // github: "https://github.com/Kijedev/jeton",
                details: "/pumpay",
                live: true,
                desc: "Pumpay is a Fuel Delivery Service that allows users to conveniently order fuel to be delivered directly to their location, providing a hassle-free and efficient fueling experience.",
              },
              {
                img: Ekhostudios,
                title: "Ekhostudios",
                link: "https://ekhostudios.co",
                github: "https://github.com/Kijedev/Ken-williams-portfolio",
                details: "/ekhostudios",
                live: true,
                desc: "Ekhostudios is a creative agency that specializes creating cinematic product videos.",
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
              // {
              //   img: Jeton,
              //   title: "Jeton",
              //   link: "https://jetonn.netlify.app/",
              //   github: "https://github.com/Kijedev/jeton",
              //   details: "/jeton",
              //   desc: "Jeton is a versatile digital wallet and payment app that enables users to securely store, send, receive, and exchange money in multiple currencies worldwide.",
              // },
              // {
              //   img: WebInfluencers,
              //   title: "WebInfluencers",
              //   link: "https://www.webinfluencers.org/",
              //   github: "https://github.com/Kijedev/webinfluencers",
              //   details: "/webinfluencers",
              //   live: true,
              //   desc: "Strategic communications, AI innovation, talent platforms, and media publishing.",
              // },
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
                desc: "Insights on Africa's thriving tech ecosystem.",
              },
              {
                img: Techsomame,
                title: "Techsoma Middle East",
                link: "https://www.techsoma.africa/",
                details: "/techsomame",
                live: true,
                desc: "Insights on the Middle East's thriving tech ecosystem.",
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
                <div className="relative overflow-hidden rounded-xl">
                  {item.live && (
                    <span className="absolute top-2 left-[-45px] z-10 bg-red-600 text-white text-xs font-semibold px-12 py-1 rotate-[-45deg] shadow-lg ">
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
                <p className="text-sm mt-2 text-neutral-600 font-poppins">
                  {item.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <Link
                    to={item.link}
                    target="_blank"
                    className="font-poppins flex items-center gap-2 cursor-pointer text-neutral-600 text-sm border border-white/10 px-4 py-2 rounded-md hover:bg-white/10 hover:text-white transition-colors duration-300"
                  >
                    Preview
                    <FaExternalLinkAlt />
                  </Link>
                  <Link
                    to={item.details}
                    className="font-poppins flex items-center gap-2 cursor-pointer text-neutral-600 text-sm border border-white/10 px-4 py-2 rounded-md hover:bg-white/10 hover:text-white transition-colors duration-300"
                  >
                    More Details
                    <FaRegEyeSlash />
                  </Link>
                </div>
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
                github: "https://github.com/Kijedev/Grocerly",
                details: "/grocerly",
                desc: "Grocerly is a React Native e-commerce app that helps users easily shop for and purchase grocery items.",
              },
              // {
              //   img: Spotify,
              //   title: "Spotify Wrapped",
              //   github:
              //     "https://github.com/Kijedev/spotify-wrapped/tree/spotify",
              //   details: "/spotify-wrapped",
              //   desc: "Re-Built my Spotify Wrapped app with a modern UI and animations.",
              // },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
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

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <Link
                    to={item.github}
                    target="_blank"
                    className="font-poppins flex items-center gap-2 cursor-pointer text-neutral-600 text-sm border border-white/10 px-4 py-2 rounded-md hover:bg-white/10 hover:text-white transition-colors duration-300"
                  >
                    Github
                    <FaGithub />
                  </Link>
                  <Link
                    to={item.details}
                    className="font-poppins flex items-center gap-2 cursor-pointer text-neutral-600 text-sm border border-white/10 px-4 py-2 rounded-md hover:bg-white/10 hover:text-white transition-colors duration-300"
                  >
                    More Details
                    <FaRegEyeSlash />
                  </Link>
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
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
