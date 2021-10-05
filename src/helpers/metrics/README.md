# Metrics

Implement analytics tracking

## Prerequesites

In order to properly transmit your metric to the Amplitude endpoint, you will
need to provide an Amplitude key. It is best practice to embed this key at build
time via node environment variable. This key _must_ be called
`REACT_APP_AMPLITUDE_KEY`. If this key is not passed, in the console, you will
see a log that says `Not uploading metrics`, along with the metric that
attempted to transmit.

## Usage

```ts
import { metrics } from "@stellar/frontend-helpers";

const handleClick = () => {
  metrics.emitMetric("button was clicked");
};
```
