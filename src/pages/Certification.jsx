import { useState } from "react";
import Certificate from "../Image/certificate.png";
import { motion } from "framer-motion";

const Certification = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="certification"
      className="bg-gradient-to-br from-black via-[#111] to-[#111] h-screen"
    >
        <motion.div
          className="text-center space-y-3"
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white pt-32">
            Certification
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 pb-10">
            I'm a Certified Altschool Africa Frontend Engineer
          </p>
        </motion.div>

        {/* Certificate Image */}
        <div className="flex justify-center">
          <motion.img
            src={Certificate}
            alt="certificate"
            className="
              w-full
              max-w-md sm:max-w-lg lg:max-w-xl
              rounded-xl
              shadow-lg lg:px-0 px-2
            "
            variants={popupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
    </section>
  );
};

export default Certification;
