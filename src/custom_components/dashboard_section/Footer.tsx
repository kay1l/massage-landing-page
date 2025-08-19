"use client";

import { motion } from "framer-motion";

export default function DashboardFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="fixed bottom-0 w-full bg-gray-900 text-white py-2 z-50"
    >
      <div className=" border-gray-700 pt-1 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ShaiSha's Leisure Hub. All rights reserved.
      </div>
    </motion.footer>
  );
}
