/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "habij",
  project: "habij",

  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false,
});
