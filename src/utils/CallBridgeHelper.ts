/**
 * Utility function to call WindVane handlers with a specified service and action.
 *
 * This function wraps the `window.WindVane.call` method into a Promise-based structure,
 * allowing it to be used with `async/await` syntax for improved readability and error handling.
 *
 * @param {string} service - The name of the WindVane service to call (e.g., "WVNavigator").
 * @param {string} action - The action to perform within the specified service (e.g., "pop").
 * @param {any} [params={}] - An optional object containing any parameters required by the service action.
 *
 * @returns {Promise<any>} A Promise that resolves with the result of the WindVane call if successful,
 *                         or rejects with an error if the call fails.
 *
 * Success Handler:
 * - Logs a success message to the console along with the result returned by the WindVane handler.
 * - Resolves the Promise with the result.
 *
 * Error Handler:
 * - Logs an error message to the console if the WindVane call fails.
 * - Displays an alert to notify the user of the failure.
 * - Rejects the Promise with the error.
 *
 * Example Usage:
 * ```
 * try {
 *   const result = await callWindVaneHandler("WVNavigator", "pop");
 *   console.log("Navigator closed successfully:", result);
 * } catch (error) {
 *   console.error("Failed to close navigator:", error);
 * }
 * ```
 */
export const callWindVaneHandler = async (
  service: string,
  action: string,
  params: any = {}
) => {
  return new Promise((resolve, reject) => {
    window.WindVane.call(
      service,
      action,
      params,
      (result: any) => {
        console.log(`${action} success:`, result);
        resolve(result);
      },
      (error: any) => {
        console.error(`${action} failed:`, error);
        reject(error);
      }
    );
  });
};
