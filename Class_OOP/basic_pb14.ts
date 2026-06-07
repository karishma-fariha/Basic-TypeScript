// 1. Define the interface for the custom server error
interface ApiError {
  statusCode: number;
  userMessage: string;
}

// 2. Create the Custom Type Guard using the "is" predicate
function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "statusCode" in error &&
    "userMessage" in error
  );
}

// 3. Use the type guard to handle the "unknown" catch block type safely
function handleAxiosError(error: unknown): string {
  if (isApiError(error)) {
    // TypeScript reads our Type Guard and says:
    // "Inside this block, 'error' is 100% an ApiError!"
    return `[Server Error ${error.statusCode}]: ${error.userMessage}`;
  }

  // Check if it's a native JavaScript Error object (Network loss, syntax issues, etc.)
  if (error instanceof Error) {
    return `[System Error]: ${error.message}`;
  }

  return "An completely unrecognizable error occurred.";
}

// 4. Test cases
const mockServerError = { statusCode: 403, userMessage: "Your trial has expired." };
const mockNetworkError = new Error("Connection timed out.");

console.log(handleAxiosError(mockServerError));  // Output: [Server Error 403]: Your trial has expired.
console.log(handleAxiosError(mockNetworkError)); // Output: [System Error]: Connection timed out.