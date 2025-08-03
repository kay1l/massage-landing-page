"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";




export default function ContactSection() {
  const router = useRouter();


  const handleClick = () => {
    router.push('/dashboard');
  }
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

        {/* Call to Action */}
        <div className="w-full max-w-[350px] text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Ready To Book Your Massage?
          </h2>
          <div className="w-20 h-[3px] bg-[#F3C623] mb-6 mx-auto rounded-full" />

          <Button
            onClick={handleClick}
            className="w-full bg-[#FA812F] hover:bg-[#FFB22C] text-white text-sm font-medium py-2 rounded-full transition"
          >
            BOOK NOW
          </Button>

          <p className="text-sm mt-4">
            If you have any questions, please text or call us at{" "}
            <span className="font-semibold">+63 905 578 9461</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
