"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import ThemeControler from "@/features/navbar/theme-controler";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About Me", href: "#aboutme" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="bg-base-100/80 fixed top-0 left-0 z-50 w-full shadow-sm backdrop-blur-sm dark:bg-slate-900/80 dark:text-slate-100">
      <div className="navbar mx-auto max-w-7xl px-4">
        {/* Mobile: Left Toggle */}
        <div className="navbar-start flex gap-2 lg:hidden">
          <button onClick={toggleMenu} className="btn btn-primary text-xl">
            {isMobileOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Logo */}
        <div className="navbar-center lg:navbar-start">
          <Link
            href="#"
            className="hidden gap-2 rounded-xl p-2 text-xl font-bold md:flex dark:hover:bg-slate-200 dark:hover:text-black"
          >
            <Image
              src="/assets/eternity-logo.svg"
              className="rounded-xl bg-white dark:bg-slate-200"
              alt="logo"
              width={30}
              height={30}
            />
            <span className="group font-semibold transition-all duration-800">
              <span className="block group-hover:hidden">Forentino</span>
              <span className="hidden group-hover:block">Haryanto</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-primary">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="navbar-end flex gap-5">
          <div className="hidden md:block">
            <ThemeControler />
          </div>
          <Link href="#contact" className="btn btn-primary font-bold">
            ● Book a call
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="menu bg-base-100 space-y-2 px-4 py-4 dark:bg-slate-900">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="hover:text-primary text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
