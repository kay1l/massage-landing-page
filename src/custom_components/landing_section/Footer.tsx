"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div id="footer">
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white w-full py-12"
    >
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left justify-items-center md:justify-items-start">
          {/* Logo + Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/final.png"
                alt="ShaiSha's Leisure Hub Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h2 className="text-xl font-bold uppercase tracking-wide">
                ShaiSha's <br /> Leisure Hub
              </h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Our goal is to give and experience professional massage therapy designed to soothe, heal, and refresh.
            Your wellness journey begins with us right in the comfort of your own home.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5" />
                <a href="mailto:info@massagewellness.com" className="hover:underline">
                  shaishaleisurehub@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5" />
                <a href="tel:+639123456789" className="hover:underline">
                  +63 905 578 9461
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>San Miguel, Bacong Negros Oriental</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { href: "#services", label: "Services" },
                { href: "#reviews", label: "Reviews" },
                { href: "#about", label: "About" },
                { href: "#footer", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} ShaiSha's Leisure Hub. All rights reserved.
        </div>
      </div>
      
    </motion.footer>
    </div>
  );
}
