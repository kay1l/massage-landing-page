"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function CalendarWithTime({
  date,
  setDate,
  selectedTime,
  setSelectedTime,
}: {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
}) {
  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });

  const bookedDates = Array.from(
    { length: 3 },
    (_, i) => new Date(2025, 5, 17 + i)
  );

  return (
    <Card className="gap-0 p-0">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Calendar Section */}
          <div className="p-4 md:p-6 md:w-[calc(100%-12rem)] w-full">
            <div className="scale-[0.95] sm:scale-100 origin-top-left">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                defaultMonth={date}
                disabled={bookedDates}
                showOutsideDays={false}
                modifiers={{ booked: bookedDates }}
                modifiersClassNames={{
                  booked: "[&>button]:line-through opacity-100",
                }}
                className="bg-transparent p-0 [--cell-size:--spacing(9)] sm:[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                formatters={{
                  formatWeekdayName: (d) =>
                    d.toLocaleString("en-US", { weekday: "short" }),
                }}
              />
            </div>
          </div>

          {/* Time Slot Section */}
          {/* Time Slot Section */}
          <div className="w-full md:w-48 border-t md:border-t-0 md:border-l p-4 md:p-6 max-h-[300px] overflow-y-auto md:max-h-full md:overflow-visible no-scrollbar">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-1 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className="w-full shadow-none text-sm"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 border-t px-4 py-5 md:px-6 md:flex-row">
        <div className="text-sm">
          {date && selectedTime ? (
            <>
              Your session is booked for{" "}
              <span className="font-medium">
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </span>{" "}
              at <span className="font-medium">{selectedTime}</span>.
            </>
          ) : (
            <>Select a date and time for your session.</>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
