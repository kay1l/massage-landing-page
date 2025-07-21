"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

// Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const newErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0];
        newErrors[field] = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Valid submission", result.data);
      // handle actual form submission here (e.g. API call)
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 bg-[#FEF3E2] text-[#5C4A42] scroll-mt-10"
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
          <div className="w-20 h-[3px] bg-[#F3C623] mb-6 mx-auto rounded-full" />

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white shadow-lg rounded-2xl p-4"
            noValidate
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 transition ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border border-gray-200 focus:ring-[#FFB22C]"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border border-gray-200 focus:ring-[#FFB22C]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className={`w-full rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 transition ${
                  errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "border border-gray-200 focus:ring-[#FFB22C]"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#FA812F] hover:bg-[#FFB22C] text-white text-sm font-medium py-2 rounded-full transition"
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
