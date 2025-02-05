"use client";

import { useState } from "react";
import { Popover, PopoverAnchor, PopoverContent } from "../ui/popover";
import Props from "./types";
import useLongPress from "@/lib/hooks/use-long-press";
import { Separator } from "../ui/separator";

const JournalLogs = (props: Readonly<Props>) => {
  const { messages, onAddHabit } = props;

  const [popoverOpen, setPopoverOpen] = useState(false);

  const onLongPress = () => {
    setPopoverOpen(true);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const handelSend = () => null;

  const longPressEvent = useLongPress(onLongPress, handelSend, defaultOptions);

  const handleAddItem = (message: string) => {
    onAddHabit(message);
    setPopoverOpen(false); // Close the dropdown after adding
  };
  return (
    <div className="flex flex-col-reverse space-y-reverse  w-full space-y-2  h-full overflow-y-auto">
      {messages.map((message) => (
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen} key={message}>
          <PopoverAnchor>
            <div
              className={"flex justify-start  items-end"}
              {...longPressEvent}
            >
              <div
                className={`bg-blue-500 text-white p-3 shadow-md max-w-[80%] break-words w-auto  rounded-t-xl  rounded-br-xl`}
                style={{
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap", // Preserve line breaks in the message
                  height: "auto", // Allow height to expand with content
                }}
              >
                {message}
              </div>
            </div>
          </PopoverAnchor>
          <PopoverContent
            side="top"
            align="start"
            sideOffset={1}
            className="flex flex-col bg-primary/80 text-white max-w-32 gap-1 text-xs p-2"
          >
            <div onClick={() => handleAddItem(message)}>
              Make it into a Habit
            </div>
            <Separator />
            <div>Edit</div>
            <Separator />
            <div>Delete</div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};

export default JournalLogs;
