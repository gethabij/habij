import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "@/lib/types/api/schema";

const fetchClient = createFetchClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

export default createClient(fetchClient);
