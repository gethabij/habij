"use client";
import { useState } from "react";

import JournalInput from "../journal-input";
import JournalLogs from "../journal-logs";
import DateBlocks from "../date-blocks";

const TodayFeed = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    setMessages((prev) => [message, ...prev]);
  };

  return (
    <div className="flex flex-col items-center p-4 h-full ">
      <DateBlocks />
      <div className="w-full h-full flex-1 overflow-y-auto">
        <JournalLogs messages={messages} />
      </div>
      <div className="w-full  pb-2 ">
        <JournalInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default TodayFeed;
