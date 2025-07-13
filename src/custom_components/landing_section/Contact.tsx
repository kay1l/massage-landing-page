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
      className="py-24 px-6 bg-[#FAF8F6] text-[#5C4A42] scroll-mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        
        <div className="text-center">
          <Image
            src="/images/customer-service.png" 
            alt="Contact Illustration"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>

        {/* Form Column */}
        <div>
          <h2 className="text-4xl font-light text-center md:text-left mb-4">
            Get in touch
          </h2>
          <div className="w-24 h-[3px] bg-teal-500 mb-6 mx-auto md:mx-0 rounded-full" />

          <form className="space-y-5 bg-white shadow-lg rounded-2xl p-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white text-lg font-medium py-3 rounded-full transition"
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
