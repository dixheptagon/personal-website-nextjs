import React from "react";
import ThemeControler from "./theme-controler";

export default function MobileThemeControler() {
  return (
    <div className="fixed right-10 bottom-10 z-50 md:hidden">
      <ThemeControler />
    </div>
  );
}
