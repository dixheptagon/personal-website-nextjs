"use client";

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Phone Number",
    items: ["+62 813 1401 0068"],
  },
  {
    title: "Email",
    items: ["forentinoharyanto@gmail.com"],
  },
];

const socialLinks = [
  { icon: <FaGithub className="h-6 w-6" />, href: "#" },
  { icon: <FaInstagram className="h-6 w-6" />, href: "#" },
  { icon: <FaLinkedin className="h-6 w-6" />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-slate-950 dark:text-slate-300">
      <hr className="border-gray-300 dark:border-slate-700" />
      {/* Top Section */}
      <div className="mx-auto flex justify-between gap-10 px-6 py-12 md:max-w-screen-xl">
        {footerLinks.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <h6 className="mb-3 text-lg font-semibold text-gray-900 dark:text-slate-100">
              {section.title}
            </h6>
            <ul className="space-y-2 text-sm">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="transition-colors hover:text-indigo-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <img
            src="/assets/eternity-logo.svg"
            alt="Foren Logo"
            className="mb-4 h-12 w-12 rounded-xl bg-white md:h-16 md:w-16"
          />
          <p className="text-sm leading-relaxed">
            Forentino Haryanto <br />
            Software Engineer.
          </p>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 dark:border-slate-700">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-6 py-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-slate-400">
            © {new Date().getFullYear()} Forentino Haryanto. All rights
            reserved.
          </p>
          <div className="mt-4 flex gap-5 md:mt-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-indigo-500"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
