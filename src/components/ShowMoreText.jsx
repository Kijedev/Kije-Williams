import { useState } from "react";
import { motion } from "framer-motion";

function ShowMoreText({ text, collapsedHeight = 160 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative mt-4">
      <motion.div
        animate={{
          height: expanded ? "auto" : collapsedHeight,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-lg p-5"
      >
        <p className="text-sm md:text-md text-neutral-600 dark:text-neutral-500 leading-relaxed">
          {text}
        </p>

        {!expanded && (
          <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-black/60 via-black/60 to-black/60 backdrop-blur-md" />
        )}
      </motion.div>

      {/* Show more / less button */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="relative z-10 flex items-center gap-1.5 rounded-md bg-white/5 px-4 py-1.5 text-sm text-neutral-600 font-semibold dark:text-white backdrop-blur-md transition hover:bg-black/70"
        >
          <span>{expanded ? "Show less" : "Show more"}</span>
          <motion.svg
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </button>
      </div>
    </div>
  );
}

export default ShowMoreText;
