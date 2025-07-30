"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectSection() {
  const projects = [
    {
      title: "Simon Game",
      year: "2023",
      image: "/assets/simon-game.png",
      category:
        "↳ Simon Game is an electronic memory game where the player must repeat an increasingly long sequence of lights and sounds in the correct order.",
    },
    {
      title: "Rosewood Estate - Sample",
      year: "2025",
      image: "/assets/house-2.avif",
      category: "↳ Details not available",
    },
    {
      title: "Glass Pavilion - Sample",
      year: "2025",
      image: "/assets/house-3.avif",
      category: "↳ Details not available",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (isMobile: boolean) => ({
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.15, // responsive speed
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="projects"
      className="bg-white py-12 transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Header */}
      <motion.div
        className="projects-header mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        custom={isMobile}
      >
        <motion.span
          className="text-sm font-semibold tracking-wide text-slate-700 uppercase dark:text-slate-300"
          variants={itemVariants}
        >
          Projects
        </motion.span>
        <motion.h2
          className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100"
          variants={itemVariants}
        >
          See what I`ve built
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-slate-400"
          variants={itemVariants}
        >
          From concepts to reality, here`s a glimpse of what I love building.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="#projects"
            className="text-slate-800 hover:underline dark:text-slate-100"
          >
            View projects →
          </Link>
        </motion.div>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="projects-list mx-auto my-10 grid w-11/12 max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        custom={isMobile}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-slate-100 shadow-lg dark:bg-slate-900"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-sm">{project.category}</span>
              <span className="text-xs text-gray-300">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
