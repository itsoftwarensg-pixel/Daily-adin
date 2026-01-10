"use client";

import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 rounded-full bg-primaryRed text-white shadow-lg transition hover:bg-red-600 print:hidden"
    >
      <FaAnglesUp size={22} className="text-white" />
    </button>
  );
}
