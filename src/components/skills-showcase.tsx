"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export default function SkillSection() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="h-10 w-10" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="h-10 w-10" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="h-10 w-10" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-10 w-10" /> },
    { name: "React", icon: <FaReact className="h-10 w-10" /> },
    { name: "Next.js", icon: <RiNextjsFill className="h-10 w-10" /> },
    { name: "Node.js", icon: <FaNode className="h-10 w-10" /> },
    { name: "Git", icon: <FaGitAlt className="h-10 w-10" /> },
    { name: "GitHub", icon: <FaGithub className="h-10 w-10" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-10 transition-colors duration-300 dark:bg-slate-950">
      <motion.div
        className="mx-auto w-11/12 max-w-screen-xl rounded-xl bg-white px-6 py-8 shadow-lg md:px-12 lg:py-16 dark:bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100"
          variants={itemVariants}
        >
          My Tech Stack
        </motion.h2>

        {/* Grid Icons */}
        <motion.div
          className="grid grid-cols-2 gap-6 text-slate-500 sm:gap-10 md:grid-cols-3 lg:grid-cols-6 dark:text-slate-400"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center gap-2 font-medium"
              variants={itemVariants}
              whileHover={{
                scale: 1.15,
                color: "#0ea5e9", // Tailwind blue-500
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
