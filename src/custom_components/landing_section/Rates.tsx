"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const rateOptions = [
  {
    title: "30 Minute Session",
    price: "$50",
    image: "/images/rates_images/rates.png",
  },
  {
    title: "60 Minute Session",
    price: "$80",
    image: "/images/rates_images/rates.png",
  },
  {
    title: "90 Minute Session",
    price: "$110",
    image: "/images/rates_images/rates.png",
  },
];

export default function RatesSection() {
  return (
    <section
      id="rates"
      className="py-2 sm:py-5 md:py-5 px-6 bg-[#FAF8F6] text-[#5C4A42] scroll-mt-20 flex justify-center items-center"
    >
      <div className="w-full">
        <Card className="w-full bg-white border-none shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-center text-[#5C4A42]">
              <h2 className="text-4xl font-light text-center mb-4">Rates</h2>
              <div className="w-24 h-[3px] bg-teal-500 mx-auto rounded-full mb-6" />
              {/* Massage Packages */}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
              {rateOptions.map((rate, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-24 h-24 mb-2">
                    <Image
                      src={rate.image}
                      alt={rate.title}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <h3 className="text-base font-semibold">{rate.title}</h3>
                  <p className="text-teal-600 font-bold text-lg">
                    {rate.price}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
