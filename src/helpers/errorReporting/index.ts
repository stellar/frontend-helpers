import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

/**
 *
 * @param {string} obj.projectName The name of the project used in the release tag
 * @param {string?} obj.releaseVersion An optional release version. Omit this param
 * if your app supports dynamic version tracking
 * @param {Array<string>} obj.tracingOrigins Array of domains to pass tracing origins to
 * @returns {void}
 */

interface ReportErrors {
  projectName: string;
  releaseVersion?: string;
  tracingOrigins?: Array<string | RegExp>;
}

const reportErrors = ({
  projectName,
  releaseVersion,
  tracingOrigins,
}: ReportErrors) => {
  if (window._env_.SENTRY_API_KEY) {
    Sentry.init({
      dsn: window._env_.SENTRY_API_KEY,
      release: `${projectName}@${
        releaseVersion || process.env.npm_package_version
      }`,
      integrations: [
        tracingOrigins
          ? new Integrations.BrowserTracing({
              tracingOrigins,
            })
          : new Integrations.BrowserTracing(),
      ],
      tracesSampleRate: 1.0,
    });
  }
};

export const errorReporting = { reportErrors };
