import * as React from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  start?: React.ReactNode;
  end?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, start, end, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative flex w-full rounded-md border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          className
        )}
      >
        {start && (
          <div className="flex justify-center items-center pl-2 text-sm text-gray-600 ">
            {start}
          </div>
        )}
        <textarea
          className={cn(
            "w-full min-h-[60px] bg-white rounded-md border border-input  px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
            { "pr-20": end }
          )}
          ref={ref}
          {...props}
        />
        {end && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 flex items-center">
            {end}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
