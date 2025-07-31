"use client";

import { motion, useAnimation } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function AboutMe() {
  const timelineItems = [
    { year: "2025", text: "Bootcamp at Purwadhika School" },
    { year: "...", text: "Next year" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      id="aboutme"
      ref={ref}
      className="dream-company bg-white py-10 transition-colors duration-300 dark:bg-slate-950"
    >
      <motion.div
        className="mx-auto w-11/12 max-w-screen-xl rounded-xl bg-slate-50 px-4 py-8 shadow-xl/8 md:px-8 lg:py-16 dark:bg-slate-900"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h2
          className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-950 md:text-4xl dark:text-slate-100"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          About Me
        </motion.h2>

        <div className="aboutme-content flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          {/* Profile Card */}
          <motion.div
            className="card w-full max-w-xs overflow-hidden rounded-lg bg-slate-100 shadow-md md:max-w-sm dark:bg-slate-800"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <figure>
              <Image
                src="/assets/profile-picture.webp"
                alt="Profile Picture"
                width={100}
                height={100}
                className="h-48 w-full scale-100 object-cover md:h-64"
              />
            </figure>
            <div className="card-body p-4 md:p-6">
              <h3 className="text-lg font-semibold text-slate-800 md:text-xl dark:text-slate-100">
                Forentino Haryanto
              </h3>
              <p className="mb-4 text-sm text-slate-600 md:text-base dark:text-slate-400">
                Software Engineer
              </p>
              <button className="w-full rounded-lg bg-slate-300 px-4 py-2 text-slate-600 transition hover:bg-slate-700 hover:text-slate-100 dark:bg-slate-600 dark:text-slate-100 dark:hover:text-slate-300">
                <Link href={"/assets/cv.pdf"} target="_blank">
                  Download CV
                </Link>
              </button>
            </div>
          </motion.div>

          {/* About Me Text */}
          <motion.div
            className="aboutme-text w-full lg:w-2/3"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            {/* Quote (HIDE on small screen) */}
            <h2 className="mb-6 hidden text-xl font-bold text-slate-800 italic md:block md:text-3xl dark:text-slate-300">
              <q>
                The land of peace is not found, it`s built with your own hands.
              </q>
              <br />
              <sup className="pl-2 text-sm text-slate-500">
                - Makoto Yukimura in Vinland Saga
              </sup>
            </h2>

            <div className="aboutme-description flex flex-col gap-8 lg:flex-row">
              {/* Description */}
              <p className="text-base text-slate-600 md:text-lg lg:w-2/3 dark:text-slate-400">
                Hi, I`m Forentino - a sofware engineer specializing in premium
                web design, development, and SEO services. I`m passionate about
                creating unique and effective solutions for my clients, and I
                bring a personal touch to every project. Let`s work together to
                bring your vision to life!
              </p>

              {/* Timeline (HIDE on small screen) */}
              <div className="hidden lg:block lg:w-1/2">
                <h3 className="mb-4 text-center text-xl font-semibold text-slate-800 dark:text-slate-200">
                  My Timeline
                </h3>
                <motion.ul
                  className="timeline timeline-vertical text-lg text-slate-600 dark:text-slate-400"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.2 },
                    },
                  }}
                >
                  {timelineItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {index !== 0 && <hr className="bg-green-500" />}
                      <div className="timeline-start">{item.year}</div>
                      <motion.div
                        className="timeline-middle relative"
                        whileHover={{ scale: 1.3, color: "#22c55e" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FaCircleCheck />
                      </motion.div>
                      <div className="timeline-end timeline-box border-none bg-slate-200 dark:bg-slate-800">
                        {item.text}
                      </div>
                      {index !== timelineItems.length - 1 && (
                        <hr className="bg-green-500" />
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
