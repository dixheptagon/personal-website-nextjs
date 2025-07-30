"use client";
import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

export default function ThemeControler({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  if (theme === "light") {
    return (
      <div className="bg-base-200 rounded-full p-2 shadow-lg">
        <IoSunnyOutline
          onClick={() => setTheme("dark")}
          className="hover:text-primary h-8 w-8 fill-current transition-all duration-300 hover:cursor-pointer"
        />
      </div>
    );
  } else {
    return (
      <div className="bg-base-200 rounded-full p-2 shadow-lg">
        <IoMoonOutline
          onClick={() => setTheme("light")}
          className="hover:text-primary h-8 w-8 fill-current transition-all duration-800 hover:cursor-pointer"
        />
      </div>
    );
  }
}
