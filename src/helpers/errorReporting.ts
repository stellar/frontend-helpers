import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

/**
 *
 * @param {string} projectName The name of the project used in the release tag
 * @param {string?} releaseVersion An optional release version. Omit this param
 * if your app supports dynamic version tracking
 * @returns {void}
 */
const reportErrors = (projectName: string, releaseVersion?: string) => {
  if (process.env.REACT_APP_SENTRY_KEY) {
    Sentry.init({
      dsn: process.env.REACT_APP_SENTRY_KEY,
      release: `${projectName}@${
        releaseVersion || process.env.npm_package_version
      }`,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  }
};

export const errorReporting = { reportErrors };
