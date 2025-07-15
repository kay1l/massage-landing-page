
"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-300">
            We provide professional massage therapy tailored to your needs. Let us help you relax and rejuvenate.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@massagewellness.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +63 912 345 6789
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Ormoc City, Leyte, Philippines
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#therapists" className="hover:underline">Therapists</a></li>
            <li><a href="#rates" className="hover:underline">Rates</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Massage Wellness. All rights reserved.
      </div>
    </footer>
  );
}
