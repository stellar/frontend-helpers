/**
 *
 * @param {unknown} error Error returned in `try catch`
 * @returns {Error}
 */

export const getCatchError = (error: unknown): Error => {
  if (error instanceof Error) {
    return error;
  }

  if (typeof error === "string" || typeof error === "number") {
    return Error(error.toString());
  }

  return Error("Something went wrong, please try again.");
};
