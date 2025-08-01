"use client";

import { cn } from "@/lib/utils";
import {
  CheckCircle,
  User,
  MapPin,
  Calendar,
  CreditCard,
} from "lucide-react";

const stepIcons = [User, MapPin, Calendar, CreditCard];

interface StepWizardProps {
  steps: string[];
  step: number;
}

export default function StepWizard({ steps, step }: StepWizardProps) {
  return (
    <div className="flex justify-center mb-12 mt-4 py-6 px-2">
      <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto">
        {steps.map((label, index) => {
          const current = index + 1;
          const isActive = step === current;
          const isCompleted = step > current;
          const Icon = isCompleted ? CheckCircle : stepIcons[index];

          return (
            <div key={index} className="flex items-center shrink-0">
              {/* Step Circle and Label */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border transition-all",
                    isActive
                      ? "bg-[#FA812F] border-[#FA812F]"
                      : isCompleted
                      ? "bg-[#5C4A42] border-[#5C4A42]"
                      : "bg-white border-[#5C4A42]"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 sm:w-6 sm:h-6",
                      isActive || isCompleted
                        ? "text-white"
                        : "text-[#5C4A42]"
                    )}
                  />
                </div>
                <div className="mt-2 text-xs sm:text-sm text-[#5C4A42]">
                  Step {current}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="h-1 w-8 sm:w-16 bg-[#5C4A42] mx-2 rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
