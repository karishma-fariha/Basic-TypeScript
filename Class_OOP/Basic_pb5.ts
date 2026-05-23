// 1. Define the separate shapes the response can take
interface SuccessResponse {
  status: "success"; // The "discriminant" tag
  data: string;
}

interface ErrorResponse {
  status: "error";   // The "discriminant" tag
  code: number;
  message: string;
}

// 2. Combine them into a single Discriminated Union type
type ApiResponse = SuccessResponse | ErrorResponse;

// 3. Apply the type to the function
function handleResponse(response: ApiResponse): string {
  // At this exact moment, TypeScript only lets you access 'status' 
  // because it's the only property shared by both interfaces.

  if (response.status === "success") {
    // TypeScript looks at the check above and says: 
    // "Ah! This must be a SuccessResponse!"
    // It safely unlocks 'data' and blocks you from touching 'code' or 'message'.
    return `Data received: ${response.data.toUpperCase()}`;
  }
  
  if (response.status === "error") {
    // TypeScript narrows the type here to ErrorResponse.
    // 'code' and 'message' are now perfectly safe to use.
    return `Error ${response.code}: ${response.message}`;
  }

  return "Unknown response state.";
}

// 4. Test cases
const successResult: ApiResponse = { status: "success", data: "user_profile_loaded" };
const errorResult: ApiResponse = { status: "error", code: 404, message: "Not Found" };

console.log(handleResponse(successResult)); // Output: Data received: USER_PROFILE_LOADED
console.log(handleResponse(errorResult));   // Output: Error 404: Not Found