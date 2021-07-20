# Error Reporting

Implement tracking of errors and uncaught exceptions

## Prerequesites

In order to report errors to Sentry, you will need to provide a Sentry key. It
is best practice to embed this key at build time via node environment variable.
This key _must_ be called `REACT_APP_SENTRY_KEY`.

`reportErrors` should be called when your application is initialized.

## Usage

```ts
import { errorReporting } from "@stellar/frontend-helpers";

const App = () => {
  errorReporting.reportErrors("my-project");

  return <div>My Project Landing Page</div>;
};
```
