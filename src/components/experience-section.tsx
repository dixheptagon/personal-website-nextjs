"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

export default function ExperienceSection() {
  const timeline = [
    {
      year: "2025",
      title: "Bootcamp at Purwadhika School",
      description:
        "Purwadhika Bootcamp is one of Indonesia's most well-known coding bootcamps, In almost 6 month I was driven to become a Fullstack Web Developer.",
      link: "https://purwadhika.com/",
    },
  ];

  return (
    <section className="bg-white py-10 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto w-11/12 max-w-screen-xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100">
          My Experience Timeline
        </h2>

        <motion.ul
          className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {timeline.map((item, index) => (
            <HoverTimelineItem key={index} item={item} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

// ✅ Separate Component for Item
function HoverTimelineItem({ item, index }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 4px 20px rgba(100, 116, 139, 0.2)",
      }}
      className="relative rounded-lg p-4 transition-all"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {index !== 0 && (
        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      {/* Icon */}
      <div className="timeline-middle text-slate-800 dark:text-slate-300">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.2,
            color: "#64748b", // slate-500
            textShadow: "0px 0px 8px rgba(100, 116, 139, 0.8)",
          }}
          className="cursor-pointer"
        >
          <FaCircleCheck size={20} />
        </motion.div>
      </div>

      {/* Text */}
      <div
        className={`${
          index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
        } mb-10`}
      >
        <time className="font-bold text-slate-600 italic dark:text-slate-200">
          {item.year}
        </time>
        <div className="font-mono text-lg text-slate-600 italic dark:text-slate-200">
          {item.title}
        </div>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {item.description}
        </p>
      </div>

      {/* Hover Button */}
      <AnimatePresence>
        {hovered && (
          <motion.a
            href={item.link}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            target="_blank"
            className="absolute right-4 bottom-2 rounded-lg bg-slate-800 px-4 py-2 text-white shadow-md hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            View Details →
          </motion.a>
        )}
      </AnimatePresence>

      {index !== 4 && (
        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </motion.li>
  );
}
