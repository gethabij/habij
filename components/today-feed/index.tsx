"use client";
import { useState } from "react";

import JournalInput from "../journal-input";
import JournalLogs from "../journal-logs";

const TodayFeed = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 h-full ">
      <JournalLogs messages={messages} />
      <div className="!mt-auto w-full fixed bottom-2 ">
        <JournalInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default TodayFeed;
