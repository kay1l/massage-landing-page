"use client"

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#FAF8F6] text-[#5C4A42]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <Button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
