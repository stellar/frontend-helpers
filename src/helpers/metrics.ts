import throttle from "lodash.throttle";

interface Event {
  /* eslint-disable camelcase */
  event_type: string;
  event_properties: { [key: string]: any };
  user_id: string;
  device_id: string;
  /* eslint-enable camelcase */
}

const METRICS_ENDPOINT = "https://api.amplitude.com/2/httpapi";
let cache: Event[] = [];
let isTrackingDisabled = false;

const uploadMetrics = throttle(async () => {
  const toUpload = cache;
  cache = [];
  if (!process.env.REACT_APP_AMPLITUDE_KEY || isTrackingDisabled) {
    // eslint-disable-next-line no-console
    console.log("Not uploading metrics", toUpload);
    return;
  }

  try {
    await fetch(METRICS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: process.env.REACT_APP_AMPLITUDE_KEY,
        events: toUpload,
      }),
    });
  } catch (e) {
    isTrackingDisabled = true;
    console.error(e);
  }
}, 500);

const getUserId = () => {
  const storedId = localStorage.getItem("metrics_user_id");
  if (!storedId) {
    // Create a random ID by taking the decimal portion of a random number
    const newId = Math.random().toString().split(".")[1];
    localStorage.setItem("metrics_user_id", newId);
    return newId;
  }
  return storedId;
};

/**
 *
 * @param {string} name The name (in plain language, thoughtfully considered) of
 * the event. This is long-lived and appears in the metrics dashboard, so
 * logically related events should be presented predictably.
 * @param {object?} body An optional object containing event metadata
 * @returns {void}
 */
const emitMetric = (name: string, body?: any) => {
  cache.push({
    /* eslint-disable camelcase */
    event_type: name,
    event_properties: body,
    user_id: getUserId(),
    device_id: window.navigator.userAgent,
    /* eslint-enable camelcase */
  });
  uploadMetrics();
};

export const metrics = {
  emitMetric,
};
