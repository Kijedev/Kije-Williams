"use client";

import { useState } from "react";

const technologies = [
  "Let's work together.",
  "Let's work together.",
];

function MarqueeRow({
  technologies,
  direction = "left",
  speed = 100,
  className = "",
}) {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedTechs = [...technologies];

  return (
    <div
      className={`marquee-container ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`marquee-content ${
          direction === "left" ? "marquee-left" : "marquee-right"
        } ${isPaused ? "paused" : ""}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <span key={index} className="marquee-item">
            <span className="tech-name lg:text-[7rem] text-7xl">{tech}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ModernMarquee() {
  return (
    <div className="modern-marquee">
      <div className="marquee-rows">
        <MarqueeRow
          technologies={technologies}
          direction="right"
          speed={15}
          className="large-text"
        />
      </div>

      <div className="fade-left"></div>
      <div className="fade-right"></div>
    </div>
  );
}
