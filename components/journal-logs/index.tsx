"use client";

import Props from "./types";

const JournalLogs = (props: Readonly<Props>) => {
  const { messages } = props;
  return (
    <div className="flex flex-col w-full space-y-2 ">
      {messages.map((message, index) => (
        <div key={index} className={"flex justify-start "}>
          <div
            className={`bg-blue-500 text-white p-3 rounded-lg shadow-md max-w-[80%] break-words w-auto`}
            style={{
              wordWrap: "break-word",
              whiteSpace: "pre-wrap", // Preserve line breaks in the message
              height: "auto", // Allow height to expand with content
            }}
          >
            {message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalLogs;
