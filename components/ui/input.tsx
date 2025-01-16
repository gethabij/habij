import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  start?: React.ReactNode;
  end?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, start, end, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative flex w-full  rounded-md border  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ",
          className
        )}
      >
        {start && (
          <div className="flex  justify-center items-center pl-2 text-sm text-gray-600 ">
            {start}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full h-full rounded-md border border-input bg-white px-3 py-6 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
            { "pr-20": end }
          )}
          ref={ref}
          {...props}
        />
        {end && (
          <div className="absolute h-full right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 flex items-center">
            {end}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
