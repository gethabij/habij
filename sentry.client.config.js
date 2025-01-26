import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    process.env.SENTRY_AUTH_TOKEN,
  integrations: [Sentry.replayIntegration()],

  tracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE,

  replaysSessionSampleRate: process.,
  replaysOnErrorSampleRate: 1.0,
  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
