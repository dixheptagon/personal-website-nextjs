"use client";
import React from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex items-center justify-center bg-white pt-20 pb-10 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
    >
      <motion.div
        className="hero-container hero-background hero-background mx-auto flex w-11/12 flex-col rounded-xl bg-white p-6 shadow-lg md:max-w-screen-xl md:p-16 dark:bg-slate-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Profile Card */}
        <motion.div
          className="profile-card mb-6 flex items-center gap-6 md:mb-10"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/profile-picture1.jpeg"
            alt="Profile picture of Forentino Haryanto"
            className="h-16 w-16 rounded-full object-cover shadow-md md:h-24 md:w-24"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="profile-text">
            <p className="text-lg font-semibold text-slate-100 md:text-xl">
              Forentino Haryanto
            </p>
            <p className="text-sm text-slate-400 md:text-lg">
              Software Engineer
            </p>
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="hero-text"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="mb-5 text-2xl font-semibold text-slate-100 md:text-5xl">
            Your Digital Vision, <br /> Perfectly Realized.
          </h1>
          <p className="mb-10 hidden text-base text-slate-300 md:block md:text-lg">
            From concept to launch, I help businesses build responsive,
            interactive, fast, and scalable web apps. Be ready to bring your
            vision.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="cta-buttons flex gap-3 transition-all md:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="rounded-xl bg-slate-800 px-6 py-2 text-white dark:bg-slate-100 dark:text-slate-950"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ● Book a Call
          </motion.button>

          <motion.button
            className="rounded-xl px-6 py-2 font-semibold text-slate-800 hover:bg-slate-200 dark:text-slate-100 dark:hover:bg-slate-300 dark:hover:text-slate-950"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View work →
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
