import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const Footercta = () => {
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
    <section className="bg-black py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="
            mx-auto
            max-w-4xl
            flex flex-col
            items-center
            text-center
            gap-6
            sm:gap-8
            px-6 sm:px-10 lg:px-16
            py-12 sm:py-14 lg:py-16
            rounded-3xl
            border border-white/20
          "
          variants={popupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text */}
          <div className="space-y-3 sm:space-y-4 font-poppins">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-light text-gray-200 max-w-xl">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-sm sm:text-base lg:text-xl text-neutral-400">
              Let’s create something amazing
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="
              inline-flex items-center gap-2
              px-6 sm:px-8
              py-3
              text-sm sm:text-base
              bg-white text-black
              rounded-md
              hover:bg-[#ECE7E1]
              transition-colors duration-300
              group
            "
          >
            Let’s Work Together
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Footercta;
