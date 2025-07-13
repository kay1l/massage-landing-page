"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={handleScrollUp}
      className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-600 text-white rounded-full p-3 shadow-lg transition-opacity duration-300"
      size="icon"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
