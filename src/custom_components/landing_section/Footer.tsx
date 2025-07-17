"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white px-6 py-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4 ">
            <Image
              src="/images/massage.png"
              alt="Massage Wellness Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Arturo Siete</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            We provide professional massage therapy tailored to your needs.
            Relax, rejuvenate, and heal with us in a tranquil environment.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@massagewellness.com" className="hover:underline">
                info@massagewellness.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+639123456789" className="hover:underline">
                +63 912 345 6789
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Ormoc City, Leyte, Philippines
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#therapists" className="hover:text-white transition">Therapists</a></li>
            <li><a href="#rates" className="hover:text-white transition">Rates</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Massage Wellness. All rights reserved.
      </div>
    </motion.footer>
  );
}
