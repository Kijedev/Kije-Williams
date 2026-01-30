import { useState, useEffect } from "react";
import BackBtn from "../components/BackBtn";
import { motion } from "framer-motion";

const Jeton = () => {
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
    <div className="bg-gradient-to-br from-black via-[#111] to-black text-[#ECE7E1] h-screen">
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
                Jeton
              </h1>
              <p className="text-neutral-500 text-lg">
                A mobile banking application that helps users manage their finances.
              </p>

              <h2 className="border-l-2 border-red-500 pl-4 mt-10 text-xl lg:text-2xl">
                My Role & Contributuions
              </h2>
            </header>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Jeton;
