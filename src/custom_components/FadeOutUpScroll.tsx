"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function FadeOutUpSection({ children }: { children: ReactNode }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"], // or tune this as needed
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <motion.div ref={ref} style={{ opacity: springOpacity, y: springY }}>
      {children}
    </motion.div>
  );
}
