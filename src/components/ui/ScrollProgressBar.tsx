"use client";

import { useScroll, motion } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #FF6B35 0%, #00D4FF 100%)",
      }}
    />
  );
}
