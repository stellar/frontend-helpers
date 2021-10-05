/**
 *
 * @param {unknown} error Error returned in `try catch`
 * @param {string?} errorMessage An optional error message if error could not
 * be parsed
 * @returns {Error}
 */

export const getCatchError = (error: unknown, errorMessage?: string): Error => {
  if (error instanceof Error) {
    return error;
  }

  if (typeof error === "string" || typeof error === "number") {
    return Error(error.toString());
  }

  return Error(errorMessage || "An error was unable to be parsed correctly");
};
