"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 bg-[#FAF8F6] text-[#5C4A42] scroll-mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10"
      >
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/customer-service.png"
            alt="Contact Illustration"
            width={180}
            height={180}
            className="w-36 sm:w-40 md:w-44 lg:w-48 object-contain"
          />
        </div>

        {/* Form */}
        <div className="w-full max-w-[350px]">
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-4">
            Get in touch
          </h2>
          <div className="w-20 h-[3px] bg-teal-500 mb-6 mx-auto rounded-full" />

          <form className="space-y-4 bg-white shadow-lg rounded-2xl p-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium py-2 rounded-full transition"
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
