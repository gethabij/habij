"use client";

import Props from "./types";

const JournalLogs = (props: Readonly<Props>) => {
  const { messages } = props;

  return (
    <div className="flex flex-col-reverse space-y-reverse  w-full space-y-2  h-full overflow-y-auto">
      {messages.map((message, index) => (
        <div key={index} className={"flex justify-start  items-end"}>
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
      ))}
    </div>
  );
};

export default JournalLogs;
