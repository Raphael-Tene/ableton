"use client";

import Link from "next/link";
import { useState } from "react";

let window: Window & typeof globalThis;

const StickyNavbar = () => {
  const [isSticky, setSticky] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={`sticky top-0 bottom-0 z-10 p-4 w-full overflow-hidden ${
        isSticky ? "bg-white/70" : "bg-white"
      }`}
    >
      <div className="flex gap-4">
        <Link href="/about" className="text-[#ff764d]">
          About
        </Link>
        <Link href="jobs">Jobs</Link>
        <Link href="apprenticeships">Apprenticeships</Link>
      </div>
    </nav>
  );
};

export default StickyNavbar;
