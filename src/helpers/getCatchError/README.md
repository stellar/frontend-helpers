# Get `try catch` error with type `Error`

Handle `try catch` error type coercion in TypeScript

## Prerequesites

Since TypeScript version 4.0, `catch` error type is set to `unknown`, forcing
developers to explicitly check type of the error (it used to be `any` before
this update). This helper method will return an error with type `Error`.

## Usage

```ts
import { getCatchError } from "@stellar/frontend-helpers";

const handleRequest = async () => {
  try {
    // ...
  } catch (error) {
    const e = getCatchError(error);
    // ...
  }
};
```
