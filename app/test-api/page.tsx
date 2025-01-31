"use client";

import apiService from "@/lib/api";

const TestAPI = () => {
  const { data, isLoading, error } = apiService.useQuery(
    "post",
    "/api/journal-logs/",
    {
      body: {
        text: "",
        type: "log",
        scheduled_for: "",
      },
    },
  );

  if (isLoading || !data) return "Loading...";

  if (error) return `An error occured: ${error}`;

  return <div>{data.created_at}</div>;
};

export default TestAPI;
