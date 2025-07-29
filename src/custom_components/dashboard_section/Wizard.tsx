"use client";

import { cn } from "@/lib/utils";

interface StepWizardProps {
  steps: string[];
  currentStep: number;
}

export default function StepWizard({ steps, currentStep }: StepWizardProps) {
  return (
    <div className="flex justify-center px-4">
      <div className="flex items-center w-full max-w-3xl">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div key={index} className="flex items-center w-full">
              {/* Step Circle + Label */}
              <div className="flex flex-col items-center z-10">
                <div
                  className={cn(
                    "w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold border transition-all",
                    isActive
                      ? "bg-[#FA812F] text-white border-[#FA812F]"
                      : isCompleted
                      ? "bg-[#5C4A42] text-white border-[#5C4A42]"
                      : "bg-white text-[#5C4A42] border-[#5C4A42]"
                  )}
                >
                  {stepNumber}
                </div>
                <span className="mt-2 text-xs text-center text-[#5C4A42] w-24">
                  {label}
                </span>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 bg-[#5C4A42] mx-4 rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
