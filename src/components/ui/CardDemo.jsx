"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "../../lib/utils";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

export function CardDemo() {
  return (
    <Card>
      <CardTitle>Technologies</CardTitle>
      <CardDescription>Some of the Technologies I use</CardDescription>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
    [".circle-4", { scale, transform }, { duration: 0.8 }],
    [".circle-5", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-6 sm:p-8 overflow-hidden h-full relative flex items-center justify-center bg-black/70 rounded-xl">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
        <Container className="h-12 w-12 sm:h-16 sm:w-16 circle-1">
          <RiTailwindCssFill className="h-5 w-5 sm:h-6 sm:w-6 dark:text-white" />
        </Container>
        <Container className="h-16 w-16 sm:h-20 sm:w-20 circle-2">
          <DiJavascript1 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </Container>
        <Container className="h-20 w-20 sm:h-28 sm:w-28 circle-3">
          <FaReact className="h-10 w-10 sm:h-12 sm:w-12 dark:text-white" />
        </Container>
        <Container className="h-16 w-16 sm:h-20 sm:w-20 circle-4">
          <TbBrandTypescript className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </Container>
        <Container className="h-12 w-12 sm:h-16 sm:w-16 circle-5">
          <RiNextjsFill className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </Container>
      </div>

      <div className="h-32 sm:h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-6 h-24 sm:w-10 sm:h-32 top-1/2 -translate-y-1/2 absolute -left-8 sm:-left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return <div className={cn("w-full max-w-7xl mx-auto p-6 sm:p-12", className)}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-3xl sm:text-4xl lg:text-6xl text-center font-semibold text-gray-800 dark:text-white py-2 font-poppins",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-sm sm:text-md lg:text-lg pt-2 text-center font-normal text-neutral-600 dark:text-neutral-400 font-poppins",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({ className, children, showGradient = true }) => {
  return (
    <div
      className={cn(
        "h-48 sm:h-80 md:h-96 rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardDemo;
