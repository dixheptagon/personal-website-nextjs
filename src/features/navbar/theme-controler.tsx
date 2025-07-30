"use client";
import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { ThemeProvider, useTheme } from "next-themes";

export default function ThemeControler() {
  const { theme, setTheme } = useTheme();

  if (theme === "light") {
    return (
      <IoSunnyOutline
        onClick={() => setTheme("dark")}
        className="h-8 w-8 fill-current transition-all duration-800"
      />
    );
  } else {
    return (
      <IoMoonOutline
        onClick={() => setTheme("light")}
        className="h-8 w-8 fill-current transition-all duration-800"
      />
    );
  }
}
