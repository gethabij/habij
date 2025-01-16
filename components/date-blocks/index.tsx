import { format, subDays, isToday } from "date-fns";
import { useEffect, useRef } from "react";
import { Card } from "../ui/card";

function DateBlocks() {
  const today = new Date();

  // Generate 15 days before today and 15 days after today, with today's date in the center
  const dates = Array.from({ length: 31 }, (_, i) => subDays(today, 15 - i));

  // Ref to the container div
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const todayIndex = dates.findIndex((date) => isToday(date));
      const cardWidth = 56; // Assuming each card is 48px wide (adjust as needed)
      const centerOffset = (containerRef.current.clientWidth - cardWidth) / 2;

      // Scroll the container to the middle of today's date
      const scrollToPosition = todayIndex * cardWidth - centerOffset;
      containerRef.current.scrollLeft = scrollToPosition;
    }
  }, [dates]);

  return (
    <div
      className="w-full overflow-x-scroll [scrollbar-width:none]  scrollbar-hide"
      ref={containerRef}
    >
      <div className="flex space-x-2 px-4">
        {dates.map((date, index) => (
          <Card
            key={index}
            className={`flex flex-col items-center justify-center w-12 h-14 rounded-lg shadow-md gap-0 shrink-0 ${
              isToday(date) ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <span className="text-lg">{format(date, "dd")}</span>
            <span className="text-sm">{format(date, "EEE")}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DateBlocks;
