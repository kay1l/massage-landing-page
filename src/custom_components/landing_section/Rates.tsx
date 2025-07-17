"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const rateOptions = [
  {
    title: "30 Minute Session",
    price: "$50",
    description: "Perfect for a quick refresh. Focuses on neck, shoulders, and upper back.",
    image: "/images/rates_images/neck.png",
  },
  {
    title: "60 Minute Session",
    price: "$80",
    description: "Full body massage to improve circulation and reduce stress.",
    image: "/images/rates_images/body-massage.png",
  },
  {
    title: "90 Minute Session",
    price: "$110",
    description: "Extended full body massage with deeper focus on tension points.",
    image: "/images/rates_images/hot-stone.png",
  },
];

export default function RatesSection() {
  return (
    <section
      id="rates"
      className="py-10 px-4 sm:px-6 md:px-12 bg-[#FAF8F6] text-[#5C4A42] scroll-mt-20"
    >
      <Card className="bg-white border-none shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-center">
            <h2 className="text-4xl font-light mb-2">Massage Rates</h2>
            <div className="w-24 h-[3px] bg-teal-500 mx-auto rounded-full mb-6" />
            <p className="text-sm text-gray-500">Choose the perfect session for your needs</p>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {rateOptions.map((rate, index) => (
              <div
                key={index}
                className="bg-[#F7F5F2] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={rate.image}
                    alt={rate.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{rate.title}</h3>
                <p className="text-lg text-teal-600 font-bold mb-2">{rate.price}</p>
                <p className="text-sm text-gray-600">{rate.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-lg font-medium">Relax, rejuvenate, and heal with us today.</p>
            <p className="text-sm text-gray-500">Walk-ins welcome • Book ahead for guaranteed slots</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
  