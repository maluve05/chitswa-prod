/**
 * Reports an error to the console. Replace with your own error tracking
 * service (e.g. Sentry, Datadog) if needed.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("[Error]", error, context);
}

